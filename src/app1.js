import './app1.css';
import $ from 'jquery';

const app1 = {
    n: parseFloat(localStorage.getItem("app1.n")) || 100,
    events: {
        "#add": "add1",
        "#minus": "minus1",
        "#multi": "multi2",
        "#div": "div2"
    },
    init: function(){
        this.bindEvent();
        this.render();
    },
    bindEvent: function(){
        const evts = this.events;
        const that = this;
        for(let selector in evts){
            $(selector).click(function(){
                console.log(selector,evts[selector])
                that[evts[selector]]();
                that.update();
            });
        }
    },
    render(){
        $("#output").text(this.n);
    },
    add1(){
        this.n += 1;
    },
    minus1(){
        this.n -= 1;
    },
    multi2(){
        this.n *= 2;
    },
    div2(){
        this.n /= 2;
    },
    update(){
        this.render();
        localStorage.setItem("app1.n",this.n.toString());
    }
};

export default  app1;