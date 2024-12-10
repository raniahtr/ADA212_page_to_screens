// Add to a new file: assets/js/page-turner.js

class PageTurner {
    constructor() {
      this.currentPage = 0;
      this.pages = [
        'introduction',
        'origins',
        'path-to-adaptation',
        'grand-premiere',
        'global-reception',
        'budget-investment',
        'plot-twist'
      ];
      this.isAnimating = false;
      this.init();
    }
  
    init() {
      this.createPages();
      this.setupNavigation();
    }
  
    createPages() {
      const container = document.createElement('div');
      container.className = 'page-container';
      
      this.pages.forEach((page, index) => {
        const pageElement = document.createElement('div');
        pageElement.className = 'page';
        pageElement.id = `page-${page}`;
        
        if (index !== 0) {
          pageElement.style.transform = 'rotateY(-180deg)';
        }
        
        // Create front content
        const frontContent = document.createElement('div');
        frontContent.className = 'page-content';
        frontContent.innerHTML = `
          <div class="page-number">${index + 1} / ${this.pages.length}</div>
        `;
        
        // Create back content
        const backContent = document.createElement('div');
        backContent.className = 'page-content page-back';
        
        pageElement.appendChild(frontContent);
        pageElement.appendChild(backContent);
        container.appendChild(pageElement);
      });
      
      document.querySelector('.main-content').appendChild(container);
    }
  
    setupNavigation() {
      document.querySelectorAll('.nav-item').forEach((link, index) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          if (!this.isAnimating) {
            const targetPage = index;
            this.turnToPage(targetPage);
          }
        });
      });
    }
  
    async turnToPage(targetPage) {
      if (this.currentPage === targetPage || this.isAnimating) return;
      
      this.isAnimating = true;
      const direction = targetPage > this.currentPage ? 'forward' : 'backward';
      const pagesToTurn = direction === 'forward' 
        ? Array.from({ length: targetPage - this.currentPage }, (_, i) => this.currentPage + i)
        : Array.from({ length: this.currentPage - targetPage }, (_, i) => this.currentPage - i - 1);
      
      for (const pageNum of pagesToTurn) {
        await this.animatePage(pageNum, direction);
      }
      
      this.currentPage = targetPage;
      this.isAnimating = false;
      
      // Update URL without reload
      history.pushState({}, '', `/${this.pages[targetPage]}`);
    }
  
    animatePage(pageNum, direction) {
      return new Promise(resolve => {
        const page = document.querySelector(`#page-${this.pages[pageNum]}`);
        page.classList.add('turning');
        
        setTimeout(() => {
          page.classList.remove('turning');
          page.classList.toggle('turned', direction === 'forward');
          resolve();
        }, 1500);
      });
    }
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new PageTurner();
  });