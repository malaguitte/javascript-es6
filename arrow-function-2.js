(function() {

    const btn = document.getElementById('btn');
    // const btn = document.querySelector('#btn');

    // btn.addEventListener('click', function(){
    //     console.log(this);
    // });

    // btn.addEventListener('click', () => {
    //     console.log(this);
    // });

    const sandwich = {
        bread:'italian',
        cheese:'cheedar',

        prepare: function() {
            return `I want a sandwich with ${this.bread} bread and ${this.cheese} cheese! Please :)`;
        },

        // make: function () {
        //     var that = this;
        //     window.setTimeout(function() {
        //         console.log(that.prepare());
        //     }, 500);
        // }

        make: function() {
            window.setTimeout(() => {
                console.log(this.prepare());
            },500);
        }
    };

    btn.addEventListener('click', function() {
        sandwich.make();
    });

})();