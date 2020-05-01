export default function animacaoScroll() {
  const sections = document.querySelectorAll('[data-anima="scroll"]');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function scrollSuave() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if (isSectionVisible) {
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo')
        }
      })
    }

    scrollSuave();

    window.addEventListener('scroll', scrollSuave)
  }
}
