

// import { useEffect, useRef } from "react";

// function Body() {
//   const videoRef = useRef(null);

//   const courses = [
//     {
//       href: "/hsk1",
//       title: "Khóa học HSK",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4cgIbCO9vostYo3kAM_bCSXn8AN2MXSqHg&s",
//     },
//     {
//       href: "/giaotiep",
//       title: "Khóa học giao tiếp",
//       img: "https://ctihsk.edu.vn/wp-content/uploads/2024/08/giao-tiep-tieng-trung-co-ban.webp",
//     },
//     {
//       href: "/nhat5",
//       title: "Khóa học tiếng nhật",
//       img: "https://lophoctiengnhat.edu.vn/images/2018/07/30/hoc-tieng-nhat.jpg",
//     },
//     {
//       href: "/hansocap",
//       title: "Khóa học tiếng hàn",
//       img: "https://camnanggiaoduc.org/wp-content/uploads/2019/10/10-2.jpg",
//     },
//     {
//       href: "/anh",
//       title: "Khóa học tiếng anh",
//       img: "https://hungvuongtech.edu.vn/wp-content/uploads/2024/06/phuong-phap-day-hoc-tieng-anh-hieu-qua-danh-cho-giao-vien-va-hoc-sinh.jpg",
//     },
//   ];

//   // Phát video tiếp theo khi video đầu tiên kết thúc
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           video.play().catch((err) => console.log("Không tự phát được:", err));
//         } else {
//           video.pause();
//         }
//       },
//       {
//         threshold: 0.5,
//       }
//     );

//     const handleEnded = () => {
//       if (video.src.includes("ct1.mp4")) {
//         video.src = "/ct2.mp4";
//         video.play().catch((err) => console.log("Không tự phát ct2.mp4:", err));
//       }
//     };

//     video.addEventListener("ended", handleEnded);
//     observer.observe(video);

//     return () => {
//       observer.unobserve(video);
//       video.removeEventListener("ended", handleEnded);
//     };
//   }, []);

//   return (
//     <div className="pb-[200px]">
//       <div className="bg-white w-full min-h-[1000px] flex flex-col items-center gap-y-6 relative">
//         {/* Banner đầu trang */}
//         <img
//           src="/ct.jpg"
//           alt="Banner chính"
//           className="w-full max-w-full h-auto object-cover mt-14"
//           style={{ maxHeight: "400px" }}
//         />

//         <div className="flex flex-col gap-y-6 px-4 w-full max-w-6xl">
//           {/* Giới thiệu trung tâm */}
//           <div className="w-full bg-blue-300 rounded-t-xl px-5 py-5 flex flex-col lg:flex-row gap-y-4 lg:gap-x-8 items-center">
//             <img
//               src="https://e7.pngegg.com/pngimages/317/397/png-clipart-customer-service-computer-icons-technical-support-support-miscellaneous-search-engine-optimization.png"
//               className="w-20 h-20 rounded-full"
//               alt="Icon hỗ trợ"
//             />
//             <div className="text-white font-semibold italic text-center lg:text-left">
//               <p>Bạn đang muốn tìm hiểu</p>
//               <p>Lộ trình học ngoại ngữ tốt nhất tại Blue Ocean</p>
//             </div>
//           </div>

//           {/* Phần giới thiệu + video */}
//           <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 lg:gap-x-8">
//             <div className="flex flex-col gap-y-3 max-w-full lg:max-w-[50%]">
//               <p className="text-3xl text-orange-500 italic font-script">Giới Thiệu</p>
//               <p className="text-2xl text-blue-700 font-semibold italic">
//                 Trung tâm ngoại ngữ quốc tế Blue Ocean
//               </p>
//               <p className="italic">
//                 TRUNG TÂM NGOẠI NGỮ QUỐC TẾ BLUE OCEAN – MỞ CÁNH CỬA HỘI NHẬP TOÀN CẦU
//               </p>
//               <p className="italic text-justify">
//                 Tọa lạc tại trung tâm thị xã Kinh Môn, Hải Dương, Trung tâm Ngoại ngữ Quốc tế Blue Ocean tự hào là đơn vị đào tạo ngoại ngữ uy tín hàng đầu, chuyên cung cấp các khóa học tiếng Trung (HSK, giao tiếp), tiếng Nhật, tiếng Hàn và tiếng Anh cho mọi lứa tuổi, từ cơ bản đến nâng cao. Với sứ mệnh “Mở cánh cửa hội nhập – Chắp cánh tương lai”, Blue Ocean không ngừng đổi mới phương pháp giảng dạy, đầu tư cơ sở vật chất hiện đại và xây dựng đội ngũ giảng viên chất lượng cao – giàu kinh nghiệm, tận tâm và chuyên môn vững vàng.

