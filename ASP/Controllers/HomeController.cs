using ASP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASP.Controllers
{
    public class HomeController : Controller
    {
        Blog123Entities db = new Blog123Entities();
        public ActionResult Index()
        {
            var tintuc = db.TinTucs.Take(10).OrderByDescending(a => a.Id).ToList();
            var tintuc5 = db.TinTucs.Take(5).OrderByDescending(a => a.Id).ToList();
            var danhmuc = db.DanhMucs.ToList();
            var tintuc1 = db.TinTucs.Take(1).OrderByDescending(a => a.Id).ToList();
            var HomeModel = new HomeModel
            {
                
                tintuc5s = tintuc5,
                tintuc1s = tintuc1,
                tintucs = tintuc,
                danhmucs = danhmuc
            };
            return View(HomeModel);
        }

        public ActionResult Chitiettintuc(int? id = 1)
        {
            
            var tintuc = db.TinTucs.ToList();
            var chitiet = db.TinTucs.Single(a => a.Id == id);
            var ChitiettintucModel = new ChitiettintucModel()
            {
                tintucs = tintuc,
                chitiets = chitiet
            };

            return View(ChitiettintucModel);
        }
    }
}
