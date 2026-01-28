import React, { useRef, useEffect } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const mouse = { x: null, y: null };
    const clickPos = { x: null, y: null, active: false, radius: 0 };
    
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseDown = (e) => {
      clickPos.x = e.clientX;
      clickPos.y = e.clientY;
      clickPos.active = true;
      clickPos.radius = 0; // Reset radius gelombang kejut
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    resize();

    const particles = [];
    const particleCount = 200; // Jumlah partikel dasar

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {     
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 25) + 5;
        this.color = 'rgba(229, 229, 229, 0.2)';
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
      update() {
        // --- LOGIKA HOVER (Mendorong Partikel) ---
        if (mouse.x !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let maxDistance = 150;
          
          if (distance < maxDistance) {
            let force = (maxDistance - distance) / maxDistance;
            this.x -= (dx / distance) * force * this.density;
            this.y -= (dy / distance) * force * this.density;
          } else {
            // Kembali ke posisi awal secara perlahan
            this.x -= (this.x - this.baseX) * 0.05;
            this.y -= (this.y - this.baseY) * 0.05;
          }
        }

        // --- LOGIKA KLIK (Shockwave Effect) ---
        if (clickPos.active) {
          let dx = clickPos.x - this.x;
          let dy = clickPos.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          // Jika partikel terkena radius gelombang kejut
          if (Math.abs(distance - clickPos.radius) < 20) {
            this.x -= (dx / distance) * 10;
            this.y -= (dy / distance) * 10;
          }
        }
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update radius gelombang kejut saat klik
      if (clickPos.active) {
        clickPos.radius += 15; // Kecepatan gelombang merambat
        if (clickPos.radius > 600) { // Jarak maksimal gelombang
          clickPos.active = false;
        }
        
        // Gambar lingkaran gelombang samar (Optional visual)
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - clickPos.radius / 600})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(clickPos.x, clickPos.y, clickPos.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      particles.forEach(p => {
        p.draw();
        p.update();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1, background: '#0D0D0D' }} 
    />
  );
}