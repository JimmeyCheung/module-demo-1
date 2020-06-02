import './app3.css';
import $ from 'jquery';

const app3 = {
    init(){
        this.bindEvent();
    },
    bindEvent(){
        $(".square").on("click",function(e){
            $(this).toggleClass("active");
        })
    }
};
export default app3;