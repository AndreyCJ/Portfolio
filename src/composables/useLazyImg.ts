import { onMounted, onUnmounted } from 'vue';

interface IUseLazyImg {
  observeLazyImg: (imgEl: HTMLImageElement) => void;
}

export function useLazyImg(
  observerOptions?: IntersectionObserverInit
): IUseLazyImg {
  const defaultObserverOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '10px',
    threshold: 0.5,
  };
  const observer = new IntersectionObserver(
    intersectionHandler,
    observerOptions || defaultObserverOptions
  );

  function loadContent(el: HTMLImageElement) {
    if (!el.dataset || !el.dataset.src)
      throw new Error("You should provide element's data src");
    el.src = el.dataset.src;
  }

  function intersectionHandler(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('loading');
        loadContent(entry.target as HTMLImageElement);
        observer.unobserve(entry.target);
      }
    });
  }

  function observeLazyImg(imgEl: HTMLImageElement) {
    observer.observe(imgEl);
  }

  onMounted(() => {
    console.log('mounted');
  });

  onUnmounted(() => {
    observer.disconnect();
    console.log('unmounting observer');
  });

  return {
    observeLazyImg,
  };
}
