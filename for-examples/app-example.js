let ticking = false;

function updateScrollEffect() {
    const section = document.querySelector(".pinned-section");
    const image = document.querySelector(".console");
  
    if (!section || !image) return;
  
    // セクション内のスクロール量を取得
    const rect = section.getBoundingClientRect();
    const scrollProgress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);
  
    // 画像をズーム＋回転＋フェード
    const scale = 1 + scrollProgress * 0.5; // 最大1.5倍ズーム
    const rotation = scrollProgress * 360;  // 360度回転
    const opacity = 1 - scrollProgress * 0.3;
  
    image.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    image.style.opacity = opacity;
    
    ticking = false;
}

window.addEventListener("scroll", () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffect);
        ticking = true;
    }
});
  