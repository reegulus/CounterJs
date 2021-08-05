export default class View {
    constructor(value) {
        this.input = document.getElementById('input')
        this.updateCounter(value)
    }
    updateCounter (data) {
        this.input.value = data
    }
}