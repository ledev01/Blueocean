import "../../index.css";

function Sumenh() {
    return (
        <div className="pb-[100px]">
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
                            Sứ mệnh của chúng tôi
                        </div>
                    </div>
                </div>
            </div>
            
                 <div className="max-w-[1000px] mx-auto px-4 mt-8">
            <div className="grid grid-cols-2 gap-x-6">
                <div className="flex flex-col gap-y-4">
                                        <p className="text-justify font-semibold text-blue-500 italic">
                                                                   SỨ MỆNH CỦA TRUNG TÂM NGOẠI NGỮ QUỐC TẾ BLUEOCEAN

</p>
                    <p className="text-justify">

Tại BlueOcean, chúng tôi tin rằng ngôn ngữ không chỉ là công cụ giao tiếp, mà còn là chiếc chìa khóa mở ra cánh cửa tri thức, cơ hội và kết nối toàn cầu. Vì vậy, sứ mệnh cốt lõi của chúng tôi là truyền cảm hứng học tập, xây dựng nền tảng ngoại ngữ vững chắc và đồng hành cùng học viên trên hành trình vươn ra thế giới.

Chúng tôi cam kết mang lại:

Chất lượng đào tạo hàng đầu: Mỗi chương trình học tại BlueOcean đều được thiết kế bài bản, cập nhật liên tục theo chuẩn quốc tế, giúp học viên không chỉ học để biết mà còn học để ứng dụng.

Môi trường học tập tích cực và truyền cảm hứng: Chúng tôi xây dựng một không gian học tập hiện đại, thân thiện, nơi mọi học viên được khuyến khích phát triển toàn diện cả kỹ năng lẫn tư duy.

Sự đồng hành và hỗ trợ lâu dài: Đội ngũ giảng viên và nhân viên tại BlueOcean không chỉ là người dạy, mà còn là người bạn đồng hành đáng tin cậy, luôn sẵn sàng lắng nghe và giúp đỡ học viên vượt qua khó khăn trong quá trình học.

Cơ hội hội nhập quốc tế: Thông qua ngôn ngữ, chúng tôi giúp học viên mở rộng cơ hội học tập, làm việc và tiếp cận tri thức toàn cầu – từ đó tự tin khẳng định bản thân trong môi trường đa văn hóa.

BlueOcean không đơn thuần là nơi dạy ngoại ngữ. Chúng tôi là nơi ươm mầm ước mơ, nuôi dưỡng niềm tin và chắp cánh cho tương lai.
                        </p>

                        
                </div>
                <img src="http://localhost:3000/center.jpg" className="w-full h-auto" />
            </div>
            </div>
        </div>
    );
}

export default Sumenh;
