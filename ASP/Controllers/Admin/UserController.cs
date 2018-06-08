using ASP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASP.Controllers.Admin
{
    public class UserController : Controller
    {
        private Blog123Entities1 db = new Blog123Entities1(); 
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Register(Registration reg)
        {
            if (ModelState.IsValid)
            {
                db.Registrations.Add(reg);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(Registration reg)
        {
            if (ModelState.IsValid)
            {
                var details = (from userlist in db.Registrations where userlist.Username == reg.Username && userlist.Password == reg.Password
                               select new
                               {
                                   userlist.UserId,
                                   userlist.Username
                               }).ToList();
                if (details.FirstOrDefault() != null) 
                    {
                    Session["UserId"] = details.FirstOrDefault().UserId;
                    Session["Username"] = details.FirstOrDefault().Username;
                    return RedirectToAction("Index", "User");
                }
            }
            else
            {
                ModelState.AddModelError("","Bạn đăng nhập sai");
            }
            return View(reg);
        }
       
    public ActionResult Logout()
        {
            Session["Username"] = null;
            return RedirectToAction("../../User/Login");
        }
    }
}