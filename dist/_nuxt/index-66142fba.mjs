import{_ as l,r as d,y as u,o as r,c as _,b as t,t as i,d as f,a as h,p as g,e as m}from"./entry-aa6e85c7.mjs";const v={data(){return{actus:[],actusIndex:0,currentActu:{}}},beforeMount(){this.getActus()},methods:{async getActus(){this.actus.length>0&&(this.actus=[]),(await d(u(f,"actus"))).forEach(s=>{this.actus.push({id:s.id,text:s.data().text,title:s.data().title,imgUrl:s.data().imgUrl,imgName:s.data().imgName})}),this.getActuByIndex(this.actusIndex)},getActuByIndex(e){e>this.actus.length-1||e<0||(this.actusIndex=e,this.currentActu={title:this.actus[e].title,text:this.actus[e].text,imgUrl:this.actus[e].imgUrl},console.log(this.currentActu))}}},c=e=>(g("data-v-011effed"),e=e(),m(),e),p=h('<div id="img-box" data-v-011effed><img id="img-top" src="/stage.jpg" data-v-011effed><div id="img-text" class="p-2 col-10" data-v-011effed><h2 class="text-center text-white h5" data-v-011effed> Bienvenue sur le site de l\u2019association Images et Mouvements ! </h2></div></div><section class="presentation d-lg-flex" data-v-011effed><div class="presentation__img d-flex justify-content-center align-items-center" data-v-011effed><div class="presentation__img__box" data-v-011effed><img class="presentation__img__box__img" src="/stage.jpg" data-v-011effed></div><div class="presentation__img__deco" data-v-011effed></div></div><div class="presentation__text px-3 d-lg-flex flex-column justify-content-center px-lg-5" data-v-011effed><h1 class="h3" data-v-011effed>PR\xC9SENTATION</h1><p class="text-justify" data-v-011effed> L\u2019association \xE0 but non lucratif Images et Mouvements est une instance Morvandelle dont le Si\xE8ge Social est situ\xE9 au 21 rue des Foss\xE9s \xE0 Ch\xE2teau-Chinon, d\xE9clar\xE9e \xE0 la sous-pr\xE9fecture de Ch\xE2teau -Chinon.<br data-v-011effed> Depuis avril 2016, l\u2019association a pour mission de soutenir la culture en milieu rural.<br data-v-011effed> L\u2019association agit dans quatre champs que sont la cr\xE9ation, la diffusion, l\u2019enseignement et l\u2019action culturelle. </p></div></section>',2),x={class:""},I={class:"p-3 actu col-12 col-lg-6"},y=c(()=>t("h1",{class:"h3 text-center"},"ACTUALIT\xC9",-1)),b={class:"actu__navbox h5 d-flex justify-content-between align-items-center"},A=c(()=>t("span",{class:"material-icons"}," arrow_back_ios_new ",-1)),w=[A],S=c(()=>t("span",{class:"material-icons"}," arrow_forward_ios ",-1)),j=[S],B={class:""},C={class:""},N={class:"h5 text-center py-2"},U={class:"d-flex flex-column flex-md-row flex-lg-column flex-xxl-row align-items-center justify-content-md-around"},k=["src"],q={class:"text-justify text-white mt-3 col-md-7 col-lg-12"};function M(e,s,T,E,a,n){return r(),_("main",null,[p,t("section",x,[t("div",I,[y,t("div",b,[t("button",{onClick:s[0]||(s[0]=o=>n.getActuByIndex(a.actusIndex-1)),class:"actu__btn"},w),t("div",null,i(a.actusIndex+1+"/"+a.actus.length),1),t("button",{onClick:s[1]||(s[1]=o=>n.getActuByIndex(a.actusIndex+1)),class:"actu__btn"},j)]),t("div",B,[t("div",C,[t("h2",N,i(a.currentActu.title),1),t("div",U,[t("div",null,[t("img",{src:a.currentActu.imgUrl,class:"actu__img"},null,8,k)]),t("p",q,i(a.currentActu.text),1)])])])])])])}var D=l(v,[["render",M],["__scopeId","data-v-011effed"]]);export{D as default};