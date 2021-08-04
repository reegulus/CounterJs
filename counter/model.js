export default {
    counter: 0,
    saveToLocalStorage: function () {
        localStorage.setItem('counter', JSON.stringify(this.counter))
    },
    increase: function () {
        ++this.counter
        this.saveToLocalStorage()
    },
    decrease: function () {
        --this.counter
        this.saveToLocalStorage()
    },
    reset: function () {
        this.counter = 0
        this.saveToLocalStorage()
    }
}