import './app2.css';
import $ from 'jquery';

const app2 = {
    tabIndex: localStorage.getItem("app2.tabIndex") || 0,
    init(){
        this.bindEvent();
        this.render();
    },
    render(){
        const i = app2.tabIndex;
        $(".tab").eq(i).addClass("selected")
            .siblings().removeClass("selected");
        $(".content")
            .eq(i).addClass("active")
            .siblings().removeClass("active");
        localStorage.setItem("app2.tabIndex",i);
    },
    bindEvent(){
        $(".tab-wrap").on("click",".tab",(e)=>{
            app2.tabIndex = $(e.currentTarget).attr("data-index");
            app2.render();
        })
    },

};
export default app2;