//                 Tại Blue Ocean, học viên không chỉ được trang bị kiến thức ngôn ngữ vững chắc mà còn được rèn luyện kỹ năng giao tiếp, phản xạ thực tế, phát triển tư duy toàn diện, sẵn sàng chinh phục các kỳ thi quốc tế như HSK, JLPT, TOPIK, IELTS… cũng như tự tin bước ra thế giới.

//                 Hãy cùng Blue Ocean bứt phá giới hạn, bơi ra biển lớn, vươn mình ra toàn cầu – nơi tri thức, bản lĩnh và khát vọng hội nhập được chắp cánh mạnh mẽ nhất!
//               </p>
//             </div>

//             <video
//               ref={videoRef}
//               src="/ct1.mp4"
//               playsInline
//               controls
//               className="w-full max-w-[500px] h-auto rounded-md"
//             />
//           </div>
//         </div>

//         {/* Chương trình đào tạo */}
//         <div className="mt-20 px-4 w-full max-w-6xl">
//           <p className="text-2xl font-semibold text-center mb-10">CHƯƠNG TRÌNH ĐÀO TẠO</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {courses.map((item, index) => (
//               <div key={index} className="flex flex-col items-center gap-y-4">
//                 <a href={item.href} className="w-full aspect-[4/3] overflow-hidden rounded-lg block">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
//                   />
//                 </a>
//                 <a
//                   href={item.href}
//                   className="text-violet-600 font-semibold hover:underline text-center"
//                 >
//                   {item.title}
//                 </a>
//               </div>
//             ))}

//             {/* Du học & Xuất khẩu lao động */}
//             <div className="flex flex-col gap-y-4 items-center">
//               <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden z-0">
//                 {/* Ảnh bên trái */}
//                 <a href="/dhtrungquoc">
//                   <img
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110 clip-left"
//                     src="https://duhochfc.vn/uploads/du-hoc-han-quoc-ve-nuoc-lam-gi.jpg"
//                     alt="Ảnh trái"
//                   />
//                 </a>
//                 {/* Ảnh bên phải */}
//                 <div className="absolute inset-0 w-full h-full clip-right-inverted overflow-hidden">
//                   <a href="/xktrungquoc">
//                     <img
//                       className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
//                       src="https://vieclamvinhphuc.gov.vn/image/images/xuat-khau-lao-dong-can-nhung-thu-tuc-gi-2.jpg"
//                       alt="Ảnh phải"
//                     />
//                   </a>
//                 </div>
//               </div>

//               <div className="flex flex-row gap-x-2">
//                 <a className="text-violet-600 font-semibold" href="/dhtrungquoc">
//                   Du Học
//                 </a>
//                 <span>/</span>
//                 <a className="text-violet-600 font-semibold" href="/xktrungquoc">
//                   Xuất Khẩu Lao Động
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Body;



// import React from "react";

// function Body() {
//   const courses = [
//     {
//       href: "/hsk1",
//       title: "Khóa học HSK",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4cgIbCO9vostYo3kAM_bCSXn8AN2MXSqHg&s",
//     },
//     {
//       href: "/giaotiep",
//       title: "Khóa học giao tiếp",
//       img: "https://ctihsk.edu.vn/wp-content/uploads/2024/08/giao-tiep-tieng-trung-co-ban.webp",
//     },
//     {
//       href: "/nhat5",
//       title: "Khóa học tiếng nhật",
//       img: "https://lophoctiengnhat.edu.vn/images/2018/07/30/hoc-tieng-nhat.jpg",
//     },
//     {
//       href: "/hansocap",
//       title: "Khóa học tiếng hàn",
//       img: "https://camnanggiaoduc.org/wp-content/uploads/2019/10/10-2.jpg",
//     },
//     {
//       href: "/anh",
//       title: "Khóa học tiếng anh",
//       img: "https://hungvuongtech.edu.vn/wp-content/uploads/2024/06/phuong-phap-day-hoc-tieng-anh-hieu-qua-danh-cho-giao-vien-va-hoc-sinh.jpg",
//     },
//   ];

