import React, { PureComponent } from 'react'

class AddFishForm extends PureComponent {
  createFish(event) {
    event.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    }
    console.log(fish)
    this.props.addFish(fish)
    this.fishForm.reset()
  }

  render() {
    return(
      <form ref={(input) => this.fishForm = input } className="fish-edit" onSubmit={this.createFish.bind(this)}>
        <input type="text" required placeholder="Fish name"
           ref={(input) => { this.name = input }}/>
        <input type="text" required placeholder="Fish price"
          ref={(input) => { this.price = input }}/>
        <select ref={(input) => { this.status = input }}>
          <option value="Available">Fresh!</option>
          <option value="UnAvailable">Sold out!</option>
        </select>
        <textarea type="text" required placeholder="Fish desc"
              ref={(input) => { this.desc = input }}></textarea>
        <input type="text" required placeholder="Fish image"
           ref={(input) => { this.image = input }}/>
        <button type="submit"> + Add fish></button>
      </form>
    )
  }
}

export default AddFishForm
