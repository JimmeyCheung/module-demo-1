import './app4.css';
import $ from 'jquery';

const app4 = {
    init(){
        this.render();
    },
    render(){
        $(".circle").on("click",function(e){
            $(this).toggleClass("active");
        })
    }
};
export default app4;