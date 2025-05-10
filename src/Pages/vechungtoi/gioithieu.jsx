import "../../index.css";

function Gioithieu() {
    return (
        <div className="mb-[100px]">
            <div className="relative">
                <img
                    src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-e-commerce-book-knowledge-teacher-education-banner-background-image_186718.jpg"
                    className="w-full h-72 object-cover"
                />

                {/* Breadcrumb đè lên ảnh, căn giữa */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="flex text-white font-semibold text-sm drop-shadow-md">
                        <a href="/" className="breadcrumb-arrow-left bg-gray-400 px-4 py-2">
                            Trang chủ
                        </a>
                        <div className="breadcrumb-arrow-right bg-orange-500 px-8 py-2">
                            Trang giới thiệu
                        </div>
                    </div>
                </div>
            </div>
         <div className="max-w-[1000px] mx-auto px-4 mt-8">
            <div className="grid grid-cols-2 gap-x-6">
                <div className="flex flex-col gap-y-4">
                    <p className="text-justify font-semibold text-blue-500 italic">
                        Chào mừng quý học viên đến với Trung tâm Ngoại ngữ Quốc tế BlueOcean – nơi truyền cảm hứng học tập, khám phá thế giới ngôn ngữ và kết nối toàn cầu! </p>
                    <p className="text-justify">
                        Tọa lạc tại địa chỉ 380 Trần Hưng Đạo, phường An Lưu, thị xã Kinh Môn, tỉnh Hải Dương, BlueOcean tự hào là một trong những trung tâm đào tạo ngoại ngữ uy tín hàng đầu khu vực. Với phương châm “Chất lượng tạo nên sự khác biệt”, chúng tôi không ngừng đổi mới, nâng cao chương trình giảng dạy để mang đến trải nghiệm học tập tốt nhất cho mọi học viên.
                    </p>
                        Trung tâm BlueOcean hiện đang cung cấp đa dạng các khóa học ngoại ngữ chuyên sâu và thực tiễn, bao gồm:
        
                        Luyện thi HSK (tiếng Trung): Từ cấp độ sơ cấp đến cao cấp, giúp học viên tự tin chinh phục kỳ thi quốc tế.
        
                        Tiếng Trung giao tiếp: Ứng dụng linh hoạt trong đời sống, công việc, du học và xuất khẩu lao động.
        
                        Tiếng Anh giao tiếp: Đào tạo phát âm chuẩn, tăng cường phản xạ và khả năng sử dụng tiếng Anh trong môi trường quốc tế.
        
                        Tiếng Nhật (JLPT) và tiếng Hàn (TOPIK): Được thiết kế theo chuẩn quốc tế, phù hợp với người đi làm, học sinh – sinh viên và người có nhu cầu học tập, làm việc tại Nhật Bản, Hàn Quốc.
        
                        Điểm mạnh của BlueOcean:
        
                        Đội ngũ giảng viên nhiệt huyết, giàu kinh nghiệm, tận tâm trong từng tiết học.
        
                        Môi trường học hiện đại, thân thiện và giàu tính tương tác.
        
                        Lộ trình học rõ ràng, cá nhân hóa theo nhu cầu từng học viên.
        
                        Hỗ trợ học viên luyện tập thực tế thông qua các buổi ngoại khóa, giao lưu, câu lạc bộ ngôn ngữ định kỳ.
        
                        Chúng tôi tin rằng, với sự đồng hành của BlueOcean, bạn sẽ có đủ nền tảng và sự tự tin để vươn xa trên hành trình học tập và hội nhập quốc tế.
        
                    
                    
                        <p className="text-justify ">📍 Địa chỉ: 380 Trần Hưng Đạo, phường An Lưu, thị xã Kinh Môn, tỉnh Hải Dương</p>
                        <p className="text-justify "> 📞 Hotline tư vấn: 0822.663.686</p>
                        <p className="text-justify ">🌐 Website: blueocean.com</p>

                        
                </div>
                <img src="https://scontent.fhph4-1.fna.fbcdn.net/v/t39.30808-6/495456977_2134549913657949_7291852360507423709_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=nIkrDpcxuoAQ7kNvwGtiWoy&_nc_oc=AdlIwb6lhkcn6ORts1E3n_rRvpoTZYGHci2_KXtG3-3E2K3LHoFP2qjMpF-frbi8Owg&_nc_zt=23&_nc_ht=scontent.fhph4-1.fna&_nc_gid=I9DSG-fQ5a907MMrqVk19w&oh=00_AfLvciIWRuGXqEVb3tRZ1MxLA7h1kBVBHeCbsamD2D7vWQ&oe=6824E779" className="w-full h-auto" />
            </div>
            </div>

        </div>
    );
}

export default Gioithieu;
