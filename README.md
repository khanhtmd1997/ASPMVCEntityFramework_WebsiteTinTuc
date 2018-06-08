# ASPMVCEntityFramework_WebsiteTinTuc
Chuẩn bị database (TinTuc,DanhMuc,Registration)
1.Chỉnh web.config kết nối database
2.thêm layout login,layout temple
3.tạo moddel bằng data ADO
4.tạo Controller Tintuc,DanhMuc,Regstration
5.ở HomeController (
//chuỗi kết nối database
Blog123Entities db = new Blog123Entities();
        public ActionResult Index()
        {
        // hiển thị ra 10 tin theo thứ tự id
            var tintuc = db.TinTucs.Take(10).OrderByDescending(a => a.Id).ToList();
            //hiểm thị 5 tin
            var tintuc5 = db.TinTucs.Take(5).OrderByDescending(a => a.Id).ToList();
            //hiển thị danh mục
            var danhmuc = db.DanhMucs.ToList();
            //tin mới nhất 
            var tintuc1 = db.TinTucs.Take(1).OrderByDescending(a => a.Id).ToList();
            var HomeModel = new HomeModel
            {
                //tạo News_Model (Models) rồi khai báo bước 6
                tintuc5s = tintuc5,
                tintuc1s = tintuc1,
                tintucs = tintuc,
                danhmucs = danhmuc
            };
            return View(HomeModel);
        }
        
        6.tạo class News_Model (Models)
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
7.// thêm Chitiettintuc vao HomeController để hiển thị trang chi tiết

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
        //add view Chitiettintuc
        @using ASP.Models
@model ASP.Models.ChitiettintucModel
@{
    ViewBag.Title = "Chitiettintuc";
    Layout = "~/Views/Shared/_Layout.cshtml";
}
<table>
    <tr>
        <td  style="padding-top: 6px; padding-left: 12px; padding-right: 12px; text-align: justify;">

            <h2>@Html.Raw(Model.chitiets.TieuDe)</h2>
        </td>
        <p style="font-style:italic;font-size:15px;text-align:right">Ngày đăng:@Html.Raw(Model.chitiets.CreateDate)</p>
    </tr>

    <tr>

        <td style="text-align: justify;">
            <p style="text-align: justify;">
                <a class="MagicZoomPlus" href="@Html.Raw(Model.chitiets.Picture)">
                    <img style="border: 1px solid; border-color: #65a2a3;" src="@Html.Raw(Model.chitiets.Picture)"
                         width="250px" height="250px" />
                </a>
            
       
                <span  style="font-family: Verdana, sans-serif; font-size: 10pt;font-weight:bold;">
                    @Html.Raw(Model.chitiets.TomTat)
                </span>
                </p>
                    </td>
            
        
           
        
      
    </tr>
   
    <tr>
        <td>
            <p style="text-align: justify;"><span style="font-size:25px;">@Html.Raw(Model.chitiets.NoiDung)</span></p>
        </td>
    </tr>

</table>