//   return (
//     <div className="pb-[200px]">
//       <div className="bg-white w-full min-h-[1000px] flex flex-col items-center gap-y-6 relative">
//         {/* Banner đầu trang */}
//         <img
//           src="/ct.jpg"
//           alt="Banner chính"
//           className="w-full max-w-full h-auto object-cover mt-14"
//           style={{ maxHeight: "400px" }}
//         />

//         <div className="flex flex-col gap-y-6 px-4 w-full max-w-6xl">
//           {/* Giới thiệu trung tâm */}
//           <div className="w-full bg-blue-300 rounded-t-xl px-5 py-5 flex flex-col lg:flex-row gap-y-4 lg:gap-x-8 items-center">
//             <img
//               src="https://e7.pngegg.com/pngimages/317/397/png-clipart-customer-service-computer-icons-technical-support-support-miscellaneous-search-engine-optimization.png"
//               className="w-20 h-20 rounded-full"
//               alt="Icon hỗ trợ"
//             />
//             <div className="text-white font-semibold italic text-center lg:text-left">
//               <p>Bạn đang muốn tìm hiểu</p>
//               <p>Lộ trình học ngoại ngữ tốt nhất tại Blue Ocean</p>
//             </div>
//           </div>

//           {/* Phần giới thiệu + video */}
//           <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 lg:gap-x-8">
//             <div className="flex flex-col gap-y-3 max-w-full lg:max-w-[50%]">
//               <p className="text-3xl text-orange-500 italic font-script">Giới Thiệu</p>
//               <p className="text-2xl text-blue-700 font-semibold italic">
//                 Trung tâm ngoại ngữ quốc tế Blue Ocean
//               </p>
//               <p className="italic">
//                 TRUNG TÂM NGOẠI NGỮ QUỐC TẾ BLUE OCEAN – MỞ CÁNH CỬA HỘI NHẬP TOÀN CẦU
//               </p>
//               <p className="italic text-justify">
//                 Tọa lạc tại trung tâm thị xã Kinh Môn, Hải Dương, Trung tâm Ngoại ngữ Quốc tế Blue Ocean tự hào là đơn vị đào tạo ngoại ngữ uy tín hàng đầu, chuyên cung cấp các khóa học tiếng Trung (HSK, giao tiếp), tiếng Nhật, tiếng Hàn và tiếng Anh cho mọi lứa tuổi, từ cơ bản đến nâng cao. Với sứ mệnh “Mở cánh cửa hội nhập – Chắp cánh tương lai”, Blue Ocean không ngừng đổi mới phương pháp giảng dạy, đầu tư cơ sở vật chất hiện đại và xây dựng đội ngũ giảng viên chất lượng cao – giàu kinh nghiệm, tận tâm và chuyên môn vững vàng.

//                 Tại Blue Ocean, học viên không chỉ được trang bị kiến thức ngôn ngữ vững chắc mà còn được rèn luyện kỹ năng giao tiếp, phản xạ thực tế, phát triển tư duy toàn diện, sẵn sàng chinh phục các kỳ thi quốc tế như HSK, JLPT, TOPIK, IELTS… cũng như tự tin bước ra thế giới.

//                 Hãy cùng Blue Ocean bứt phá giới hạn, bơi ra biển lớn, vươn mình ra toàn cầu – nơi tri thức, bản lĩnh và khát vọng hội nhập được chắp cánh mạnh mẽ nhất!
//               </p>
//             </div>

//             {/* YouTube video nhúng */}
//             <div className="w-full max-w-[500px] aspect-video rounded-md overflow-hidden">
//               <iframe
//                 className="w-full h-full"
//                 src="https://www.youtube.com/embed/fpOFVq4jqOU?si=9KIvjBOgb7gRN2lq"
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>

