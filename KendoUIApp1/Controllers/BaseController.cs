using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KendoUIApp1.Models;

namespace KendoUIApp1.Controllers
{
    public abstract class BaseController : Controller
    {
        /// <summary>
        /// Called after the action method is invoked.
        /// </summary>
        /// <param name="filterContext">Information about the current request and action.</param>
        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            base.OnActionExecuted(filterContext);

            var result = filterContext.Result as ViewResultBase;
            if (result != null)
            {
                BaseViewModel model = filterContext.Controller.ViewData.Model as BaseViewModel;
                if (model != null)
                {
                    var request = this.HttpContext.Request;
                    UrlHelper urlHelper = new UrlHelper(request.RequestContext);

                    model.BaseURL = urlHelper.Content("~/");
                }
            }
        }
    }
}