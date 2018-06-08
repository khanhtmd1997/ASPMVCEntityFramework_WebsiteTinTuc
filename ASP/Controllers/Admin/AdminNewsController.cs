using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASP.Controllers.Admin
{
    public class AdminNewsController : Controller
    {
        // GET: AdminNews
        public ActionResult Index()
        {
            return View();
        }

        // GET: AdminNews/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: AdminNews/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: AdminNews/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: AdminNews/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: AdminNews/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: AdminNews/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: AdminNews/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
