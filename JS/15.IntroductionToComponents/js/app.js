// Components

// Pages, Components, Blocks and Elements


class Card{
    constructor(){
        this.template = `
            <div class="card">
                <div class="card-header">
                    <h1>Card Header</h1>
                </div>
                <div class="card-body">
                    <p>Card Body</p>
                </div>
                <div class="card-footer">
                    <p>Card Footer</p>
                </div>
            </div>
        `
        this.style = `
            .card{
                width: 300px;
                height: 300px;
                border: 1px solid green;
            }
        `

        this.clicked = () => {
            console.log("Clicked on card")
        }
    }

}