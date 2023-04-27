class Footbar extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML=`
        <div class="container text-center">
        <small style="color:white" >Copyright &copy; Zuzlifatul Adnan 2023</small>
        </div>`;
    }
}
customElements.define("foot-bar", Footbar);