class Tooltip extends google.maps.OverlayView {
    #position;
    #content;
    #div;
    #onClose;

    constructor(position, content, map, onClose) {
        super();
        this.#position = position;
        this.#content = content;
        this.#onClose = onClose;
        this.#div = null;
        this.setMap(map);
    }

    onAdd() {
        this.#div = document.createElement('div');
        this.#div.className = 'tooltip';

        const content = document.createElement('span');
        content.className = 'tooltip-content';
        content.textContent = this.#content;

        const closeBtn = document.createElement('span');
        closeBtn.className = 'tooltip-close';
        closeBtn.textContent = '×';
        closeBtn.addEventListener('click', () => this.#onClose?.());

        this.#div.appendChild(content);
        this.#div.appendChild(closeBtn);
        this.getPanes().floatPane.appendChild(this.#div);
    }

    draw() {
        const projection = this.getProjection();
        if (!projection || !this.#div) return;

        const pos = projection.fromLatLngToDivPixel(this.#position);
        this.#div.style.left = `${pos.x}px`;
        this.#div.style.top = `${pos.y}px`;
    }

    onRemove() {
        if (this.#div?.parentNode) {
            this.#div.parentNode.removeChild(this.#div);
            this.#div = null;
        }
    }

    setContent(content) {
        this.#content = content;
        if (this.#div) {
            const contentEl = this.#div.querySelector('.tooltip-content');
            if (contentEl) contentEl.textContent = content;
        }
    }

    destroy() {
        this.setMap(null);
    }
}

// Inject CSS
const style = document.createElement('style');
style.textContent = `
    .tooltip {
        position: absolute;
        transform: translate(-50%, -100%) translateY(-8px);
        background: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 8px;
        font-size: 12px;
        white-space: nowrap;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 6px solid transparent;
        border-top-color: white;
    }
    .tooltip::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 7px solid transparent;
        border-top-color: #ccc;
    }
    .tooltip-close {
        cursor: pointer;
        color: #999;
        font-size: 14px;
        line-height: 1;
    }
    .tooltip-close:hover {
        color: #333;
    }
`;
document.head.appendChild(style);