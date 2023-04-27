class NavigasiBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-light animated fadeInDown" style="background: blue ;color:white">
        <a class="navbar-brand animated pulse infinite">Album Orkem</a>
        <form class="form-inline">
            <input type="text" class="form-control mr-sm-2" name="searchBar" id="searchBar"
                placeholder="Cari orkem disini ...">

        </form>
    </nav>
        `;
    }
}

customElements.define("navigasi-bar", NavigasiBar);