import router from "@mongez/react-router";
import BaseLayout from "./component/BaseLayout";
import Contact from "./component/Contact/Contact";
import Article from "./component/Home/Article";


router.partOf(BaseLayout, [
    {
      path: "/contact",
      component: Contact,
    },
    {
    path:'/',
    component: Article,
    },
  ]);