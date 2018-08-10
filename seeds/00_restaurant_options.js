
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {Restaurant:"Panda Express", Image:"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0010/8217/brand.gif?itok=nKwfh7NR", Hours:"10Am - 9Pm", Url:"https://www.pandaexpress.com/menu"},
        {Restaurant:"Rubios", Image:"https://www.eatsleepcoupon.com/wp-content/uploads/2017/02/Rubios-Fresh-Mexican-Grill-Coupon.jpg", Hours:"10:30Am - 9Pm", Url:"https://www.rubios.com/#block-bean-our-menu"},
        {Restaurant:"Tokyo Joes", Image:"https://origin.ih.constantcontact.com/fs167/1102455592914/img/477.jpg",Hours:"10:45Am - 9:05Pm", Url:"http://tokyojoes.com/menu-nutrition/starters/"},
        {Restaurant:"Wahoo's", Image:"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0011/8032/brand.gif?itok=kUx_Hgka", Hours:"10:30Am - 9Pm", Url:"https://www.wahoos.com/colorado/"},
        {Restaurant:"Noodles & Company", Image:"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112014/noodlesco_0_0.png?itok=SG63s9a5", Hours:"11Am - 9Pm", Url:"https://www.noodles.com/menu/"},
        {Restaurant:"Schwarma", Image:"https://cdn.doordash.com/media/restaurant/cover/ShawarmaMediterraneanGrill_Centennial_CO.png", Hours:"10Am - 9Pm", Url:"https://shawarmamediterraneangrill.com/menu-2/"},
        {Restaurant:"Corner Bakery", Image:"https://www.cornerbakerycafe.com/Themes/CornerBakeryCafe/Styles/App/img/header_cbclogo_234x234.jpg", Hours:"6:30Am - 6Pm", Url:"https://www.cornerbakerycafe.com/menu"},
        {Restaurant:"Chipotle", Image:"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0021/8854/brand.gif?itok=QyuTSX00", Hours:"10:45Am - 9Pm", Url:"https://www.chipotle.com/menu"},
        {Restaurant:"Modern Market", Image:"https://pbs.twimg.com/profile_images/676498884454055936/sWDDOYDq_400x400.jpg", Hours:"7Am - 9Pm", Url:"https://www.modernmarket.com/menu?id=42705"},
        {Restaurant:"Mod Pizza", Image:"https://pbs.twimg.com/profile_images/1012448628537880577/r12wMjbj_400x400.jpg", Hours:"10:30Am - 10Pm", Url:"https://modpizza.com/menu/"},
        {Restaurant:"Five Guys", Image:"https://www.levelaccess.com/wp-content/uploads/2017/08/Five-Guys-250x250.png", Hours:"11Am - 10Pm", Url:"http://www.fiveguys.com/Menu"},
        {Restaurant:"Garbonzos", Image:"https://bloximages.chicago2.vip.townnews.com/insidenova.com/content/tncms/assets/v3/editorial/5/ba/5ba92a66-793f-11e7-93ae-8f1bfba5b646/5984b749209cd.image.png", Hours:"11Am - 9Pm", Url:"http://www.eatgarbanzo.com/menu/"},
        {Restaurant:"Tamale Kitchen", Image:"https://cdn.doordash.com/media/restaurant/cover/TamaleKitchen_Lakewood_CO.png", Hours:"8Am - 8Pm", Url:"https://www.thetamalekitchen.com/menu"}
      ]);
    });
};
