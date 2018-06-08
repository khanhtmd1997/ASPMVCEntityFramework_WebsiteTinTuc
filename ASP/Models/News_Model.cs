using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ASP.Models
{
    public class News_Model
    {
    }
    public class HomeModel
    {
        public List<TinTuc> tintucs { get; set; }
        public List<TinTuc> tintuc1s { get; set; }
        public List<TinTuc> tintuc5s { get; set; }
        public List<DanhMuc> danhmucs { get; set; }
    }
    public class ChitiettintucModel
    {
        public TinTuc chitiets { get; set; }

        public List<TinTuc> tintucs { get; set; }
    }
}