//         {/* Chương trình đào tạo */}
//         <div className="mt-20 px-4 w-full max-w-6xl">
//           <p className="text-2xl font-semibold text-center mb-10">CHƯƠNG TRÌNH ĐÀO TẠO</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {courses.map((item, index) => (
//               <div key={index} className="flex flex-col items-center gap-y-4">
//                 <a href={item.href} className="w-full aspect-[4/3] overflow-hidden rounded-lg block">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
//                   />
//                 </a>
//                 <a
//                   href={item.href}
//                   className="text-violet-600 font-semibold hover:underline text-center"
//                 >
//                   {item.title}
//                 </a>
//               </div>
//             ))}

//             {/* Du học & Xuất khẩu lao động */}
//             <div className="flex flex-col gap-y-4 items-center">
//               <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden z-0">
//                 {/* Ảnh bên trái */}
//                 <a href="/dhtrungquoc">
//                   <img
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110 clip-left"
//                     src="https://duhochfc.vn/uploads/du-hoc-han-quoc-ve-nuoc-lam-gi.jpg"
//                     alt="Ảnh trái"
//                   />
//                 </a>
//                 {/* Ảnh bên phải */}
//                 <div className="absolute inset-0 w-full h-full clip-right-inverted overflow-hidden">
//                   <a href="/xktrungquoc">
//                     <img
//                       className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
//                       src="https://vieclamvinhphuc.gov.vn/image/images/xuat-khau-lao-dong-can-nhung-thu-tuc-gi-2.jpg"
//                       alt="Ảnh phải"
//                     />
//                   </a>
//                 </div>
//               </div>

//               <div className="flex flex-row gap-x-2">
//                 <a className="text-violet-600 font-semibold" href="/dhtrungquoc">
//                   Du Học
//                 </a>
//                 <span>/</span>
//                 <a className="text-violet-600 font-semibold" href="/xktrungquoc">
//                   Xuất Khẩu Lao Động
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Body;






import { useEffect, useRef } from "react";

