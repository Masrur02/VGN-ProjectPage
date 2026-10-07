(() => {
  const copyBtn = document.querySelector('[data-copy]');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const target = document.querySelector(copyBtn.dataset.copy);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.innerText);
        const old = copyBtn.textContent;
        copyBtn.textContent = 'Copied';
        setTimeout(() => copyBtn.textContent = old, 1300);
      } catch (_) {}
    });
  }

  // Avoid spending bandwidth on looping demos far outside the viewport.
  const videos = document.querySelectorAll('.autoplay-video');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.play().catch(() => {});
      else entry.target.pause();
    });
  }, { rootMargin: '220px 0px' });
  videos.forEach(v => io.observe(v));
})();
