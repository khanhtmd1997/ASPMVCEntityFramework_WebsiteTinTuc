using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ASP.Models;
using PagedList;
using PagedList.Mvc;

namespace ASP.Controllers.Admin
{
    public class TinTucsController : Controller
    {
        private Blog123Entities db = new Blog123Entities();

        // GET: TinTucs
        public ViewResult Index(int? page)
        {
            int pageSize = 5;
            int pageNumber = (page ?? 1);

            return View(db.TinTucs.ToList().OrderBy(n=>n.Id).ToPagedList(pageNumber, pageSize));

        }
        //public async Task<ActionResult> Index()
        //{
            
        //    var tinTucs = db.TinTucs.Include(t => t.DanhMuc);
        //    return View(await tinTucs.ToListAsync());

        //}

        // GET: TinTucs/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TinTuc tinTuc = await db.TinTucs.FindAsync(id);
            if (tinTuc == null)
            {
                return HttpNotFound();
            }
            return View(tinTuc);
        }

        // GET: TinTucs/Create
        public ActionResult Create()
        {
            ViewBag.DanhMucId = new SelectList(db.DanhMucs, "DanhMucId", "TenDanhMuc");
            return View();
        }

        // POST: TinTucs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "Id,TieuDe,TomTat,NoiDung,Picture,CreateDate,DanhMucId")] TinTuc tinTuc)
        {
            if (ModelState.IsValid)
            {
                db.TinTucs.Add(tinTuc);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.DanhMucId = new SelectList(db.DanhMucs, "DanhMucId", "TenDanhMuc", tinTuc.DanhMucId);
            return View(tinTuc);
        }

        // GET: TinTucs/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TinTuc tinTuc = await db.TinTucs.FindAsync(id);
            if (tinTuc == null)
            {
                return HttpNotFound();
            }
            ViewBag.DanhMucId = new SelectList(db.DanhMucs, "DanhMucId", "TenDanhMuc", tinTuc.DanhMucId);
            return View(tinTuc);
        }

        // POST: TinTucs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,TieuDe,TomTat,NoiDung,Picture,CreateDate,DanhMucId")] TinTuc tinTuc)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tinTuc).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.DanhMucId = new SelectList(db.DanhMucs, "DanhMucId", "TenDanhMuc", tinTuc.DanhMucId);
            return View(tinTuc);
        }

        // GET: TinTucs/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TinTuc tinTuc = await db.TinTucs.FindAsync(id);
            if (tinTuc == null)
            {
                return HttpNotFound();
            }
            return View(tinTuc);
        }

        // POST: TinTucs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            TinTuc tinTuc = await db.TinTucs.FindAsync(id);
            db.TinTucs.Remove(tinTuc);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