function Body() {
  const iframeRef = useRef(null);

  const courses = [
    {
      href: "/hsk1",
      title: "Khóa học HSK",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4cgIbCO9vostYo3kAM_bCSXn8AN2MXSqHg&s",
    },
    {
      href: "/giaotiep",
      title: "Khóa học giao tiếp",
      img: "https://ctihsk.edu.vn/wp-content/uploads/2024/08/giao-tiep-tieng-trung-co-ban.webp",
    },
    {
      href: "/nhat5",
      title: "Khóa học tiếng nhật",
      img: "https://lophoctiengnhat.edu.vn/images/2018/07/30/hoc-tieng-nhat.jpg",
    },
    {
      href: "/hansocap",
      title: "Khóa học tiếng hàn",
      img: "https://camnanggiaoduc.org/wp-content/uploads/2019/10/10-2.jpg",
    },
    {
      href: "/anh",
      title: "Khóa học tiếng anh",
      img: "https://hungvuongtech.edu.vn/wp-content/uploads/2024/06/phuong-phap-day-hoc-tieng-anh-hieu-qua-danh-cho-giao-vien-va-hoc-sinh.jpg",
    },
  ];

  useEffect(() => {
    let player;

    const onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: () => {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  player.playVideo();
                } else {
                  player.pauseVideo();
                }
              },
              { threshold: 0.5 }
            );
            observer.observe(iframeRef.current);
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    return () => {
      if (player && player.destroy) {
        player.destroy();
      }
    };
  }, []);

  return (
    <div className="pb-[200px]">
      <div className="bg-white w-full min-h-[1000px] flex flex-col items-center gap-y-6 relative">
        {/* Banner đầu trang */}
        <img
          src="/ct.jpg"
          alt="Banner chính"
          className="w-full max-w-full h-auto object-cover mt-14"
          style={{ maxHeight: "400px" }}
        />

        <div className="flex flex-col gap-y-6 px-4 w-full max-w-6xl">
          {/* Giới thiệu trung tâm */}
          <div className="w-full bg-blue-300 rounded-t-xl px-5 py-5 flex flex-col lg:flex-row gap-y-4 lg:gap-x-8 items-center">
            <img
              src="https://e7.pngegg.com/pngimages/317/397/png-clipart-customer-service-computer-icons-technical-support-support-miscellaneous-search-engine-optimization.png"
              className="w-20 h-20 rounded-full"
              alt="Icon hỗ trợ"
            />
            <div className="text-white font-semibold italic text-center lg:text-left">
              <p>Bạn đang muốn tìm hiểu</p>
              <p>Lộ trình học ngoại ngữ tốt nhất tại Blue Ocean</p>
            </div>
          </div>

          {/* Phần giới thiệu + video */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 lg:gap-x-8">
            <div className="flex flex-col gap-y-3 max-w-full lg:max-w-[50%]">
              <p className="text-3xl text-orange-500 italic font-script">Giới Thiệu</p>
              <p className="text-2xl text-blue-700 font-semibold italic">
                Trung tâm ngoại ngữ quốc tế Blue Ocean
              </p>
              <p className="italic">
                TRUNG TÂM NGOẠI NGỮ QUỐC TẾ BLUE OCEAN – MỞ CÁNH CỬA HỘI NHẬP TOÀN CẦU
              </p>
              <p className="italic text-justify">
                Tọa lạc tại trung tâm thị xã Kinh Môn, Hải Dương, Trung tâm Ngoại ngữ Quốc tế Blue Ocean tự hào là đơn vị đào tạo ngoại ngữ uy tín hàng đầu, chuyên cung cấp các khóa học tiếng Trung (HSK, giao tiếp), tiếng Nhật, tiếng Hàn và tiếng Anh cho mọi lứa tuổi, từ cơ bản đến nâng cao. Với sứ mệnh “Mở cánh cửa hội nhập – Chắp cánh tương lai”, Blue Ocean không ngừng đổi mới phương pháp giảng dạy, đầu tư cơ sở vật chất hiện đại và xây dựng đội ngũ giảng viên chất lượng cao – giàu kinh nghiệm, tận tâm và chuyên môn vững vàng.

                Tại Blue Ocean, học viên không chỉ được trang bị kiến thức ngôn ngữ vững chắc mà còn được rèn luyện kỹ năng giao tiếp, phản xạ thực tế, phát triển tư duy toàn diện, sẵn sàng chinh phục các kỳ thi quốc tế như HSK, JLPT, TOPIK, IELTS… cũng như tự tin bước ra thế giới.

                Hãy cùng Blue Ocean bứt phá giới hạn, bơi ra biển lớn, vươn mình ra toàn cầu – nơi tri thức, bản lĩnh và khát vọng hội nhập được chắp cánh mạnh mẽ nhất!
              </p>
            </div>

            <div className="w-full max-w-[500px] h-auto aspect-video">
              <iframe
                ref={iframeRef}
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/fpOFVq4jqOU?enablejsapi=1&rel=0"
                title="Blue Ocean Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        </div>

        {/* Chương trình đào tạo */}
        <div className="mt-20 px-4 w-full max-w-6xl">
          <p className="text-2xl font-semibold text-center mb-10">CHƯƠNG TRÌNH ĐÀO TẠO</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-y-4">
                <a href={item.href} className="w-full aspect-[4/3] overflow-hidden rounded-lg block">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                  />
                </a>
                <a
                  href={item.href}
                  className="text-violet-600 font-semibold hover:underline text-center"
                >
                  {item.title}
                </a>
              </div>
            ))}

            {/* Du học & Xuất khẩu lao động */}
            <div className="flex flex-col gap-y-4 items-center">
              <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden z-0">
                <a href="/dhtrungquoc">
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110 clip-left"
                    src="https://duhochfc.vn/uploads/du-hoc-han-quoc-ve-nuoc-lam-gi.jpg"
                    alt="Ảnh trái"
                  />
                </a>
                <div className="absolute inset-0 w-full h-full clip-right-inverted overflow-hidden">
                  <a href="/xktrungquoc">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                      src="https://vieclamvinhphuc.gov.vn/image/images/xuat-khau-lao-dong-can-nhung-thu-tuc-gi-2.jpg"
                      alt="Ảnh phải"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-row gap-x-2">
                <a className="text-violet-600 font-semibold" href="/dhtrungquoc">
                  Du Học
                </a>
                <span>/</span>
                <a className="text-violet-600 font-semibold" href="/xktrungquoc">
                  Xuất Khẩu Lao Động
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
