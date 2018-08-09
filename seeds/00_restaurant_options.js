
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {Restaurant:"Panda Express", Image:"https://en.wikipedia.org/wiki/Panda_Express#/media/File:Panda_Express_logo.svg", Hours:"10Am-9Pm", Url:"https://www.pandaexpress.com/menu"},
        {Restaurant:"Rubios", Image:"https://www.eatsleepcoupon.com/wp-content/uploads/2017/02/Rubios-Fresh-Mexican-Grill-Coupon.jpg", Hours:"1030Am-9pm", Url:"https://www.rubios.com/#block-bean-our-menu"},
        {Restaurant:"Tokyo Joes", Image:"https://pbs.twimg.com/profile_images/59278891/tj.logo_400x400.gif", Hours:"1045Am-905Pm", Url:"http://tokyojoes.com/menu-nutrition/starters/"},
        {Restaurant:"Wahoo's", Image:"http://dcisolutions.net/wp-content/uploads/2016/07/wahoos.png", Hours:"1030Am-9Pm", Url:"https://www.wahoos.com/colorado/"},
        {Restaurant:"Noodles & Company", Image:"https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/15946.png", Hours:"11Am-9Pm", Url:"https://www.noodles.com/menu/"},
        {Restaurant:"Schwarma", Image:"https://cdn.doordash.com/media/restaurant/cover/ShawarmaMediterraneanGrill_Centennial_CO.png", Hours:"10Am-9Pm", Url:"https://shawarmamediterraneangrill.com/menu-2/"},
        {Restaurant:"Corner Bakery", Image:"https://www.cornerbakerycafe.com/Themes/CornerBakeryCafe/Styles/App/img/header_cbclogo_234x234.jpg", Hours:"630Am-6Pm", Url:"https://www.cornerbakerycafe.com/menu"},
        {Restaurant:"Chipotle", Image:"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0021/8854/brand.gif?itok=QyuTSX00", Hours:"1045Am-9Pm", Url:"https://www.chipotle.com/menu"},
        {Restaurant:"Modern Market", Image:"https://pbs.twimg.com/profile_images/676498884454055936/sWDDOYDq_400x400.jpg", Hours:"7Am-9Pm", Url:"https://www.modernmarket.com/menu?id=42705"},
        {Restaurant:"Mod Pizza", Image:"https://pbs.twimg.com/profile_images/1012448628537880577/r12wMjbj_400x400.jpg", Hours:"1030Am-10Pm", Url:"https://modpizza.com/menu/"},
        {Restaurant:"Five Guys", Image:"https://www.levelaccess.com/wp-content/uploads/2017/08/Five-Guys-250x250.png", Hours:"11Am-10Pm", Url:"http://www.fiveguys.com/Menu"},
        {Restaurant:"Garbonzos", Image:"https://bloximages.chicago2.vip.townnews.com/insidenova.com/content/tncms/assets/v3/editorial/5/ba/5ba92a66-793f-11e7-93ae-8f1bfba5b646/5984b749209cd.image.png", Hours:"11Am-9Pm", Url:"http://www.eatgarbanzo.com/menu/"},
        {Restaurant:"Tamale Kitchen", Image:"https://static.wixstatic.com/media/d296d5_bf83910726664bea9fcba22de7dbbe5a~mv2.png/v1/fill/w_249,h_189,al_c,usm_0.66_1.00_0.01/d296d5_bf83910726664bea9fcba22de7dbbe5a~mv2.png", Hours:"8Am-8Pm", Url:"https://www.thetamalekitchen.com/menu"}
      ]);
    });
};
