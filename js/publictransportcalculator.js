window.addEventListener('load', function () {

  var app = new Vue({
    el: '#app',
    data: {
      app: {
        title: 'Public Transport Calculator'
      },
      wattage: "",
      price: "",
      usageHours: ""
    },
    computed: {
      dailyCost: function () {
        let wattageHour = this.wattage * this.usageHours
        let kiloWattageHour = wattageHour / 1000.00

        return kiloWattageHour * this.price / 100.00
      },
      weeklyCost: function () {
        return this.dailyCost * 7
      },
      fortnightlyCost: function () {
        return this.dailyCost * 14
      },
      monthlyCost: function () {
        return this.dailyCost * 30
      },
      seasonalCost: function () {
        return this.dailyCost * 90
      },
      yearlyCost: function () {
        return this.dailyCost * 365
      }
    },
    methods: {
      convertToCurrency: function(number, format) {
        return numeral(number).format(format)
      }
    }
  })

})
