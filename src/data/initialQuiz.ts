export interface QuizQuestion {
  id: string;
  chapter: number;
  questionEn: string;
  questionVi: string;
  options: {
    A: { en: string; vi: string };
    B: { en: string; vi: string };
    C: { en: string; vi: string };
    D: { en: string; vi: string };
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanationEn: string;
  explanationVi: string;
  relatedSectionId: string;
  topic: string;
}

export const initialQuiz: QuizQuestion[] = [
  // --- CHAPTER 1: What is Organizational Behavior? (50 questions) ---
  {
    id: "q101",
    chapter: 1,
    questionEn: "What is the primary definition of Organizational Behavior (OB)?",
    questionVi: "Định nghĩa chính của Hành vi Tổ chức (OB) là gì?",
    options: {
      A: { en: "A field of study that investigates the impact of individuals, groups, and structure on behavior within organizations.", vi: "Một lĩnh vực nghiên cứu tìm hiểu tác động của cá nhân, nhóm và cấu trúc lên hành vi trong tổ chức." },
      B: { en: "A branch of accounting that focuses on employee salaries.", vi: "Một nhánh của kế toán tập trung vào lương của nhân viên." },
      C: { en: "The study of physical building structures.", vi: "Nghiên cứu về cấu trúc tòa nhà vật lý." },
      D: { en: "A method for marketing products to external customers.", vi: "Một phương pháp để tiếp thị sản phẩm cho khách hàng bên ngoài." }
    },
    correctAnswer: "A",
    explanationEn: "OB is a field of study that investigates the impact of individuals, groups, and structure on behavior within organizations.",
    explanationVi: "OB là lĩnh vực nghiên cứu tìm hiểu tác động của cá nhân, nhóm và cấu trúc lên hành vi bên trong tổ chức.",
    relatedSectionId: "1.1",
    topic: "Definition of OB"
  },
  {
    id: "q102",
    chapter: 1,
    questionEn: "What is the core purpose of studying OB?",
    questionVi: "Mục đích cốt lõi của việc nghiên cứu OB là gì?",
    options: {
      A: { en: "To reduce the number of employees.", vi: "Để giảm số lượng nhân viên." },
      B: { en: "To apply knowledge toward improving an organization's effectiveness.", vi: "Để áp dụng kiến thức nhằm cải thiện tính hiệu quả của tổ chức." },
      C: { en: "To increase the complexity of organizational structures.", vi: "Để tăng tính phức tạp của cấu trúc tổ chức." },
      D: { en: "To replace human workers with technology.", vi: "Để thay thế công nhân bằng công nghệ." }
    },
    correctAnswer: "B",
    explanationEn: "The core purpose of OB is to apply knowledge to improve organizational effectiveness.",
    explanationVi: "Mục đích cốt lõi của OB là áp dụng kiến thức để cải thiện hiệu quả hoạt động của tổ chức.",
    relatedSectionId: "1.1.1",
    topic: "Purpose of OB"
  },
  {
    id: "q103",
    chapter: 1,
    questionEn: "Which of the following is NOT one of the three main determinants of behavior in OB?",
    questionVi: "Điều nào sau đây KHÔNG phải là một trong ba yếu tố chính quyết định hành vi trong OB?",
    options: {
      A: { en: "Individuals", vi: "Cá nhân" },
      B: { en: "Groups", vi: "Nhóm" },
      C: { en: "Structure", vi: "Cấu trúc" },
      D: { en: "Profit", vi: "Lợi nhuận" }
    },
    correctAnswer: "D",
    explanationEn: "The three main determinants are individuals, groups, and structure. Profit is an outcome, not a determinant of behavior.",
    explanationVi: "Ba yếu tố quyết định chính là cá nhân, nhóm và cấu trúc. Lợi nhuận là một kết quả, không phải yếu tố quyết định hành vi.",
    relatedSectionId: "1.1",
    topic: "Determinants of OB"
  },
  {
    id: "q104",
    chapter: 1,
    questionEn: "Systematic study helps managers by:",
    questionVi: "Nghiên cứu có hệ thống giúp các nhà quản lý bằng cách:",
    options: {
      A: { en: "Allowing them to rely solely on intuition.", vi: "Cho phép họ chỉ dựa vào trực giác." },
      B: { en: "Providing a basis for making reasonably accurate predictions of behavior.", vi: "Cung cấp cơ sở để đưa ra các dự đoán hành vi chính xác hợp lý." },
      C: { en: "Encouraging decisions based on gut feelings.", vi: "Khuyến khích các quyết định dựa trên cảm tính." },
      D: { en: "Reducing the need for evidence-based management.", vi: "Giảm nhu cầu quản lý dựa trên bằng chứng." }
    },
    correctAnswer: "B",
    explanationEn: "Systematic study provides a scientific basis for predicting behavior, moving beyond mere intuition.",
    explanationVi: "Nghiên cứu có hệ thống cung cấp cơ sở khoa học để dự đoán hành vi, vượt xa trực giác thuần túy.",
    relatedSectionId: "1.2.1",
    topic: "Systematic Study"
  },
  {
    id: "q105",
    chapter: 1,
    questionEn: "What is Evidence-Based Management (EBM)?",
    questionVi: "Quản lý dựa trên bằng chứng (EBM) là gì?",
    options: {
      A: { en: "Making decisions based on the best available scientific evidence.", vi: "Đưa ra quyết định dựa trên các bằng chứng khoa học tốt nhất hiện có." },
      B: { en: "Relying on past experiences only.", vi: "Chỉ dựa vào những kinh nghiệm trong quá khứ." },
      C: { en: "Following the latest management fads.", vi: "Làm theo các trào lưu quản lý mới nhất." },
      D: { en: "Ignoring data in favor of personal beliefs.", vi: "Bỏ qua dữ liệu để ủng hộ niềm tin cá nhân." }
    },
    correctAnswer: "A",
    explanationEn: "EBM involves basing managerial decisions on the best available scientific evidence.",
    explanationVi: "EBM liên quan đến việc đưa ra các quyết định quản lý dựa trên các bằng chứng khoa học tốt nhất hiện có.",
    relatedSectionId: "1.2.3",
    topic: "EBM"
  },
  {
    id: "q106",
    chapter: 1,
    questionEn: "Intuition is often based on:",
    questionVi: "Trực giác thường dựa trên:",
    options: {
      A: { en: "Rigorous scientific data.", vi: "Dữ liệu khoa học nghiêm ngặt." },
      B: { en: "Incomplete information and gut feelings.", vi: "Thông tin không đầy đủ và cảm tính." },
      C: { en: "Systematic observation.", vi: "Quan sát có hệ thống." },
      D: { en: "Peer-reviewed research.", vi: "Nghiên cứu được bình duyệt." }
    },
    correctAnswer: "B",
    explanationEn: "Intuition is often based on gut feelings and incomplete information, which systematic study aims to supplement.",
    explanationVi: "Trực giác thường dựa trên cảm tính và thông tin không đầy đủ, điều mà nghiên cứu có hệ thống nhằm bổ sung.",
    relatedSectionId: "1.2.2",
    topic: "Intuition"
  },
  {
    id: "q107",
    chapter: 1,
    questionEn: "Which behavioral science discipline contributes to OB primarily at the individual level?",
    questionVi: "Ngành khoa học hành vi nào đóng góp cho OB chủ yếu ở cấp độ cá nhân?",
    options: {
      A: { en: "Sociology", vi: "Xã hội học" },
      B: { en: "Psychology", vi: "Tâm lý học" },
      C: { en: "Anthropology", vi: "Nhân chủng học" },
      D: { en: "Political Science", vi: "Chính trị học" }
    },
    correctAnswer: "B",
    explanationEn: "Psychology focuses on the individual level, studying topics like learning, motivation, and personality.",
    explanationVi: "Tâm lý học tập trung vào cấp độ cá nhân, nghiên cứu các chủ đề như học tập, động lực và tính cách.",
    relatedSectionId: "1.3.1",
    topic: "Disciplines of OB"
  },
  {
    id: "q108",
    chapter: 1,
    questionEn: "Social psychology contributes to OB by focusing on:",
    questionVi: "Tâm lý học xã hội đóng góp cho OB bằng cách tập trung vào:",
    options: {
      A: { en: "Individual personality traits.", vi: "Các đặc điểm tính cách cá nhân." },
      B: { en: "The influence of people on one another, particularly in groups.", vi: "Ảnh hưởng của con người lên nhau, đặc biệt là trong các nhóm." },
      C: { en: "Macro-level societal structures.", vi: "Các cấu trúc xã hội ở cấp độ vĩ mô." },
      D: { en: "Physical human evolution.", vi: "Sự tiến hóa vật lý của con người." }
    },
    correctAnswer: "B",
    explanationEn: "Social psychology blends concepts from psychology and sociology to focus on group behavior and influence.",
    explanationVi: "Tâm lý học xã hội kết hợp các khái niệm từ tâm lý học và xã hội học để tập trung vào hành vi và ảnh hưởng của nhóm.",
    relatedSectionId: "1.3.2",
    topic: "Disciplines of OB"
  },
  {
    id: "q109",
    chapter: 1,
    questionEn: "Sociology contributes to OB primarily at which level(s) of analysis?",
    questionVi: "Xã hội học đóng góp cho OB chủ yếu ở (các) cấp độ phân tích nào?",
    options: {
      A: { en: "Individual only.", vi: "Chỉ cá nhân." },
      B: { en: "Group and Organization system.", vi: "Nhóm và Hệ thống tổ chức." },
      C: { en: "Individual and Group.", vi: "Cá nhân và Nhóm." },
      D: { en: "Biological only.", vi: "Chỉ sinh học." }
    },
    correctAnswer: "B",
    explanationEn: "Sociology studies people in relation to their social environment, contributing to the group and organization system levels.",
    explanationVi: "Xã hội học nghiên cứu con người trong mối quan hệ với môi trường xã hội, đóng góp cho cấp độ nhóm và hệ thống tổ chức.",
    relatedSectionId: "1.3.3",
    topic: "Disciplines of OB"
  },
  {
    id: "q110",
    chapter: 1,
    questionEn: "Anthropology's main contribution to OB is in the area of:",
    questionVi: "Đóng góp chính của nhân chủng học cho OB là trong lĩnh vực:",
    options: {
      A: { en: "Individual motivation.", vi: "Động lực cá nhân." },
      B: { en: "Cross-cultural analysis and organizational culture.", vi: "Phân tích đa văn hóa và văn hóa tổ chức." },
      C: { en: "Clinical psychology.", vi: "Tâm lý học lâm sàng." },
      D: { en: "Financial management.", vi: "Quản lý tài chính." }
    },
    correctAnswer: "B",
    explanationEn: "Anthropology studies societies to learn about humans and their activities, contributing to cross-cultural analysis.",
    explanationVi: "Nhân chủng học nghiên cứu các xã hội để tìm hiểu về con người và các hoạt động của họ, đóng góp vào phân tích đa văn hóa.",
    relatedSectionId: "1.3.4",
    topic: "Disciplines of OB"
  },
  {
    id: "q111",
    chapter: 1,
    questionEn: "Why are there few 'absolutes' in OB?",
    questionVi: "Tại sao có rất ít 'nguyên lý tuyệt đối' trong OB?",
    options: {
      A: { en: "Because human beings are complex and simple cause-and-effect relationships are rare.", vi: "Vì con người rất phức tạp và các mối quan hệ nguyên nhân - kết quả đơn giản là rất hiếm." },
      B: { en: "Because OB is not a real science.", vi: "Vì OB không phải là một môn khoa học thực sự." },
      C: { en: "Because managers don't like rules.", vi: "Vì các nhà quản lý không thích các quy tắc." },
      D: { en: "Because organizations change too slowly.", vi: "Vì các tổ chức thay đổi quá chậm." }
    },
    correctAnswer: "A",
    explanationEn: "Human behavior is complex, meaning that what works for one person or situation may not work for another.",
    explanationVi: "Hành vi con người rất phức tạp, nghĩa là những gì hiệu quả với người này hoặc tình huống này có thể không hiệu quả với người khác hoặc tình huống khác.",
    relatedSectionId: "1.4",
    topic: "Few Absolutes in OB"
  },
  {
    id: "q112",
    chapter: 1,
    questionEn: "What are 'contingency variables'?",
    questionVi: "'Biến tình huống' (Contingency variables) là gì?",
    options: {
      A: { en: "Variables that never change.", vi: "Các biến không bao giờ thay đổi." },
      B: { en: "Situational factors that moderate the relationship between independent and dependent variables.", vi: "Các yếu tố tình huống điều tiết mối quan hệ giữa biến độc lập và biến phụ thuộc." },
      C: { en: "The only variables that matter in OB.", vi: "Các biến duy nhất quan trọng trong OB." },
      D: { en: "Variables used only in psychology.", vi: "Các biến chỉ được sử dụng trong tâm lý học." }
    },
    correctAnswer: "B",
    explanationEn: "Contingency variables are 'it depends' factors that explain why a relationship exists under certain conditions.",
    explanationVi: "Biến tình huống là các yếu tố 'nó còn tùy', giải thích tại sao một mối quan hệ tồn tại trong những điều kiện nhất định.",
    relatedSectionId: "1.4.1",
    topic: "Contingency Variables"
  },
  {
    id: "q113",
    chapter: 1,
    questionEn: "Workforce diversity refers to organizations becoming more:",
    questionVi: "Đa dạng lực lượng lao động đề cập đến việc các tổ chức trở nên:",
    options: {
      A: { en: "Homogeneous.", vi: "Đồng nhất." },
      B: { en: "Heterogeneous in terms of gender, age, race, and ethnicity.", vi: "Đa dạng về giới tính, tuổi tác, chủng tộc và sắc tộc." },
      C: { en: "Focused on a single demographic.", vi: "Tập trung vào một nhóm nhân khẩu học duy nhất." },
      D: { en: "Small and local.", vi: "Nhỏ và mang tính địa phương." }
    },
    correctAnswer: "B",
    explanationEn: "Workforce diversity means organizations are becoming more heterogeneous in terms of demographics.",
    explanationVi: "Đa dạng lực lượng lao động có nghĩa là các tổ chức đang trở nên đa dạng hơn về mặt nhân khẩu học.",
    relatedSectionId: "1.5.1",
    topic: "Workforce Diversity"
  },
  {
    id: "q114",
    chapter: 1,
    questionEn: "What is a major challenge of globalization for managers?",
    questionVi: "Thách thức lớn của toàn cầu hóa đối với các nhà quản lý là gì?",
    options: {
      A: { en: "Managing people from different cultures.", vi: "Quản lý những người từ các nền văn hóa khác nhau." },
      B: { en: "Reducing the use of technology.", vi: "Giảm việc sử dụng công nghệ." },
      C: { en: "Eliminating workforce diversity.", vi: "Loại bỏ sự đa dạng của lực lượng lao động." },
      D: { en: "Focusing only on domestic markets.", vi: "Chỉ tập trung vào thị trường nội địa." }
    },
    correctAnswer: "A",
    explanationEn: "Globalization requires managers to work with people from different cultures and adapt to local norms.",
    explanationVi: "Toàn cầu hóa đòi hỏi các nhà quản lý phải làm việc với những người từ các nền văn hóa khác nhau và thích nghi với các chuẩn mực địa phương.",
    relatedSectionId: "1.5.2",
    topic: "Globalization"
  },
  {
    id: "q115",
    chapter: 1,
    questionEn: "The 'virtual workplace' is a result of:",
    questionVi: "'Nơi làm việc ảo' là kết quả của:",
    options: {
      A: { en: "Decreased use of social media.", vi: "Giảm việc sử dụng mạng xã hội." },
      B: { en: "Advances in technology allowing work from anywhere.", vi: "Những tiến bộ trong công nghệ cho phép làm việc từ bất cứ đâu." },
      C: { en: "A return to traditional office settings.", vi: "Sự quay trở lại các thiết lập văn phòng truyền thống." },
      D: { en: "The elimination of the gig economy.", vi: "Sự loại bỏ nền kinh tế gig." }
    },
    correctAnswer: "B",
    explanationEn: "Technology allows employees to work remotely, creating a virtual workplace.",
    explanationVi: "Công nghệ cho phép nhân viên làm việc từ xa, tạo ra một nơi làm việc ảo.",
    relatedSectionId: "1.5.3",
    topic: "Technology"
  },
  {
    id: "q116",
    chapter: 1,
    questionEn: "What are 'ethical dilemmas'?",
    questionVi: "'Các tình huống tiến thoái lưỡng nan về đạo đức' là gì?",
    options: {
      A: { en: "Situations where the right path is clearly defined.", vi: "Những tình huống mà con đường đúng đắn được xác định rõ ràng." },
      B: { en: "Situations in which individuals are required to define right and wrong conduct.", vi: "Những tình huống mà cá nhân được yêu cầu xác định hành vi đúng và sai." },
      C: { en: "Decisions that only affect profit.", vi: "Những quyết định chỉ ảnh hưởng đến lợi nhuận." },
      D: { en: "Legal requirements that must be followed.", vi: "Các yêu cầu pháp lý phải được tuân thủ." }
    },
    correctAnswer: "B",
    explanationEn: "Ethical dilemmas are situations where there is no clear right or wrong, requiring moral judgment.",
    explanationVi: "Các tình huống tiến thoái lưỡng nan về đạo đức là những tình huống không có đúng sai rõ ràng, đòi hỏi sự phán xét về đạo đức.",
    relatedSectionId: "1.5.4",
    topic: "Ethics"
  },
  {
    id: "q117",
    chapter: 1,
    questionEn: "The 'Triple Bottom Line' of CSR includes:",
    questionVi: "'Bộ ba cốt lõi' (Triple Bottom Line) của CSR bao gồm:",
    options: {
      A: { en: "Price, Product, Promotion.", vi: "Giá cả, Sản phẩm, Khuyến mãi." },
      B: { en: "People, Planet, Revenue (Profit).", vi: "Con người, Hành tinh, Doanh thu (Lợi nhuận)." },
      C: { en: "Management, Employees, Customers.", vi: "Quản lý, Nhân viên, Khách hàng." },
      D: { en: "Local, National, Global.", vi: "Địa phương, Quốc gia, Toàn cầu." }
    },
    correctAnswer: "B",
    explanationEn: "CSR focuses on social (people), environmental (planet), and economic (revenue) goals.",
    explanationVi: "CSR tập trung vào các mục tiêu xã hội (con người), môi trường (hành tinh) và kinh tế (doanh thu).",
    relatedSectionId: "1.5.5",
    topic: "CSR"
  },
  {
    id: "q118",
    chapter: 1,
    questionEn: "Positive Organizational Scholarship focuses on:",
    questionVi: "Nghiên cứu Tổ chức Tích cực tập trung vào:",
    options: {
      A: { en: "Identifying and fixing employee weaknesses.", vi: "Xác định và khắc phục điểm yếu của nhân viên." },
      B: { en: "How organizations develop human strengths and unlock potential.", vi: "Cách các tổ chức phát triển thế mạnh con người và khai phá tiềm năng." },
      C: { en: "Increasing the workload of high performers.", vi: "Tăng khối lượng công việc của những người làm việc hiệu quả cao." },
      D: { en: "Reducing the importance of leadership.", vi: "Giảm tầm quan trọng của sự lãnh đạo." }
    },
    correctAnswer: "B",
    explanationEn: "This field focuses on what is 'right' with people and organizations, leveraging strengths.",
    explanationVi: "Lĩnh vực này tập trung vào những gì 'đúng' ở con người và tổ chức, tận dụng các thế mạnh.",
    relatedSectionId: "1.5.6",
    topic: "Positive OB"
  },
  {
    id: "q119",
    chapter: 1,
    questionEn: "The 'Gig Economy' is characterized by:",
    questionVi: "'Nền kinh tế Gig' được đặc trưng bởi:",
    options: {
      A: { en: "Lifetime employment at a single company.", vi: "Làm việc trọn đời tại một công ty duy nhất." },
      B: { en: "Independent contractors, freelancers, and temporary workers.", vi: "Các nhà thầu độc lập, người làm nghề tự do và công nhân tạm thời." },
      C: { en: "Strict 9-to-5 office schedules.", vi: "Lịch trình văn phòng 9-đến-5 nghiêm ngặt." },
      D: { en: "A lack of flexibility for workers.", vi: "Sự thiếu linh hoạt cho người lao động." }
    },
    correctAnswer: "B",
    explanationEn: "The gig economy involves short-term contracts and freelance work rather than permanent jobs.",
    explanationVi: "Nền kinh tế gig liên quan đến các hợp đồng ngắn hạn và công việc tự do thay vì các công việc lâu dài.",
    relatedSectionId: "1.5.7",
    topic: "Gig Economy"
  },
  {
    id: "q120",
    chapter: 1,
    questionEn: "Which level of analysis in OB looks at emotions, motivation, and personality?",
    questionVi: "Cấp độ phân tích nào trong OB xem xét cảm xúc, động lực và tính cách?",
    options: {
      A: { en: "Group Level", vi: "Cấp độ Nhóm" },
      B: { en: "Individual Level", vi: "Cấp độ Cá nhân" },
      C: { en: "Organizational Level", vi: "Cấp độ Tổ chức" },
      D: { en: "Societal Level", vi: "Cấp độ Xã hội" }
    },
    correctAnswer: "B",
    explanationEn: "The individual level focuses on the characteristics and behaviors of single employees.",
    explanationVi: "Cấp độ cá nhân tập trung vào các đặc điểm và hành vi của từng nhân viên.",
    relatedSectionId: "1.6.1",
    topic: "Levels of Analysis"
  },
  {
    id: "q121",
    chapter: 1,
    questionEn: "Group-level analysis in OB includes studying:",
    questionVi: "Phân tích cấp độ nhóm trong OB bao gồm nghiên cứu:",
    options: {
      A: { en: "Individual perception.", vi: "Nhận thức cá nhân." },
      B: { en: "Communication, leadership, and conflict.", vi: "Giao tiếp, lãnh đạo và xung đột." },
      C: { en: "Organizational structure.", vi: "Cấu trúc tổ chức." },
      D: { en: "National culture.", vi: "Văn hóa quốc gia." }
    },
    correctAnswer: "B",
    explanationEn: "The group level focuses on how individuals interact and function within teams.",
    explanationVi: "Cấp độ nhóm tập trung vào cách các cá nhân tương tác và hoạt động trong các nhóm.",
    relatedSectionId: "1.6.2",
    topic: "Levels of Analysis"
  },
  {
    id: "q122",
    chapter: 1,
    questionEn: "Organizational-level analysis focuses on:",
    questionVi: "Phân tích cấp độ tổ chức tập trung vào:",
    options: {
      A: { en: "Individual job performance.", vi: "Hiệu suất công việc cá nhân." },
      B: { en: "Structure, culture, and HR practices.", vi: "Cấu trúc, văn hóa và các thực tiễn nhân sự." },
      C: { en: "Team decision making.", vi: "Ra quyết định theo nhóm." },
      D: { en: "Personal values.", vi: "Giá trị cá nhân." }
    },
    correctAnswer: "B",
    explanationEn: "The organizational level looks at the macro-environment and systems of the entire company.",
    explanationVi: "Cấp độ tổ chức xem xét môi trường vĩ mô và các hệ thống của toàn bộ công ty.",
    relatedSectionId: "1.6.3",
    topic: "Levels of Analysis"
  },
  {
    id: "q123",
    chapter: 1,
    questionEn: "Which of the following is an 'Input' at the individual level?",
    questionVi: "Điều nào sau đây là một 'Đầu vào' (Input) ở cấp độ cá nhân?",
    options: {
      A: { en: "Job performance", vi: "Hiệu suất công việc" },
      B: { en: "Diversity, Personality, and Values", vi: "Sự đa dạng, Tính cách và Giá trị" },
      C: { en: "Motivation", vi: "Động lực" },
      D: { en: "Stress", vi: "Căng thẳng" }
    },
    correctAnswer: "B",
    explanationEn: "Inputs are variables like personality and values that exist before an employee starts a task.",
    explanationVi: "Đầu vào là các biến như tính cách và giá trị tồn tại trước khi nhân viên bắt đầu một nhiệm vụ.",
    relatedSectionId: "1.6.1",
    topic: "OB Model"
  },
  {
    id: "q124",
    chapter: 1,
    questionEn: "Which of the following is an 'Outcome' at the group level?",
    questionVi: "Điều nào sau đây là một 'Kết quả' (Outcome) ở cấp độ nhóm?",
    options: {
      A: { en: "Communication", vi: "Giao tiếp" },
      B: { en: "Team performance", vi: "Hiệu suất nhóm" },
      C: { en: "Leadership", vi: "Sự lãnh đạo" },
      D: { en: "Group structure", vi: "Cấu trúc nhóm" }
    },
    correctAnswer: "B",
    explanationEn: "Team performance is a key outcome of group-level processes.",
    explanationVi: "Hiệu suất nhóm là kết quả chính của các quá trình ở cấp độ nhóm.",
    relatedSectionId: "1.6.2",
    topic: "OB Model"
  },
  {
    id: "q125",
    chapter: 1,
    questionEn: "Employability skills gained from OB include:",
    questionVi: "Các kỹ năng làm việc có được từ OB bao gồm:",
    options: {
      A: { en: "Critical thinking, communication, and collaboration.", vi: "Tư duy phản biện, giao tiếp và hợp tác." },
      B: { en: "Advanced calculus and physics.", vi: "Giải tích và vật lý nâng cao." },
      C: { en: "Graphic design and coding.", vi: "Thiết kế đồ họa và lập trình." },
      D: { en: "Only technical skills.", vi: "Chỉ các kỹ năng kỹ thuật." }
    },
    correctAnswer: "A",
    explanationEn: "OB helps develop soft skills that are highly valued by employers.",
    explanationVi: "OB giúp phát triển các kỹ năng mềm được các nhà tuyển dụng đánh giá cao.",
    relatedSectionId: "1.7.1",
    topic: "Employability Skills"
  },
  {
    id: "q126",
    chapter: 1,
    questionEn: "Which of the following is an example of a 'Process' at the organizational level?",
    questionVi: "Điều nào sau đây là một ví dụ về 'Quá trình' (Process) ở cấp độ tổ chức?",
    options: {
      A: { en: "Organizational culture", vi: "Văn hóa tổ chức" },
      B: { en: "Human resource management and change practices.", vi: "Quản lý nguồn nhân lực và các thực tiễn thay đổi." },
      C: { en: "Productivity", vi: "Năng suất" },
      D: { en: "Organizational structure", vi: "Cấu trúc tổ chức" }
    },
    correctAnswer: "B",
    explanationEn: "Processes at the organizational level include HR management and change initiatives.",
    explanationVi: "Các quá trình ở cấp độ tổ chức bao gồm quản lý nhân sự và các sáng kiến thay đổi.",
    relatedSectionId: "1.6.3",
    topic: "OB Model"
  },
  {
    id: "q127",
    chapter: 1,
    questionEn: "What is 'Withdrawal behavior'?",
    questionVi: "'Hành vi rút lui' (Withdrawal behavior) là gì?",
    options: {
      A: { en: "The set of actions employees take to separate themselves from the organization.", vi: "Tập hợp các hành động mà nhân viên thực hiện để tách mình khỏi tổ chức." },
      B: { en: "A method for withdrawing money from a company account.", vi: "Một phương pháp để rút tiền từ tài khoản công ty." },
      C: { en: "The process of retiring from a job.", vi: "Quá trình nghỉ hưu." },
      D: { en: "A type of leadership style.", vi: "Một loại phong cách lãnh đạo." }
    },
    correctAnswer: "A",
    explanationEn: "Withdrawal behavior includes actions like absenteeism and turnover.",
    explanationVi: "Hành vi rút lui bao gồm các hành động như vắng mặt và nghỉ việc.",
    relatedSectionId: "1.6.1",
    topic: "Outcomes"
  },
  {
    id: "q128",
    chapter: 1,
    questionEn: "Organizational Citizenship Behavior (OCB) refers to:",
    questionVi: "Hành vi công dân tổ chức (OCB) đề cập đến:",
    options: {
      A: { en: "Only doing the tasks listed in the job description.", vi: "Chỉ làm các nhiệm vụ được liệt kê trong mô tả công việc." },
      B: { en: "Discretionary behavior that contributes to the psychological and social environment of the workplace.", vi: "Hành vi tự nguyện đóng góp vào môi trường tâm lý và xã hội của nơi làm việc." },
      C: { en: "Following all legal requirements of a citizen.", vi: "Tuân thủ tất cả các yêu cầu pháp lý của một công dân." },
      D: { en: "The process of hiring new citizens.", vi: "Quá trình thuê công dân mới." }
    },
    correctAnswer: "B",
    explanationEn: "OCB is 'going the extra mile' to help coworkers and the organization.",
    explanationVi: "OCB là việc 'nỗ lực thêm' để giúp đỡ đồng nghiệp và tổ chức.",
    relatedSectionId: "1.6.1",
    topic: "Outcomes"
  },
  {
    id: "q129",
    chapter: 1,
    questionEn: "Which discipline helps OB understand 'Organizational Culture'?",
    questionVi: "Ngành học nào giúp OB hiểu về 'Văn hóa tổ chức'?",
    options: {
      A: { en: "Psychology", vi: "Tâm lý học" },
      B: { en: "Sociology and Anthropology", vi: "Xã hội học và Nhân chủng học" },
      C: { en: "Economics", vi: "Kinh tế học" },
      D: { en: "Statistics", vi: "Thống kê" }
    },
    correctAnswer: "B",
    explanationEn: "Sociology and Anthropology provide the macro-perspective needed to understand organizational systems and cultures.",
    explanationVi: "Xã hội học và Nhân chủng học cung cấp cái nhìn vĩ mô cần thiết để hiểu các hệ thống và văn hóa tổ chức.",
    relatedSectionId: "1.3.3",
    topic: "Disciplines of OB"
  },
  {
    id: "q130",
    chapter: 1,
    questionEn: "A manager who uses data to decide which training program is most effective is practicing:",
    questionVi: "Một nhà quản lý sử dụng dữ liệu để quyết định chương trình đào tạo nào hiệu quả nhất đang thực hành:",
    options: {
      A: { en: "Intuition", vi: "Trực giác" },
      B: { en: "Evidence-Based Management (EBM)", vi: "Quản lý dựa trên bằng chứng (EBM)" },
      C: { en: "Micromanagement", vi: "Quản lý vi mô" },
      D: { en: "Laissez-faire leadership", vi: "Lãnh đạo tự do" }
    },
    correctAnswer: "B",
    explanationEn: "EBM relies on scientific evidence rather than just gut feelings.",
    explanationVi: "EBM dựa trên bằng chứng khoa học thay vì chỉ là cảm tính.",
    relatedSectionId: "1.2.3",
    topic: "EBM"
  },
  {
    id: "q131",
    chapter: 1,
    questionEn: "Which of the following is a 'Contingency Variable' example?",
    questionVi: "Ví dụ nào sau đây là một 'Biến tình huống'?",
    options: {
      A: { en: "The number of employees in a company.", vi: "Số lượng nhân viên trong một công ty." },
      B: { en: "The level of employee self-discipline when applying flextime.", vi: "Mức độ tự kỷ luật của nhân viên khi áp dụng giờ làm việc linh hoạt." },
      C: { en: "The company's logo color.", vi: "Màu sắc logo của công ty." },
      D: { en: "The office location.", vi: "Địa điểm văn phòng." }
    },
    correctAnswer: "B",
    explanationEn: "The effectiveness of flextime depends on (is contingent upon) the employee's self-discipline.",
    explanationVi: "Hiệu quả của giờ làm việc linh hoạt phụ thuộc vào (tùy thuộc vào) tính tự kỷ luật của nhân viên.",
    relatedSectionId: "1.4.1",
    topic: "Contingency Variables"
  },
  {
    id: "q132",
    chapter: 1,
    questionEn: "Workforce inclusion means:",
    questionVi: "Hòa nhập lực lượng lao động có nghĩa là:",
    options: {
      A: { en: "Hiring only people from one background.", vi: "Chỉ thuê những người từ một nền tảng duy nhất." },
      B: { en: "Ensuring all employees feel valued and have equal opportunities regardless of their differences.", vi: "Đảm bảo tất cả nhân viên cảm thấy được tôn trọng và có cơ hội bình đẳng bất kể sự khác biệt của họ." },
      C: { en: "Forcing everyone to act the same.", vi: "Buộc mọi người phải hành động giống nhau." },
      D: { en: "Ignoring diversity altogether.", vi: "Bỏ qua hoàn toàn sự đa dạng." }
    },
    correctAnswer: "B",
    explanationEn: "Inclusion is the practice of ensuring that diverse employees are fully integrated into the organization.",
    explanationVi: "Hòa nhập là việc đảm bảo rằng các nhân viên đa dạng được tích hợp hoàn toàn vào tổ chức.",
    relatedSectionId: "1.5.1",
    topic: "Diversity"
  },
  {
    id: "q133",
    chapter: 1,
    questionEn: "Expatriates are employees who:",
    questionVi: "Expatriates là những nhân viên:",
    options: {
      A: { en: "Work only in their home country.", vi: "Chỉ làm việc tại quốc gia của họ." },
      B: { en: "Are assigned to work in a country other than their own.", vi: "Được phân công làm việc tại một quốc gia khác không phải quốc gia của họ." },
      C: { en: "Have retired from the company.", vi: "Đã nghỉ hưu khỏi công ty." },
      D: { en: "Work part-time only.", vi: "Chỉ làm việc bán thời gian." }
    },
    correctAnswer: "B",
    explanationEn: "Managing expatriates is a key challenge in a globalized economy.",
    explanationVi: "Quản lý nhân viên làm việc ở nước ngoài (expatriates) là một thách thức chính trong nền kinh tế toàn cầu hóa.",
    relatedSectionId: "1.5.2",
    topic: "Globalization"
  },
  {
    id: "q134",
    chapter: 1,
    questionEn: "Work-life balance challenges have increased due to:",
    questionVi: "Thách thức cân bằng công việc - cuộc sống đã tăng lên do:",
    options: {
      A: { en: "The blurring of boundaries between work and home caused by technology.", vi: "Sự mờ nhạt của ranh giới giữa công việc và gia đình do công nghệ gây ra." },
      B: { en: "Shorter working hours.", vi: "Giờ làm việc ngắn hơn." },
      C: { en: "Fewer communication tools.", vi: "Ít công cụ giao tiếp hơn." },
      D: { en: "Decreased global competition.", vi: "Giảm cạnh tranh toàn cầu." }
    },
    correctAnswer: "A",
    explanationEn: "Technology allows work to follow employees home, making it harder to disconnect.",
    explanationVi: "Công nghệ cho phép công việc theo nhân viên về nhà, khiến việc ngắt kết nối trở nên khó khăn hơn.",
    relatedSectionId: "1.5.3",
    topic: "Technology"
  },
  {
    id: "q135",
    chapter: 1,
    questionEn: "Ethics training in organizations aims to:",
    questionVi: "Đào tạo đạo đức trong các tổ chức nhằm mục đích:",
    options: {
      A: { en: "Teach employees how to break the law without getting caught.", vi: "Dạy nhân viên cách lách luật mà không bị bắt." },
      B: { en: "Help employees recognize and resolve ethical dilemmas.", vi: "Giúp nhân viên nhận biết và giải quyết các tình huống tiến thoái lưỡng nan về đạo đức." },
      C: { en: "Increase the company's stock price directly.", vi: "Tăng giá cổ phiếu của công ty một cách trực tiếp." },
      D: { en: "Replace the need for a code of conduct.", vi: "Thay thế nhu cầu về một bộ quy tắc ứng xử." }
    },
    correctAnswer: "B",
    explanationEn: "Ethics training provides a framework for making moral decisions at work.",
    explanationVi: "Đào tạo đạo đức cung cấp một khuôn khổ để đưa ra các quyết định đạo đức tại nơi làm việc.",
    relatedSectionId: "1.5.4",
    topic: "Ethics"
  },
  {
    id: "q136",
    chapter: 1,
    questionEn: "Which of the following is an example of 'Social Responsibility' in the Triple Bottom Line?",
    questionVi: "Điều nào sau đây là một ví dụ về 'Trách nhiệm xã hội' trong Bộ ba cốt lõi?",
    options: {
      A: { en: "Reducing carbon emissions.", vi: "Giảm lượng khí thải carbon." },
      B: { en: "Ensuring fair wages and safe working conditions for all employees.", vi: "Đảm bảo mức lương công bằng và điều kiện làm việc an toàn cho tất cả nhân viên." },
      C: { en: "Maximizing quarterly profits.", vi: "Tối đa hóa lợi nhuận hàng quý." },
      D: { en: "Developing a new marketing campaign.", vi: "Phát triển một chiến dịch tiếp thị mới." }
    },
    correctAnswer: "B",
    explanationEn: "Social responsibility (People) focuses on the well-being of employees and the community.",
    explanationVi: "Trách nhiệm xã hội (Con người) tập trung vào sự thịnh vượng của nhân viên và cộng đồng.",
    relatedSectionId: "1.5.5",
    topic: "CSR"
  },
  {
    id: "q137",
    chapter: 1,
    questionEn: "A 'Freelancer' is part of which economic trend?",
    questionVi: "Một 'Người làm nghề tự do' (Freelancer) là một phần của xu hướng kinh tế nào?",
    options: {
      A: { en: "Traditional manufacturing.", vi: "Sản xuất truyền thống." },
      B: { en: "The Gig Economy.", vi: "Nền kinh tế Gig." },
      C: { en: "Government employment.", vi: "Việc làm trong chính phủ." },
      D: { en: "Non-profit sector.", vi: "Lĩnh vực phi lợi nhuận." }
    },
    correctAnswer: "B",
    explanationEn: "Freelancers and independent contractors are central to the gig economy.",
    explanationVi: "Những người làm nghề tự do và các nhà thầu độc lập là trung tâm của nền kinh tế gig.",
    relatedSectionId: "1.5.7",
    topic: "Gig Economy"
  },
  {
    id: "q138",
    chapter: 1,
    questionEn: "Which OB level focuses on 'Leadership' and 'Power'?",
    questionVi: "Cấp độ OB nào tập trung vào 'Sự lãnh đạo' và 'Quyền lực'?",
    options: {
      A: { en: "Individual Level", vi: "Cấp độ Cá nhân" },
      B: { en: "Group Level", vi: "Cấp độ Nhóm" },
      C: { en: "Organizational Level", vi: "Cấp độ Tổ chức" },
      D: { en: "Global Level", vi: "Cấp độ Toàn cầu" }
    },
    correctAnswer: "B",
    explanationEn: "Leadership and power are processes that occur between people in a group setting.",
    explanationVi: "Lãnh đạo và quyền lực là các quá trình xảy ra giữa con người trong một bối cảnh nhóm.",
    relatedSectionId: "1.6.2",
    topic: "Levels of Analysis"
  },
  {
    id: "q139",
    chapter: 1,
    questionEn: "What is an 'Input' at the organizational level?",
    questionVi: "Một 'Đầu vào' (Input) ở cấp độ tổ chức là gì?",
    options: {
      A: { en: "Organizational structure and culture.", vi: "Cấu trúc và văn hóa tổ chức." },
      B: { en: "Employee attitudes.", vi: "Thái độ của nhân viên." },
      C: { en: "Group conflict.", vi: "Xung đột nhóm." },
      D: { en: "Productivity.", vi: "Năng suất." }
    },
    correctAnswer: "A",
    explanationEn: "Structure and culture are the foundation (inputs) of the organizational system.",
    explanationVi: "Cấu trúc và văn hóa là nền tảng (đầu vào) của hệ thống tổ chức.",
    relatedSectionId: "1.6.3",
    topic: "OB Model"
  },
  {
    id: "q140",
    chapter: 1,
    questionEn: "Which skill involves the ability to work effectively with others?",
    questionVi: "Kỹ năng nào liên quan đến khả năng làm việc hiệu quả với người khác?",
    options: {
      A: { en: "Critical thinking", vi: "Tư duy phản biện" },
      B: { en: "Collaboration", vi: "Sự hợp tác" },
      C: { en: "Self-management", vi: "Tự quản lý" },
      D: { en: "Career management", vi: "Quản lý sự nghiệp" }
    },
    correctAnswer: "B",
    explanationEn: "Collaboration is a key employability skill gained from studying OB.",
    explanationVi: "Hợp tác là một kỹ năng làm việc quan trọng có được từ việc nghiên cứu OB.",
    relatedSectionId: "1.7.1",
    topic: "Employability Skills"
  },
  {
    id: "q141",
    chapter: 1,
    questionEn: "Psychology's contribution to OB is primarily at the:",
    questionVi: "Đóng góp của tâm lý học cho OB chủ yếu ở:",
    options: {
      A: { en: "Macro level.", vi: "Cấp độ vĩ mô." },
      B: { en: "Micro level (Individual).", vi: "Cấp độ vi mô (Cá nhân)." },
      C: { en: "Societal level.", vi: "Cấp độ xã hội." },
      D: { en: "Global level.", vi: "Cấp độ toàn cầu." }
    },
    correctAnswer: "B",
    explanationEn: "Psychology focuses on individual behavior and mental processes.",
    explanationVi: "Tâm lý học tập trung vào hành vi cá nhân và các quá trình tâm lý.",
    relatedSectionId: "1.3.1",
    topic: "Disciplines of OB"
  },
  {
    id: "q142",
    chapter: 1,
    questionEn: "Which discipline studies 'Power' and 'Conflict' in organizations?",
    questionVi: "Ngành học nào nghiên cứu về 'Quyền lực' và 'Xung đột' trong các tổ chức?",
    options: {
      A: { en: "Psychology", vi: "Tâm lý học" },
      B: { en: "Sociology", vi: "Xã hội học" },
      C: { en: "Biology", vi: "Sinh học" },
      D: { en: "Physics", vi: "Vật lý" }
    },
    correctAnswer: "B",
    explanationEn: "Sociology examines group dynamics, power structures, and conflict within social systems.",
    explanationVi: "Xã hội học kiểm tra các động lực nhóm, cấu trúc quyền lực và xung đột bên trong các hệ thống xã hội.",
    relatedSectionId: "1.3.3",
    topic: "Disciplines of OB"
  },
  {
    id: "q143",
    chapter: 1,
    questionEn: "A manager who assumes that 'one size fits all' for employee motivation is ignoring:",
    questionVi: "Một nhà quản lý giả định rằng 'một kích cỡ phù hợp cho tất cả' đối với động lực của nhân viên đang bỏ qua:",
    options: {
      A: { en: "Systematic study.", vi: "Nghiên cứu có hệ thống." },
      B: { en: "Contingency variables.", vi: "Các biến tình huống." },
      C: { en: "Organizational structure.", vi: "Cấu trúc tổ chức." },
      D: { en: "The gig economy.", vi: "Nền kinh tế gig." }
    },
    correctAnswer: "B",
    explanationEn: "Ignoring contingency variables means failing to recognize that different people need different motivators.",
    explanationVi: "Bỏ qua các biến tình huống có nghĩa là không nhận ra rằng những người khác nhau cần những yếu tố thúc đẩy khác nhau.",
    relatedSectionId: "1.4.1",
    topic: "Contingency Variables"
  },
  {
    id: "q144",
    chapter: 1,
    questionEn: "Workforce diversity is a challenge because it requires managers to:",
    questionVi: "Đa dạng lực lượng lao động là một thách thức vì nó đòi hỏi các nhà quản lý phải:",
    options: {
      A: { en: "Treat everyone exactly the same.", vi: "Đối xử với mọi người hoàn toàn giống nhau." },
      B: { en: "Recognize and value differences to increase productivity.", vi: "Nhận biết và coi trọng sự khác biệt để tăng năng suất." },
      C: { en: "Hire only from a specific demographic.", vi: "Chỉ thuê từ một nhóm nhân khẩu học cụ thể." },
      D: { en: "Ignore cultural backgrounds.", vi: "Bỏ qua các nền tảng văn hóa." }
    },
    correctAnswer: "B",
    explanationEn: "Effective diversity management leverages differences rather than ignoring them.",
    explanationVi: "Quản lý đa dạng hiệu quả tận dụng sự khác biệt thay vì bỏ qua chúng.",
    relatedSectionId: "1.5.1",
    topic: "Diversity"
  },
  {
    id: "q145",
    chapter: 1,
    questionEn: "The 'Planet' aspect of the Triple Bottom Line focuses on:",
    questionVi: "Khía cạnh 'Hành tinh' (Planet) của Bộ ba cốt lõi tập trung vào:",
    options: {
      A: { en: "Space exploration.", vi: "Khám phá không gian." },
      B: { en: "Environmental sustainability.", vi: "Sự bền vững của môi trường." },
      C: { en: "Global marketing.", vi: "Tiếp thị toàn cầu." },
      D: { en: "International law.", vi: "Luật pháp quốc tế." }
    },
    correctAnswer: "B",
    explanationEn: "The 'Planet' aspect relates to an organization's environmental impact.",
    explanationVi: "Khía cạnh 'Hành tinh' liên quan đến tác động môi trường của một tổ chức.",
    relatedSectionId: "1.5.5",
    topic: "CSR"
  },
  {
    id: "q146",
    chapter: 1,
    questionEn: "Which skill involves the ability to manage one's own work and emotions?",
    questionVi: "Kỹ năng nào liên quan đến khả năng quản lý công việc và cảm xúc của chính mình?",
    options: {
      A: { en: "Collaboration", vi: "Sự hợp tác" },
      B: { en: "Self-management", vi: "Tự quản lý" },
      C: { en: "Leadership", vi: "Sự lãnh đạo" },
      D: { en: "Social responsibility", vi: "Trách nhiệm xã hội" }
    },
    correctAnswer: "B",
    explanationEn: "Self-management is a critical employability skill for modern workers.",
    explanationVi: "Tự quản lý là một kỹ năng làm việc quan trọng đối với người lao động hiện đại.",
    relatedSectionId: "1.7.1",
    topic: "Employability Skills"
  },
  {
    id: "q147",
    chapter: 1,
    questionEn: "In the OB model, 'Processes' are:",
    questionVi: "Trong mô hình OB, 'Quá trình' (Processes) là:",
    options: {
      A: { en: "Static variables.", vi: "Các biến tĩnh." },
      B: { en: "Actions that individuals, groups, and organizations engage in as a result of inputs.", vi: "Các hành động mà cá nhân, nhóm và tổ chức thực hiện như một kết quả của các đầu vào." },
      C: { en: "The final results of an organization.", vi: "Kết quả cuối cùng của một tổ chức." },
      D: { en: "The same as inputs.", vi: "Giống như các đầu vào." }
    },
    correctAnswer: "B",
    explanationEn: "Processes lead to outcomes based on the initial inputs.",
    explanationVi: "Các quá trình dẫn đến các kết quả dựa trên các đầu vào ban đầu.",
    relatedSectionId: "1.6",
    topic: "OB Model"
  },
  {
    id: "q148",
    chapter: 1,
    questionEn: "Which discipline contributes to OB at the Group level by studying 'Communication'?",
    questionVi: "Ngành học nào đóng góp cho OB ở cấp độ Nhóm bằng cách nghiên cứu 'Giao tiếp'?",
    options: {
      A: { en: "Psychology", vi: "Tâm lý học" },
      B: { en: "Social Psychology", vi: "Tâm lý học xã hội" },
      C: { en: "Anthropology", vi: "Nhân chủng học" },
      D: { en: "Economics", vi: "Kinh tế học" }
    },
    correctAnswer: "B",
    explanationEn: "Social psychology focuses on how people influence and communicate with each other in groups.",
    explanationVi: "Tâm lý học xã hội tập trung vào cách con người ảnh hưởng và giao tiếp với nhau trong các nhóm.",
    relatedSectionId: "1.3.2",
    topic: "Disciplines of OB"
  },
  {
    id: "q149",
    chapter: 1,
    questionEn: "A manager who ignores the 'People' aspect of CSR is likely to have:",
    questionVi: "Một nhà quản lý bỏ qua khía cạnh 'Con người' của CSR có khả năng có:",
    options: {
      A: { en: "Higher employee turnover and lower morale.", vi: "Tỷ lệ nghỉ việc cao hơn và tinh thần thấp hơn." },
      B: { en: "Better environmental ratings.", vi: "Xếp hạng môi trường tốt hơn." },
      C: { en: "Lower taxes.", vi: "Thuế thấp hơn." },
      D: { en: "More customers.", vi: "Nhiều khách hàng hơn." }
    },
    correctAnswer: "A",
    explanationEn: "Neglecting the social aspect of CSR can harm employee relations and retention.",
    explanationVi: "Bỏ qua khía cạnh xã hội của CSR có thể gây hại cho quan hệ nhân viên và sự gắn bó.",
    relatedSectionId: "1.5.5",
    topic: "CSR"
  },
  {
    id: "q150",
    chapter: 1,
    questionEn: "The ultimate goal of applying OB concepts is to improve:",
    questionVi: "Mục tiêu cuối cùng của việc áp dụng các khái niệm OB là để cải thiện:",
    options: {
      A: { en: "The CEO's salary.", vi: "Lương của CEO." },
      B: { en: "Organizational effectiveness.", vi: "Tính hiệu quả của tổ chức." },
      C: { en: "The number of rules in the company.", vi: "Số lượng các quy tắc trong công ty." },
      D: { en: "The complexity of the hierarchy.", vi: "Sự phức tạp của hệ thống cấp bậc." }
    },
    correctAnswer: "B",
    explanationEn: "OB aims to make organizations work better through understanding human behavior.",
    explanationVi: "OB nhằm mục đích làm cho các tổ chức hoạt động tốt hơn thông qua việc thấu hiểu hành vi con người.",
    relatedSectionId: "1.1.1",
    topic: "Purpose of OB"
  },

  // --- CHAPTER 5: Personality and Values (50 questions) ---
  {
    id: "q501",
    chapter: 5,
    questionEn: "What is the core focus of Person-Job fit theory?",
    questionVi: "Trọng tâm cốt lõi của lý thuyết Sự phù hợp giữa người và việc (Person-Job fit) là gì?",
    options: {
      A: { en: "Matching personality to organizational values", vi: "Phù hợp tính cách với giá trị tổ chức" },
      B: { en: "Matching personality type to occupational environment", vi: "Phù hợp loại tính cách với môi trường nghề nghiệp" },
      C: { en: "Matching physical abilities to job demands", vi: "Phù hợp năng lực thể chất với yêu cầu công việc" },
      D: { en: "Matching terminal values to instrumental values", vi: "Phù hợp giá trị đích đến với giá trị công cụ" }
    },
    correctAnswer: "B",
    explanationEn: "Person-Job fit focuses on matching a person's personality type to their occupational environment.",
    explanationVi: "Person-Job fit tập trung vào sự phù hợp giữa loại tính cách của một người và môi trường nghề nghiệp của họ.",
    relatedSectionId: "5.1.1",
    topic: "Person-Job Fit"
  },
  {
    id: "q502",
    chapter: 5,
    questionEn: "According to Holland's Typology, which personality type prefers activities involving thinking, organizing, and understanding?",
    questionVi: "Theo mô hình của Holland, loại tính cách nào thích các hoạt động liên quan đến suy nghĩ, tổ chức và thấu hiểu?",
    options: {
      A: { en: "Realistic", vi: "Thực tế" },
      B: { en: "Investigative", vi: "Nghiên cứu" },
      C: { en: "Artistic", vi: "Nghệ thuật" },
      D: { en: "Conventional", vi: "Quy củ" }
    },
    correctAnswer: "B",
    explanationEn: "The Investigative type prefers thinking, organizing, and understanding (e.g., biologists, economists).",
    explanationVi: "Nhóm Nghiên cứu (Investigative) thích suy nghĩ, tổ chức và thấu hiểu (ví dụ: nhà sinh học, nhà kinh tế học).",
    relatedSectionId: "5.1.1",
    topic: "Holland's Typology"
  },
  {
    id: "q503",
    chapter: 5,
    questionEn: "Which Holland personality type is best suited for a mechanic or assembly-line worker?",
    questionVi: "Loại tính cách nào của Holland phù hợp nhất với thợ máy hoặc công nhân lắp ráp?",
    options: {
      A: { en: "Realistic", vi: "Thực tế" },
      B: { en: "Social", vi: "Xã hội" },
      C: { en: "Enterprising", vi: "Dẫn dắt/Khởi nghiệp" },
      D: { en: "Conventional", vi: "Quy củ" }
    },
    correctAnswer: "A",
    explanationEn: "The Realistic type prefers physical activities requiring skill and strength, making them suited for mechanics.",
    explanationVi: "Nhóm Thực tế (Realistic) thích các hoạt động thể chất đòi hỏi kỹ năng và sức mạnh, phù hợp làm thợ máy.",
    relatedSectionId: "5.1.1",
    topic: "Holland's Typology"
  },
  {
    id: "q504",
    chapter: 5,
    questionEn: "A person who enjoys helping and developing others, such as a teacher or social worker, fits which Holland type?",
    questionVi: "Một người thích giúp đỡ và phát triển người khác, chẳng hạn như giáo viên hoặc nhân viên xã hội, thuộc nhóm tính cách nào của Holland?",
    options: {
      A: { en: "Artistic", vi: "Nghệ thuật" },
      B: { en: "Investigative", vi: "Nghiên cứu" },
      C: { en: "Social", vi: "Xã hội" },
      D: { en: "Enterprising", vi: "Dẫn dắt/Khởi nghiệp" }
    },
    correctAnswer: "C",
    explanationEn: "The Social type prefers activities that help and develop others.",
    explanationVi: "Nhóm Xã hội (Social) thích các hoạt động giúp đỡ và phát triển người khác.",
    relatedSectionId: "5.1.1",
    topic: "Holland's Typology"
  },
  {
    id: "q505",
    chapter: 5,
    questionEn: "Which Holland type prefers rule-regulated, orderly, and unambiguous activities (e.g., accountant)?",
    questionVi: "Nhóm tính cách nào của Holland thích các hoạt động có quy tắc, trật tự và rõ ràng (ví dụ: kế toán)?",
    options: {
      A: { en: "Realistic", vi: "Thực tế" },
      B: { en: "Conventional", vi: "Quy củ" },
      C: { en: "Enterprising", vi: "Dẫn dắt/Khởi nghiệp" },
      D: { en: "Investigative", vi: "Nghiên cứu" }
    },
    correctAnswer: "B",
    explanationEn: "The Conventional type prefers rule-regulated, orderly, and unambiguous activities.",
    explanationVi: "Nhóm Quy củ (Conventional) thích các hoạt động có quy tắc, trật tự và rõ ràng.",
    relatedSectionId: "5.1.1",
    topic: "Holland's Typology"
  },
  {
    id: "q506",
    chapter: 5,
    questionEn: "What does Person-Organization fit primarily measure?",
    questionVi: "Sự phù hợp giữa Người và Tổ chức (Person-Organization fit) chủ yếu đo lường điều gì?",
    options: {
      A: { en: "The match between personality and job tasks", vi: "Sự phù hợp giữa tính cách và nhiệm vụ công việc" },
      B: { en: "The match between individual values and organizational values", vi: "Sự phù hợp giữa giá trị cá nhân và giá trị tổ chức" },
      C: { en: "The match between physical ability and work environment", vi: "Sự phù hợp giữa năng lực thể chất và môi trường làm việc" },
      D: { en: "The match between intelligence and job complexity", vi: "Sự phù hợp giữa trí thông minh và độ phức tạp của công việc" }
    },
    correctAnswer: "B",
    explanationEn: "Person-Organization fit argues that people are attracted to and selected by organizations that match their values.",
    explanationVi: "Person-Organization fit cho rằng con người bị thu hút bởi những tổ chức phù hợp với hệ giá trị của họ.",
    relatedSectionId: "5.1.2",
    topic: "Person-Organization Fit"
  },
  {
    id: "q507",
    chapter: 5,
    questionEn: "What happens when an employee experiences a lack of compatibility with their organization's values?",
    questionVi: "Điều gì xảy ra khi một nhân viên cảm thấy không có sự tương thích với giá trị của tổ chức?",
    options: {
      A: { en: "They will adapt their values.", vi: "Họ sẽ điều chỉnh giá trị của mình." },
      B: { en: "They will become more productive.", vi: "Họ sẽ làm việc năng suất hơn." },
      C: { en: "They will leave the organization.", vi: "Họ sẽ rời bỏ tổ chức." },
      D: { en: "They will ignore the organizational values.", vi: "Họ sẽ phớt lờ giá trị của tổ chức." }
    },
    correctAnswer: "C",
    explanationEn: "If employees feel no compatibility in values, they will leave the organization.",
    explanationVi: "Nếu nhân viên cảm thấy không có sự tương thích về mặt giá trị, họ sẽ rời bỏ tổ chức đó.",
    relatedSectionId: "5.1.2",
    topic: "Person-Organization Fit"
  },
  {
    id: "q508",
    chapter: 5,
    questionEn: "Which question best represents Person-Organization fit?",
    questionVi: "Câu hỏi nào thể hiện rõ nhất Sự phù hợp giữa Người và Tổ chức?",
    options: {
      A: { en: "Does your personality fit this profession?", vi: "Tính cách của bạn có hợp để làm nghề này không?" },
      B: { en: "Do your personal values align with this company's values?", vi: "Giá trị cá nhân của bạn có đồng điệu với giá trị của công ty này không?" },
      C: { en: "Do you have the physical strength for this job?", vi: "Bạn có đủ sức khỏe cho công việc này không?" },
      D: { en: "Are you smart enough to solve this problem?", vi: "Bạn có đủ thông minh để giải quyết vấn đề này không?" }
    },
    correctAnswer: "B",
    explanationEn: "Person-Organization fit solves the issue of whether personal values align with company values for long-term commitment.",
    explanationVi: "Person-Organization fit giải quyết vấn đề 'Giá trị cá nhân của bạn có đồng điệu với giá trị của công ty này để gắn bó lâu dài hay không?'.",
    relatedSectionId: "5.1.2",
    topic: "Person-Organization Fit"
  },

  // --- 5.2 Personality (6 questions) ---
  {
    id: "q509",
    chapter: 5,
    questionEn: "How is personality defined in OB?",
    questionVi: "Tính cách được định nghĩa như thế nào trong Hành vi Tổ chức?",
    options: {
      A: { en: "The sum total of ways in which an individual reacts to and interacts with others.", vi: "Tổng hợp tất cả các cách thức mà một cá nhân phản ứng và tương tác với thế giới xung quanh." },
      B: { en: "The genetic traits inherited from parents.", vi: "Các đặc điểm di truyền được thừa hưởng từ cha mẹ." },
      C: { en: "The temporary emotional states of a person.", vi: "Trạng thái cảm xúc tạm thời của một người." },
      D: { en: "The physical appearance of an individual.", vi: "Ngoại hình thể chất của một cá nhân." }
    },
    correctAnswer: "A",
    explanationEn: "Personality is the sum total of ways in which an individual reacts to and interacts with others.",
    explanationVi: "Tính cách là tổng hợp tất cả các cách thức mà một cá nhân phản ứng và tương tác với thế giới xung quanh.",
    relatedSectionId: "5.2.1",
    topic: "Defining Personality"
  },
  {
    id: "q510",
    chapter: 5,
    questionEn: "What defines 'personality traits'?",
    questionVi: "Điều gì định nghĩa 'đặc điểm tính cách' (personality traits)?",
    options: {
      A: { en: "Behaviors that change daily.", vi: "Những hành vi thay đổi hàng ngày." },
      B: { en: "Enduring characteristics that describe an individual's behavior.", vi: "Những hành vi ổn định và tồn tại lâu dài." },
      C: { en: "Reactions to extreme stress.", vi: "Phản ứng đối với căng thẳng tột độ." },
      D: { en: "Skills learned through training.", vi: "Kỹ năng học được qua đào tạo." }
    },
    correctAnswer: "B",
    explanationEn: "When behaviors are exhibited consistently and exist over a long period (enduring characteristics), they are called personality traits.",
    explanationVi: "Khi những hành vi được thể hiện ra một cách ổn định và tồn tại lâu dài, chúng được gọi là các đặc điểm tính cách.",
    relatedSectionId: "5.2.1",
    topic: "Defining Personality"
  },
  {
    id: "q511",
    chapter: 5,
    questionEn: "Why do managers need to measure personality?",
    questionVi: "Tại sao các nhà quản lý cần đo lường tính cách?",
    options: {
      A: { en: "To determine salary levels.", vi: "Để xác định mức lương." },
      B: { en: "To predict who is best suited for a specific job during hiring.", vi: "Để dự đoán ai phù hợp nhất với một công việc cụ thể khi tuyển dụng." },
      C: { en: "To decide on office seating arrangements.", vi: "Để quyết định chỗ ngồi trong văn phòng." },
      D: { en: "To evaluate past job performance.", vi: "Để đánh giá hiệu suất làm việc trong quá khứ." }
    },
    correctAnswer: "B",
    explanationEn: "Personality tests are highly useful in hiring decisions to predict who will be a good fit and perform well in a specific job.",
    explanationVi: "Các bài kiểm tra tính cách rất hữu ích trong quyết định tuyển dụng để dự đoán ứng viên nào sẽ phù hợp và làm tốt nhất một công việc cụ thể.",
    relatedSectionId: "5.2.2",
    topic: "Measuring Personality"
  },
  {
    id: "q512",
    chapter: 5,
    questionEn: "What is the most common method used to measure personality?",
    questionVi: "Phương pháp phổ biến nhất được sử dụng để đo lường tính cách là gì?",
    options: {
      A: { en: "Interviews", vi: "Phỏng vấn" },
      B: { en: "Self-report surveys", vi: "Khảo sát tự đánh giá" },
      C: { en: "Observer ratings", vi: "Đánh giá từ người quan sát" },
      D: { en: "Medical exams", vi: "Khám sức khỏe" }
    },
    correctAnswer: "B",
    explanationEn: "The most common means of measuring personality is through self-report surveys.",
    explanationVi: "Cách thức phổ biến nhất để đo lường tính cách là thông qua các bài khảo sát tự đánh giá (self-report surveys).",
    relatedSectionId: "5.2.2",
    topic: "Measuring Personality"
  },
  {
    id: "q513",
    chapter: 5,
    questionEn: "For which group is the usage of personality tests highest in hiring?",
    questionVi: "Đối với nhóm nào, tỷ lệ sử dụng bài kiểm tra tính cách trong tuyển dụng là cao nhất?",
    options: {
      A: { en: "Hourly Workers", vi: "Lao động làm theo giờ" },
      B: { en: "Individual Contributors", vi: "Nhân viên độc lập" },
      C: { en: "Middle Managers", vi: "Quản lý cấp trung" },
      D: { en: "Executives", vi: "Giám đốc/Điều hành" }
    },
    correctAnswer: "D",
    explanationEn: "Executives have the highest usage rate of personality tests in hiring at 32%.",
    explanationVi: "Giám đốc/Điều hành (Executives) có tỷ lệ sử dụng bài test tính cách cao nhất là 32%.",
    relatedSectionId: "5.2.2",
    topic: "Measuring Personality"
  },
  {
    id: "q514",
    chapter: 5,
    questionEn: "What is the usage rate of personality tests for Middle Managers?",
    questionVi: "Tỷ lệ sử dụng bài kiểm tra tính cách cho Quản lý cấp trung là bao nhiêu?",
    options: {
      A: { en: "17%", vi: "17%" },
      B: { en: "20%", vi: "20%" },
      C: { en: "28%", vi: "28%" },
      D: { en: "32%", vi: "32%" }
    },
    correctAnswer: "C",
    explanationEn: "The usage rate for Middle Managers is 28%.",
    explanationVi: "Tỷ lệ sử dụng bài test tính cách cho Quản lý cấp trung (Middle Managers) là 28%.",
    relatedSectionId: "5.2.2",
    topic: "Measuring Personality"
  },

  // --- 5.3 MBTI, Big Five, Dark Triad (10 questions) ---
  {
    id: "q515",
    chapter: 5,
    questionEn: "Which of the following is NOT a dimension of the MBTI?",
    questionVi: "Khía cạnh nào sau đây KHÔNG thuộc mô hình MBTI?",
    options: {
      A: { en: "Extroverted / Introverted", vi: "Hướng ngoại / Hướng nội" },
      B: { en: "Sensing / Intuitive", vi: "Cảm giác / Trực giác" },
      C: { en: "Thinking / Feeling", vi: "Lý trí / Cảm xúc" },
      D: { en: "Agreeable / Antagonistic", vi: "Hòa đồng / Đối kháng" }
    },
    correctAnswer: "D",
    explanationEn: "MBTI dimensions are E/I, S/N, T/F, and P/J. Agreeableness is part of the Big Five.",
    explanationVi: "Các khía cạnh của MBTI là E/I, S/N, T/F, và P/J. Sự hòa đồng (Agreeableness) thuộc mô hình Big Five.",
    relatedSectionId: "5.3.1",
    topic: "MBTI"
  },
  {
    id: "q516",
    chapter: 5,
    questionEn: "What is the primary advantage of the MBTI?",
    questionVi: "Ưu điểm chính của MBTI là gì?",
    options: {
      A: { en: "Strong empirical evidence", vi: "Bằng chứng thực nghiệm mạnh mẽ" },
      B: { en: "Its popularity and widespread use", vi: "Sự phổ biến và được sử dụng rộng rãi" },
      C: { en: "High predictive validity for job performance", vi: "Độ chính xác cao trong dự đoán hiệu suất công việc" },
      D: { en: "It measures the Dark Triad traits", vi: "Nó đo lường các đặc điểm của Dark Triad" }
    },
    correctAnswer: "B",
    explanationEn: "The primary advantage of the MBTI is its popularity; it is the most widely used personality framework.",
    explanationVi: "Ưu điểm chính của MBTI là sự phổ biến của nó, đây là khung tính cách được sử dụng rộng rãi nhất.",
    relatedSectionId: "5.3.1",
    topic: "MBTI"
  },
  {
    id: "q517",
    chapter: 5,
    questionEn: "Why are managers cautioned against making substantive decisions based on MBTI results?",
    questionVi: "Tại sao các nhà quản lý được cảnh báo không nên đưa ra các quyết định quan trọng dựa trên kết quả MBTI?",
    options: {
      A: { en: "It is too expensive.", vi: "Nó quá đắt đỏ." },
      B: { en: "It lacks strong empirical evidence.", vi: "Nó thiếu bằng chứng thực nghiệm mạnh mẽ." },
      C: { en: "It discriminates against introverts.", vi: "Nó phân biệt đối xử với người hướng nội." },
      D: { en: "It takes too long to complete.", vi: "Nó mất quá nhiều thời gian để hoàn thành." }
    },
    correctAnswer: "B",
    explanationEn: "Managers are cautioned because there is a lack of strong empirical evidence and support for the MBTI.",
    explanationVi: "Các nhà quản lý được cảnh báo vì MBTI thiếu bằng chứng thực nghiệm và sự hỗ trợ mạnh mẽ.",
    relatedSectionId: "5.3.1",
    topic: "MBTI"
  },
  {
    id: "q518",
    chapter: 5,
    questionEn: "Which personality framework is the most widely supported by evidence to date?",
    questionVi: "Mô hình tính cách nào được hỗ trợ bởi nhiều bằng chứng nhất cho đến nay?",
    options: {
      A: { en: "MBTI", vi: "MBTI" },
      B: { en: "The Dark Triad", vi: "Dark Triad" },
      C: { en: "The Big Five Model", vi: "Mô hình Big Five" },
      D: { en: "Holland's Typology", vi: "Mô hình Holland" }
    },
    correctAnswer: "C",
    explanationEn: "The Big Five is the most widely supported personality framework to date.",
    explanationVi: "Big Five là mô hình tính cách được hỗ trợ rộng rãi nhất cho đến nay.",
    relatedSectionId: "5.3.2",
    topic: "Big Five Model"
  },
  {
    id: "q519",
    chapter: 5,
    questionEn: "In the Big Five model, which trait leads to higher job and life satisfaction?",
    questionVi: "Trong mô hình Big Five, đặc điểm nào dẫn đến sự hài lòng cao hơn trong công việc và cuộc sống?",
    options: {
      A: { en: "Extroversion", vi: "Sự hướng ngoại" },
      B: { en: "Emotional stability", vi: "Sự ổn định cảm xúc" },
      C: { en: "Openness to experience", vi: "Sự cởi mở với trải nghiệm" },
      D: { en: "Agreeableness", vi: "Sự hòa đồng" }
    },
    correctAnswer: "B",
    explanationEn: "Emotional stability leads to higher job and life satisfaction.",
    explanationVi: "Sự ổn định cảm xúc (Emotional stability) dẫn đến mức độ hài lòng cao hơn với công việc và cuộc sống.",
    relatedSectionId: "5.3.2",
    topic: "Big Five Model"
  },
  {
    id: "q520",
    chapter: 5,
    questionEn: "Which Big Five trait enhances training performance?",
    questionVi: "Đặc điểm nào của Big Five giúp nâng cao hiệu suất đào tạo?",
    options: {
      A: { en: "Conscientiousness", vi: "Sự tận tâm" },
      B: { en: "Extroversion", vi: "Sự hướng ngoại" },
      C: { en: "Openness", vi: "Sự cởi mở" },
      D: { en: "Agreeableness", vi: "Sự hòa đồng" }
    },
    correctAnswer: "C",
    explanationEn: "Openness to experience enhances training performance.",
    explanationVi: "Sự cởi mở (Openness) giúp nâng cao hiệu suất trong quá trình đào tạo.",
    relatedSectionId: "5.3.2",
    topic: "Big Five Model"
  },
  {
    id: "q521",
    chapter: 5,
    questionEn: "What is a general limitation of personality frameworks like the Big Five?",
    questionVi: "Hạn chế chung của các mô hình tính cách như Big Five là gì?",
    options: {
      A: { en: "They are too complex to understand.", vi: "Chúng quá phức tạp để hiểu." },
      B: { en: "Some traits predict training success but not actual job performance.", vi: "Một số đặc điểm dự đoán thành công trong đào tạo nhưng không dự đoán hiệu suất công việc thực tế." },
      C: { en: "They only apply to executives.", vi: "Chúng chỉ áp dụng cho các giám đốc điều hành." },
      D: { en: "They ignore emotional stability.", vi: "Chúng bỏ qua sự ổn định cảm xúc." }
    },
    correctAnswer: "B",
    explanationEn: "A limitation is that while some traits predict actual job performance, others may only predict how well an employee does during training and onboarding.",
    explanationVi: "Một hạn chế là trong khi một số đặc điểm dự đoán hiệu suất công việc thực tế, những đặc điểm khác có thể chỉ dự đoán nhân viên sẽ làm tốt như thế nào trong quá trình đào tạo và hội nhập.",
    relatedSectionId: "5.3.2",
    topic: "Big Five Model"
  },
  {
    id: "q522",
    chapter: 5,
    questionEn: "Which Dark Triad trait describes a tendency to be arrogant and possess a grandiose sense of self-importance?",
    questionVi: "Đặc điểm nào của Dark Triad mô tả xu hướng kiêu ngạo và có cảm giác vĩ cuồng về tầm quan trọng của bản thân?",
    options: {
      A: { en: "Machiavellianism", vi: "Tính thực dụng" },
      B: { en: "Narcissism", vi: "Sự ái kỷ" },
      C: { en: "Psychopathy", vi: "Sự thái nhân cách" },
      D: { en: "Neuroticism", vi: "Sự nhiễu tâm" }
    },
    correctAnswer: "B",
    explanationEn: "Narcissism describes a tendency to be arrogant, possess a grandiose sense of self-importance, require excessive admiration, and have a strong sense of entitlement.",
    explanationVi: "Sự ái kỷ (Narcissism) mô tả xu hướng kiêu ngạo, có cảm giác vĩ cuồng về tầm quan trọng của bản thân, đòi hỏi sự ngưỡng mộ quá mức và có ý thức mạnh mẽ về quyền lợi.",
    relatedSectionId: "5.3.3",
    topic: "The Dark Triad"
  },
  {
    id: "q523",
    chapter: 5,
    questionEn: "Why are the Dark Triad traits considered a severe weakness or risk for an organization?",
    questionVi: "Tại sao các đặc điểm của Dark Triad được coi là điểm yếu hoặc rủi ro nghiêm trọng đối với một tổ chức?",
    options: {
      A: { en: "They make employees too agreeable.", vi: "Chúng làm cho nhân viên quá dễ dãi." },
      B: { en: "They describe individuals who manipulate, act arrogantly, or harm others without remorse.", vi: "Chúng mô tả những cá nhân thao túng, hành động kiêu ngạo hoặc làm hại người khác mà không hối hận." },
      C: { en: "They lead to excessive emotional stability.", vi: "Chúng dẫn đến sự ổn định cảm xúc quá mức." },
      D: { en: "They cause employees to be overly cautious.", vi: "Chúng khiến nhân viên quá thận trọng." }
    },
    correctAnswer: "B",
    explanationEn: "The Dark Triad traits represent a severe risk because they describe individuals who manipulate, act arrogantly, or harm others without remorse.",
    explanationVi: "Các đặc điểm này là rủi ro nghiêm trọng vì chúng mô tả những cá nhân thao túng, hành động kiêu ngạo hoặc làm hại người khác mà không hề hối hận.",
    relatedSectionId: "5.3.3",
    topic: "The Dark Triad"
  },
  {
    id: "q524",
    chapter: 5,
    questionEn: "Which trait involves believing that 'the ends can justify the means'?",
    questionVi: "Đặc điểm nào liên quan đến niềm tin rằng 'mục đích có thể biện minh cho phương tiện'?",
    options: {
      A: { en: "Psychopathy", vi: "Sự thái nhân cách" },
      B: { en: "Narcissism", vi: "Sự ái kỷ" },
      C: { en: "Machiavellianism", vi: "Tính thực dụng" },
      D: { en: "Conscientiousness", vi: "Sự tận tâm" }
    },
    correctAnswer: "C",
    explanationEn: "Machiavellianism describes an individual who is pragmatic, maintains emotional distance, and believes that the ends can justify the means.",
    explanationVi: "Tính thực dụng (Machiavellianism) mô tả một cá nhân thực dụng, giữ khoảng cách cảm xúc và tin rằng mục đích có thể biện minh cho phương tiện.",
    relatedSectionId: "5.3.3",
    topic: "The Dark Triad"
  },

  // --- 5.4 CSE, Self-Monitoring, Proactive Personality (8 questions) ---
  {
    id: "q525",
    chapter: 5,
    questionEn: "What does Core Self-Evaluation (CSE) measure?",
    questionVi: "Tự đánh giá cốt lõi (CSE) đo lường điều gì?",
    options: {
      A: { en: "The ability to adjust behavior to external factors.", vi: "Khả năng điều chỉnh hành vi theo các yếu tố bên ngoài." },
      B: { en: "Bottom-line conclusions individuals have about their capabilities, competence, and worth.", vi: "Những kết luận sâu thẳm nhất mà cá nhân tự đánh giá về năng lực, sự tháo vát và giá trị của họ." },
      C: { en: "The tendency to identify opportunities and take action.", vi: "Xu hướng nhận diện cơ hội và hành động." },
      D: { en: "The level of emotional stability under stress.", vi: "Mức độ ổn định cảm xúc dưới áp lực." }
    },
    correctAnswer: "B",
    explanationEn: "CSE refers to the bottom-line conclusions individuals have about their capabilities, competence, and worth as a person.",
    explanationVi: "CSE là những kết luận sâu thẳm nhất mà một cá nhân tự đánh giá về năng lực, sự tháo vát và giá trị cốt lõi của họ như một con người.",
    relatedSectionId: "5.4.1",
    topic: "Core Self-Evaluation"
  },
  {
    id: "q526",
    chapter: 5,
    questionEn: "An employee with low Core Self-Evaluation (CSE) is likely to react how during a crisis like downsizing?",
    questionVi: "Một nhân viên có Tự đánh giá cốt lõi (CSE) thấp có khả năng phản ứng như thế nào trong một cuộc khủng hoảng như cắt giảm nhân sự?",
    options: {
      A: { en: "They will remain calm and effective.", vi: "Họ sẽ giữ bình tĩnh và làm việc hiệu quả." },
      B: { en: "They will panic and doubt themselves.", vi: "Họ sẽ hoảng loạn và nghi ngờ bản thân." },
      C: { en: "They will manipulate others to keep their job.", vi: "Họ sẽ thao túng người khác để giữ việc." },
      D: { en: "They will proactively find new software solutions.", vi: "Họ sẽ chủ động tìm kiếm các giải pháp phần mềm mới." }
    },
    correctAnswer: "B",
    explanationEn: "An employee with low CSE will panic and doubt themselves because they lack deep belief in their own capabilities and worth.",
    explanationVi: "Người có CSE thấp sẽ hoảng loạn và nghi ngờ bản thân vì họ thiếu niềm tin sâu sắc vào năng lực và giá trị của chính mình.",
    relatedSectionId: "5.4.1",
    topic: "Core Self-Evaluation"
  },
  {
    id: "q527",
    chapter: 5,
    questionEn: "Self-monitoring refers to an individual's ability to:",
    questionVi: "Khả năng tự giám sát (Self-monitoring) đề cập đến khả năng của một cá nhân trong việc:",
    options: {
      A: { en: "Evaluate their own core worth.", vi: "Đánh giá giá trị cốt lõi của chính họ." },
      B: { en: "Adjust their behavior to external, situational factors.", vi: "Điều chỉnh hành vi của họ cho phù hợp với các yếu tố tình huống bên ngoài." },
      C: { en: "Identify opportunities and take initiative.", vi: "Nhận diện cơ hội và chủ động." },
      D: { en: "Maintain emotional distance from coworkers.", vi: "Duy trì khoảng cách cảm xúc với đồng nghiệp." }
    },
    correctAnswer: "B",
    explanationEn: "Self-monitoring is the ability to adjust one's behavior to external, situational factors.",
    explanationVi: "Self-monitoring là thước đo khả năng của một cá nhân trong việc tự điều chỉnh hành vi của mình sao cho phù hợp với các yếu tố tình huống hoặc môi trường bên ngoài.",
    relatedSectionId: "5.4.2",
    topic: "Self-Monitoring"
  },
  {
    id: "q528",
    chapter: 5,
    questionEn: "Why is high self-monitoring valuable in a workplace?",
    questionVi: "Tại sao khả năng tự giám sát cao lại có giá trị ở nơi làm việc?",
    options: {
      A: { en: "It explains behavioral flexibility and sensitivity to social cues.", vi: "Nó giải thích tính linh hoạt trong hành vi và sự nhạy bén với các tín hiệu xã hội." },
      B: { en: "It ensures the employee never changes their personality.", vi: "Nó đảm bảo nhân viên không bao giờ thay đổi tính cách của họ." },
      C: { en: "It guarantees high mathematical aptitude.", vi: "Nó đảm bảo khả năng tính toán cao." },
      D: { en: "It makes the employee immune to stress.", vi: "Nó làm cho nhân viên miễn nhiễm với căng thẳng." }
    },
    correctAnswer: "A",
    explanationEn: "High self-monitoring explains behavioral flexibility, showing why some people are highly sensitive to social cues and can adapt to different situations.",
    explanationVi: "Nó giải thích tính linh hoạt trong hành vi, cho thấy tại sao một số người cực kỳ nhạy bén với các tín hiệu xã hội và có thể 'nhập gia tùy tục'.",
    relatedSectionId: "5.4.2",
    topic: "Self-Monitoring"
  },
  {
    id: "q529",
    chapter: 5,
    questionEn: "Which personality trait is characterized by identifying opportunities, showing initiative, taking action, and persevering?",
    questionVi: "Đặc điểm tính cách nào được đặc trưng bởi việc nhận diện cơ hội, thể hiện sự chủ động, hành động và kiên trì?",
    options: {
      A: { en: "Core Self-Evaluation", vi: "Tự đánh giá cốt lõi" },
      B: { en: "Self-Monitoring", vi: "Khả năng tự giám sát" },
      C: { en: "Proactive Personality", vi: "Tính cách chủ động" },
      D: { en: "Narcissism", vi: "Sự ái kỷ" }
    },
    correctAnswer: "C",
    explanationEn: "Proactive personality describes individuals who identify opportunities, show initiative, take action, and persevere until meaningful change occurs.",
    explanationVi: "Tính cách chủ động (Proactive Personality) mô tả những người luôn biết cách nhận diện cơ hội, thể hiện sự chủ động, dám hành động và kiên trì bám đuổi.",
    relatedSectionId: "5.4.3",
    topic: "Proactive Personality"
  },
  {
    id: "q530",
    chapter: 5,
    questionEn: "How does a proactive personality benefit an organization?",
    questionVi: "Tính cách chủ động mang lại lợi ích gì cho tổ chức?",
    options: {
      A: { en: "They passively wait for orders.", vi: "Họ thụ động chờ đợi mệnh lệnh." },
      B: { en: "They act as 'seeds' for innovation and meaningful change.", vi: "Họ đóng vai trò là 'hạt giống' cho sự đổi mới và thay đổi có ý nghĩa." },
      C: { en: "They strictly follow outdated procedures.", vi: "Họ tuân thủ nghiêm ngặt các quy trình lỗi thời." },
      D: { en: "They manipulate others to gain power.", vi: "Họ thao túng người khác để giành quyền lực." }
    },
    correctAnswer: "B",
    explanationEn: "Proactive individuals help managers identify 'seeds' for innovation rather than just passively waiting for orders.",
    explanationVi: "Đặc điểm này giúp xác định những nhân tố 'hạt giống' mang lại sự đổi mới, thay vì những người chỉ biết thụ động chờ đợi mệnh lệnh.",
    relatedSectionId: "5.4.3",
    topic: "Proactive Personality"
  },
  {
    id: "q531",
    chapter: 5,
    questionEn: "An employee who independently finds a new software solution to fix an outdated reporting process is showing:",
    questionVi: "Một nhân viên độc lập tìm kiếm giải pháp phần mềm mới để khắc phục quy trình báo cáo lỗi thời đang thể hiện:",
    options: {
      A: { en: "High Machiavellianism", vi: "Tính thực dụng cao" },
      B: { en: "Low Core Self-Evaluation", vi: "Tự đánh giá cốt lõi thấp" },
      C: { en: "Proactive Personality", vi: "Tính cách chủ động" },
      D: { en: "Low Self-Monitoring", vi: "Khả năng tự giám sát thấp" }
    },
    correctAnswer: "C",
    explanationEn: "Taking initiative to find a solution and persevering to implement it is a classic example of a proactive personality.",
    explanationVi: "Chủ động tìm kiếm giải pháp và kiên trì áp dụng nó là ví dụ điển hình của tính cách chủ động (proactive personality).",
    relatedSectionId: "5.4.3",
    topic: "Proactive Personality"
  },
  {
    id: "q532",
    chapter: 5,
    questionEn: "Which trait helps managers identify employees who will not just passively wait for orders?",
    questionVi: "Đặc điểm nào giúp các nhà quản lý xác định những nhân viên sẽ không chỉ thụ động chờ đợi mệnh lệnh?",
    options: {
      A: { en: "Proactive Personality", vi: "Tính cách chủ động" },
      B: { en: "Self-Monitoring", vi: "Khả năng tự giám sát" },
      C: { en: "Agreeableness", vi: "Sự hòa đồng" },
      D: { en: "Conventional Type", vi: "Nhóm Quy củ" }
    },
    correctAnswer: "A",
    explanationEn: "Proactive personality helps identify individuals who take initiative rather than waiting for orders.",
    explanationVi: "Tính cách chủ động giúp xác định những người mang lại sự đổi mới, thay vì thụ động chờ đợi mệnh lệnh.",
    relatedSectionId: "5.4.3",
    topic: "Proactive Personality"
  },

  // --- 5.5 Situation Strength & TAT (8 questions) ---
  {
    id: "q533",
    chapter: 5,
    questionEn: "What does Situation Strength Theory propose?",
    questionVi: "Lý thuyết Sức mạnh Tình huống đề xuất điều gì?",
    options: {
      A: { en: "Personality always predicts behavior perfectly.", vi: "Tính cách luôn dự đoán hành vi một cách hoàn hảo." },
      B: { en: "The way personality translates into behavior depends on the strength of the situation.", vi: "Cách thức tính cách chuyển hóa thành hành vi phụ thuộc vào sức mạnh của tình huống." },
      C: { en: "Strong situations allow personality to be freely expressed.", vi: "Tình huống mạnh cho phép tính cách được bộc lộ tự do." },
      D: { en: "Weak situations suppress true personality.", vi: "Tình huống yếu đè nén tính cách thật." }
    },
    correctAnswer: "B",
    explanationEn: "Situation Strength Theory indicates that the way personality translates into behavior depends on the strength of the situation.",
    explanationVi: "Lý thuyết này chỉ ra rằng cách thức mà tính cách chuyển hóa thành hành vi phụ thuộc vào 'sức mạnh của tình huống'.",
    relatedSectionId: "5.5.1",
    topic: "Situation Strength Theory"
  },
  {
    id: "q534",
    chapter: 5,
    questionEn: "In a 'strong' situation (many strict rules), what happens to an employee's true personality?",
    questionVi: "Trong một tình huống 'mạnh' (nhiều quy tắc khắt khe), điều gì xảy ra với tính cách thật của nhân viên?",
    options: {
      A: { en: "It is freely expressed.", vi: "Nó được bộc lộ tự do." },
      B: { en: "It is suppressed to comply with rules.", vi: "Nó bị đè nén để tuân thủ quy định." },
      C: { en: "It becomes permanently changed.", vi: "Nó bị thay đổi vĩnh viễn." },
      D: { en: "It becomes more proactive.", vi: "Nó trở nên chủ động hơn." }
    },
    correctAnswer: "B",
    explanationEn: "In a strong situation, true personality is suppressed to comply with strict rules and norms.",
    explanationVi: "Trong một tình huống 'mạnh', tính cách thật sự của nhân viên sẽ bị đè nén để tuân thủ quy định.",
    relatedSectionId: "5.5.1",
    topic: "Situation Strength Theory"
  },
  {
    id: "q535",
    chapter: 5,
    questionEn: "Which of the following is NOT one of the 4 elements of Situation Strength?",
    questionVi: "Yếu tố nào sau đây KHÔNG phải là một trong 4 yếu tố của Sức mạnh Tình huống?",
    options: {
      A: { en: "Clarity", vi: "Sự rõ ràng" },
      B: { en: "Consistency", vi: "Sự nhất quán" },
      C: { en: "Constraints", vi: "Sự ràng buộc" },
      D: { en: "Competence", vi: "Sự tháo vát" }
    },
    correctAnswer: "D",
    explanationEn: "The 4 elements are Clarity, Consistency, Constraints, and Consequences. Competence is not one of them.",
    explanationVi: "4 yếu tố là Clarity, Consistency, Constraints, và Consequences. Competence (Sự tháo vát) không thuộc nhóm này.",
    relatedSectionId: "5.5.1",
    topic: "Situation Strength Theory"
  },
  {
    id: "q536",
    chapter: 5,
    questionEn: "What is the core idea of Trait Activation Theory (TAT)?",
    questionVi: "Ý tưởng cốt lõi của Lý thuyết Kích hoạt Đặc điểm (TAT) là gì?",
    options: {
      A: { en: "All traits are active at all times.", vi: "Tất cả các đặc điểm luôn hoạt động mọi lúc." },
      B: { en: "Certain situations or events 'activate' a specific personality trait more strongly than others.", vi: "Một số tình huống hoặc sự kiện nhất định 'kích hoạt' một đặc điểm tính cách cụ thể mạnh mẽ hơn các tình huống khác." },
      C: { en: "Traits can only be activated by financial rewards.", vi: "Các đặc điểm chỉ có thể được kích hoạt bằng phần thưởng tài chính." },
      D: { en: "Managers should suppress all trait activation.", vi: "Quản lý nên đè nén mọi sự kích hoạt đặc điểm." }
    },
    correctAnswer: "B",
    explanationEn: "TAT predicts that some situations, events, or interventions 'activate' a trait more than others.",
    explanationVi: "TAT dự đoán rằng có một số tình huống, sự kiện nhất định sẽ 'kích hoạt' một đặc điểm tính cách cụ thể trỗi dậy mạnh mẽ hơn.",
    relatedSectionId: "5.5.2",
    topic: "Trait Activation Theory"
  },
  {
    id: "q537",
    chapter: 5,
    questionEn: "According to TAT, a job requiring high detail orientation (like an Accountant) will immediately activate which trait?",
    questionVi: "Theo TAT, một công việc yêu cầu sự chú ý cao đến chi tiết (như Kế toán) sẽ lập tức kích hoạt đặc điểm nào?",
    options: {
      A: { en: "Extroversion", vi: "Sự hướng ngoại" },
      B: { en: "Openness", vi: "Sự cởi mở" },
      C: { en: "Conscientiousness", vi: "Sự tận tâm" },
      D: { en: "Narcissism", vi: "Sự ái kỷ" }
    },
    correctAnswer: "C",
    explanationEn: "Detail orientation required by accounting jobs strongly activates Conscientiousness.",
    explanationVi: "Những công việc yêu cầu sự chú ý đến chi tiết như Kế toán sẽ lập tức kích hoạt tính Tận tâm (Conscientiousness).",
    relatedSectionId: "5.5.2",
    topic: "Trait Activation Theory"
  },
  {
    id: "q538",
    chapter: 5,
    questionEn: "Jobs requiring innovation, such as an advertising writer or actor, activate which personality trait?",
    questionVi: "Các công việc đòi hỏi sự đổi mới, chẳng hạn như người viết quảng cáo hoặc diễn viên, kích hoạt đặc điểm tính cách nào?",
    options: {
      A: { en: "Openness", vi: "Sự cởi mở với trải nghiệm" },
      B: { en: "Agreeableness", vi: "Sự hòa đồng" },
      C: { en: "Conventional", vi: "Quy củ" },
      D: { en: "Machiavellianism", vi: "Tính thực dụng" }
    },
    correctAnswer: "A",
    explanationEn: "Innovation required in creative jobs activates the trait of Openness to experience.",
    explanationVi: "Những công việc đòi hỏi sự đổi mới sẽ kích hoạt đặc tính Cởi mở với trải nghiệm (Openness).",
    relatedSectionId: "5.5.2",
    topic: "Trait Activation Theory"
  },
  {
    id: "q539",
    chapter: 5,
    questionEn: "When managers adjust the work environment to be a 'strong' or 'weak' situation, what is their goal?",
    questionVi: "Khi các nhà quản lý điều chỉnh môi trường làm việc thành tình huống 'mạnh' hoặc 'yếu', mục tiêu của họ là gì?",
    options: {
      A: { en: "To confuse employees.", vi: "Để làm nhân viên bối rối." },
      B: { en: "To elicit desired behaviors and limit the appearance of bad traits.", vi: "Để khuyến khích các hành vi mong muốn và hạn chế sự xuất hiện của các nét tính cách tồi tệ." },
      C: { en: "To increase the turnover rate.", vi: "Để tăng tỷ lệ nghỉ việc." },
      D: { en: "To test the physical abilities of employees.", vi: "Để kiểm tra năng lực thể chất của nhân viên." }
    },
    correctAnswer: "B",
    explanationEn: "Managers adjust situations to elicit desired traits/behaviors and limit the appearance of bad ones.",
    explanationVi: "Việc điều chỉnh tình huống nhằm mục đích khuyến khích các đặc điểm tính cách/hành vi mong muốn và hạn chế sự xuất hiện của những nét tính cách tồi tệ.",
    relatedSectionId: "5.5.3",
    topic: "Implications for Managers"
  },
  {
    id: "q540",
    chapter: 5,
    questionEn: "What caution should managers keep in mind when altering situational strength?",
    questionVi: "Các nhà quản lý nên ghi nhớ sự thận trọng nào khi thay đổi sức mạnh tình huống?",
    options: {
      A: { en: "It is always completely effective.", vi: "Nó luôn luôn hoàn toàn hiệu quả." },
      B: { en: "It has no impact on personality.", vi: "Nó không có tác động đến tính cách." },
      C: { en: "It can sometimes bring unintended negative effects on employees.", vi: "Nó đôi khi có thể mang lại những tác dụng phụ không mong muốn đối với nhân viên." },
      D: { en: "It only works on executives.", vi: "Nó chỉ có tác dụng với các giám đốc điều hành." }
    },
    correctAnswer: "C",
    explanationEn: "Changing the situation to encourage or prevent behaviors can sometimes have unintended effects on employees.",
    explanationVi: "Việc thay đổi tình huống đôi khi có thể mang lại những tác dụng phụ không mong muốn (unintended effects) đối với nhân viên.",
    relatedSectionId: "5.5.3",
    topic: "Implications for Managers"
  },

  // --- 5.6 Intellectual and Physical Abilities (6 questions) ---
  {
    id: "q541",
    chapter: 5,
    questionEn: "How is 'Ability' defined in OB?",
    questionVi: "'Năng lực' (Ability) được định nghĩa như thế nào trong Hành vi Tổ chức?",
    options: {
      A: { en: "The potential to learn new skills in the future.", vi: "Tiềm năng học hỏi các kỹ năng mới trong tương lai." },
      B: { en: "An individual's current capacity to perform the various tasks in a job.", vi: "Công suất/khả năng hiện tại của một cá nhân để thực hiện các nhiệm vụ khác nhau trong một công việc." },
      C: { en: "The personality traits required for a job.", vi: "Các đặc điểm tính cách cần thiết cho một công việc." },
      D: { en: "The values an employee brings to the organization.", vi: "Các giá trị mà một nhân viên mang lại cho tổ chức." }
    },
    correctAnswer: "B",
    explanationEn: "Ability is an individual's current capacity to perform the various tasks in a job.",
    explanationVi: "Năng lực là công suất/khả năng hiện tại của một cá nhân để có thể thực hiện các nhiệm vụ khác nhau trong một công việc.",
    relatedSectionId: "5.6",
    topic: "Defining Ability"
  },
  {
    id: "q542",
    chapter: 5,
    questionEn: "Which intellectual ability is crucial for a plant manager to understand corporate HR policies?",
    questionVi: "Năng lực trí tuệ nào là rất quan trọng đối với một quản lý nhà máy để hiểu các chính sách nhân sự của tập đoàn?",
    options: {
      A: { en: "Number aptitude", vi: "Khả năng tính toán" },
      B: { en: "Spatial visualization", vi: "Tưởng tượng không gian" },
      C: { en: "Verbal comprehension", vi: "Đọc hiểu từ ngữ" },
      D: { en: "Memory", vi: "Trí nhớ" }
    },
    correctAnswer: "C",
    explanationEn: "Verbal comprehension is the ability to understand what is read or heard, necessary for reading policies.",
    explanationVi: "Đọc hiểu từ ngữ (Verbal comprehension) cần cho Quản lý nhà máy để đọc hiểu các chính sách nhân sự.",
    relatedSectionId: "5.6.1",
    topic: "Intellectual Abilities"
  },
  {
    id: "q543",
    chapter: 5,
    questionEn: "Spatial visualization is most essential for which of the following professions?",
    questionVi: "Tưởng tượng không gian (Spatial visualization) là cần thiết nhất cho nghề nghiệp nào sau đây?",
    options: {
      A: { en: "Accountant", vi: "Kế toán" },
      B: { en: "Interior designer", vi: "Nhà thiết kế nội thất" },
      C: { en: "Salesperson", vi: "Nhân viên bán hàng" },
      D: { en: "Market researcher", vi: "Người nghiên cứu thị trường" }
    },
    correctAnswer: "B",
    explanationEn: "Spatial visualization is the ability to imagine how an object would look if its position in space were changed, highly needed for interior designers.",
    explanationVi: "Tưởng tượng không gian rất cần cho một Nhà thiết kế nội thất để hình dung không gian.",
    relatedSectionId: "5.6.1",
    topic: "Intellectual Abilities"
  },
  {
    id: "q544",
    chapter: 5,
    questionEn: "What are the three main categories of the 9 basic physical abilities?",
    questionVi: "Ba danh mục chính của 9 năng lực thể chất cơ bản là gì?",
    options: {
      A: { en: "Strength, Flexibility, and Other Factors", vi: "Sức mạnh, Sự dẻo dai, và Các yếu tố khác" },
      B: { en: "Speed, Agility, and Endurance", vi: "Tốc độ, Sự nhanh nhẹn, và Sức chịu đựng" },
      C: { en: "Dynamic, Static, and Explosive", vi: "Động, Tĩnh, và Bùng nổ" },
      D: { en: "Coordination, Balance, and Stamina", vi: "Phối hợp, Thăng bằng, và Sức bền" }
    },
    correctAnswer: "A",
    explanationEn: "The 9 physical abilities are grouped into Strength Factors, Flexibility Factors, and Other Factors.",
    explanationVi: "9 năng lực thể chất được chia làm 3 nhóm: Nhóm sức mạnh, Nhóm dẻo dai, và Các yếu tố khác.",
    relatedSectionId: "5.6.2",
    topic: "Physical Abilities"
  },
  {
    id: "q545",
    chapter: 5,
    questionEn: "Why are ability tests considered the best predictors of job performance?",
    questionVi: "Tại sao các bài kiểm tra năng lực được coi là yếu tố dự đoán tốt nhất về hiệu suất công việc?",
    options: {
      A: { en: "Because they measure personality.", vi: "Vì chúng đo lường tính cách." },
      B: { en: "Because they directly assess the current capacity to perform required tasks.", vi: "Vì chúng đánh giá trực tiếp khả năng hiện tại để thực hiện các nhiệm vụ được yêu cầu." },
      C: { en: "Because they are cheap.", vi: "Vì chúng rẻ." },
      D: { en: "Because they measure values.", vi: "Vì chúng đo lường các giá trị." }
    },
    correctAnswer: "B",
    explanationEn: "Ability tests evaluate the actual capacity to perform tasks, making them the best predictors of job performance.",
    explanationVi: "Đánh giá năng lực thường là yếu tố dự đoán tốt nhất về kết quả làm việc vì nó đo lường khả năng thực tế.",
    relatedSectionId: "5.6.3",
    topic: "Implications for Managers"
  },
  {
    id: "q546",
    chapter: 5,
    questionEn: "Under what condition should a manager use intellectual or physical ability tests in hiring?",
    questionVi: "Trong điều kiện nào một nhà quản lý nên sử dụng các bài kiểm tra năng lực trí tuệ hoặc thể chất trong tuyển dụng?",
    options: {
      A: { en: "Whenever they want to filter out candidates.", vi: "Bất cứ khi nào họ muốn lọc ứng viên." },
      B: { en: "ONLY if those abilities are necessary and required for the job.", vi: "CHỈ KHI những năng lực đó là điều kiện bắt buộc và thực sự cần thiết cho công việc." },
      C: { en: "For all executive positions.", vi: "Cho tất cả các vị trí điều hành." },
      D: { en: "To avoid paying higher salaries.", vi: "Để tránh phải trả lương cao hơn." }
    },
    correctAnswer: "B",
    explanationEn: "Managers must be careful of disparate impact and only test abilities if they are strictly necessary and required for the job.",
    explanationVi: "Chỉ được phép đánh giá ứng viên về năng lực NẾU những năng lực đó là điều kiện bắt buộc và thực sự cần thiết cho vị trí công việc đó.",
    relatedSectionId: "5.6.3",
    topic: "Implications for Managers"
  },

  // --- 5.7 Values (4 questions) ---
  {
    id: "q547",
    chapter: 5,
    questionEn: "How are 'Values' defined in OB?",
    questionVi: "'Giá trị' (Values) được định nghĩa như thế nào trong OB?",
    options: {
      A: { en: "Temporary feelings about a job.", vi: "Cảm xúc tạm thời về một công việc." },
      B: { en: "Basic convictions about what is right, good, or desirable.", vi: "Những niềm tin cơ bản về việc điều gì là đúng, là tốt, hoặc đáng khao khát." },
      C: { en: "The monetary worth of an employee.", vi: "Giá trị tiền tệ của một nhân viên." },
      D: { en: "The physical strength of a person.", vi: "Sức mạnh thể chất của một người." }
    },
    correctAnswer: "B",
    explanationEn: "Values represent basic convictions that a specific mode of conduct or end-state is personally or socially preferable.",
    explanationVi: "Giá trị là những niềm tin cơ bản về việc điều gì là đúng, là tốt, hoặc đáng khao khát.",
    relatedSectionId: "5.7",
    topic: "Defining Values"
  },
  {
    id: "q548",
    chapter: 5,
    questionEn: "What are Terminal Values?",
    questionVi: "Giá trị đích đến (Terminal Values) là gì?",
    options: {
      A: { en: "Preferred modes of behavior.", vi: "Những phương thức hành vi được ưu tiên." },
      B: { en: "Desirable end-states of existence.", vi: "Những trạng thái tồn tại mong muốn cuối cùng." },
      C: { en: "Values that change daily.", vi: "Những giá trị thay đổi hàng ngày." },
      D: { en: "Values related only to physical health.", vi: "Những giá trị chỉ liên quan đến sức khỏe thể chất." }
    },
    correctAnswer: "B",
    explanationEn: "Terminal values are desirable end-states of existence; the goals a person wants to achieve.",
    explanationVi: "Terminal values là những 'trạng thái tồn tại mong muốn cuối cùng', là cái đích cuối cùng mà một người khao khát đạt được.",
    relatedSectionId: "5.7.1",
    topic: "Terminal Values"
  },
  {
    id: "q549",
    chapter: 5,
    questionEn: "What are Instrumental Values?",
    questionVi: "Giá trị công cụ (Instrumental Values) là gì?",
    options: {
      A: { en: "The ultimate goals in life.", vi: "Những mục tiêu tối thượng trong cuộc sống." },
      B: { en: "Preferred modes of behavior or means to achieve terminal values.", vi: "Những phương thức hành vi được ưu tiên hoặc phương tiện để đạt được giá trị đích đến." },
      C: { en: "The tools used in a factory.", vi: "Các công cụ được sử dụng trong nhà máy." },
      D: { en: "Values that are no longer relevant.", vi: "Những giá trị không còn phù hợp." }
    },
    correctAnswer: "B",
    explanationEn: "Instrumental values are preferable modes of behavior, or means of achieving one's terminal values.",
    explanationVi: "Instrumental values là những phương thức hành vi được ưu tiên hoặc các phương tiện, cách thức để giúp đạt được 'giá trị đích đến'.",
    relatedSectionId: "5.7.2",
    topic: "Instrumental Values"
  },
  {
    id: "q550",
    chapter: 5,
    questionEn: "If 'freedom and independence' is a Terminal Value, which of the following is an Instrumental Value?",
    questionVi: "Nếu 'tự do và độc lập' là một Giá trị đích đến, điều nào sau đây là Giá trị công cụ?",
    options: {
      A: { en: "A comfortable life", vi: "Một cuộc sống thoải mái" },
      B: { en: "World peace", vi: "Hòa bình thế giới" },
      C: { en: "Being self-reliant and hard-working", vi: "Tự lực và làm việc chăm chỉ" },
      D: { en: "Happiness", vi: "Hạnh phúc" }
    },
    correctAnswer: "C",
    explanationEn: "Being self-reliant and hard-working is a behavior (instrumental) used to achieve the end goal of freedom (terminal).",
    explanationVi: "Tự lực và làm việc chăm chỉ là cách hành xử (công cụ) để đạt được đích đến là sự tự do.",
    relatedSectionId: "5.7.3",
    topic: "Values"
  },

  // --- CHAPTER 3: Attitudes and Job Satisfaction (50 questions) ---
  {
    id: "q301",
    chapter: 3,
    questionEn: "What is an 'Attitude' in the context of OB?",
    questionVi: "Thái độ (Attitude) là gì trong bối cảnh OB?",
    options: {
      A: { en: "A physical reaction to stress.", vi: "Một phản ứng vật lý đối với căng thẳng." },
      B: { en: "Evaluative statements or judgments concerning objects, people, or events.", vi: "Các tuyên bố hoặc phán xét mang tính đánh giá liên quan đến các đối tượng, con người hoặc sự kiện." },
      C: { en: "A person's innate personality trait.", vi: "Một đặc điểm tính cách bẩm sinh của một người." },
      D: { en: "The level of intelligence of an individual.", vi: "Mức độ thông minh của một cá nhân." }
    },
    correctAnswer: "B",
    explanationEn: "Attitudes are evaluative statements—either favorable or unfavorable—about objects, people, or events.",
    explanationVi: "Thái độ là những đánh giá, phán xét (tích cực hoặc tiêu cực) về một đối tượng, con người hay sự kiện.",
    relatedSectionId: "3.1",
    topic: "Definition of Attitude"
  },
  {
    id: "q302",
    chapter: 3,
    questionEn: "Which component of an attitude involves a person's belief or description of the way things are?",
    questionVi: "Thành phần nào của thái độ liên quan đến niềm tin hoặc sự mô tả của một người về bản chất sự việc?",
    options: {
      A: { en: "Affective component", vi: "Thành phần cảm xúc" },
      B: { en: "Behavioral component", vi: "Thành phần hành vi" },
      C: { en: "Cognitive component", vi: "Thành phần nhận thức" },
      D: { en: "Physical component", vi: "Thành phần vật lý" }
    },
    correctAnswer: "C",
    explanationEn: "The cognitive component is the opinion or belief segment of an attitude.",
    explanationVi: "Thành phần nhận thức (Cognitive) bao gồm những suy nghĩ, niềm tin hoặc sự nhìn nhận bằng lý trí về một sự thật.",
    relatedSectionId: "3.1.1",
    topic: "Cognitive Component"
  },
  {
    id: "q303",
    chapter: 3,
    questionEn: "The statement 'I am angry because my boss is unfair' represents which component of an attitude?",
    questionVi: "Câu nói 'Tôi tức giận vì sếp của tôi không công bằng' đại diện cho thành phần nào của thái độ?",
    options: {
      A: { en: "Cognitive", vi: "Nhận thức" },
      B: { en: "Affective", vi: "Cảm xúc" },
      C: { en: "Behavioral", vi: "Hành vi" },
      D: { en: "Intentional", vi: "Ý định" }
    },
    correctAnswer: "B",
    explanationEn: "The affective component is the emotional or feeling segment of an attitude.",
    explanationVi: "Thành phần cảm xúc (Affective) là phần cảm giác (buồn, vui, tức giận...) nảy sinh từ sự đánh giá.",
    relatedSectionId: "3.1.2",
    topic: "Affective Component"
  },
  {
    id: "q304",
    chapter: 3,
    questionEn: "Which component of an attitude describes an intention to behave in a certain way toward someone or something?",
    questionVi: "Thành phần nào của thái độ mô tả ý định hành động theo một cách nhất định đối với ai đó hoặc điều gì đó?",
    options: {
      A: { en: "Cognitive", vi: "Nhận thức" },
      B: { en: "Affective", vi: "Cảm xúc" },
      C: { en: "Behavioral", vi: "Hành vi" },
      D: { en: "Rational", vi: "Lý trí" }
    },
    correctAnswer: "C",
    explanationEn: "The behavioral component describes an intention to behave in a certain way.",
    explanationVi: "Thành phần hành vi (Behavioral) là ý định hành động theo một hướng nhất định.",
    relatedSectionId: "3.1.3",
    topic: "Behavioral Component"
  },
  {
    id: "q305",
    chapter: 3,
    questionEn: "Thinking 'My pay is low' is an example of which attitude component?",
    questionVi: "Suy nghĩ 'Lương của tôi thấp' là ví dụ của thành phần thái độ nào?",
    options: {
      A: { en: "Affective", vi: "Cảm xúc" },
      B: { en: "Cognitive", vi: "Nhận thức" },
      C: { en: "Behavioral", vi: "Hành vi" },
      D: { en: "Social", vi: "Xã hội" }
    },
    correctAnswer: "B",
    explanationEn: "Thinking or evaluating a fact is part of the cognitive component.",
    explanationVi: "Việc đánh giá một sự thật (lương thấp) thuộc về phần nhận thức.",
    relatedSectionId: "3.1.1",
    topic: "Cognitive Component"
  },
  {
    id: "q306",
    chapter: 3,
    questionEn: "Feeling 'I am excited about my new project' is an example of which attitude component?",
    questionVi: "Cảm thấy 'Tôi rất hào hứng với dự án mới của mình' là ví dụ của thành phần thái độ nào?",
    options: {
      A: { en: "Cognitive", vi: "Nhận thức" },
      B: { en: "Behavioral", vi: "Hành vi" },
      C: { en: "Affective", vi: "Cảm xúc" },
      D: { en: "Environmental", vi: "Môi trường" }
    },
    correctAnswer: "C",
    explanationEn: "Feelings and emotions are part of the affective component.",
    explanationVi: "Cảm xúc hào hứng là biểu hiện của thành phần cảm xúc.",
    relatedSectionId: "3.1.2",
    topic: "Affective Component"
  },
  {
    id: "q307",
    chapter: 3,
    questionEn: "Deciding to 'look for a new job next week' is an example of which attitude component?",
    questionVi: "Quyết định 'tìm kiếm một công việc mới vào tuần tới' là ví dụ của thành phần thái độ nào?",
    options: {
      A: { en: "Cognitive", vi: "Nhận thức" },
      B: { en: "Affective", vi: "Cảm xúc" },
      C: { en: "Behavioral", vi: "Hành vi" },
      D: { en: "Strategic", vi: "Chiến lược" }
    },
    correctAnswer: "C",
    explanationEn: "An intention to act (looking for a job) is part of the behavioral component.",
    explanationVi: "Ý định thực hiện một hành động (tìm việc) thuộc về thành phần hành vi.",
    relatedSectionId: "3.1.3",
    topic: "Behavioral Component"
  },
  {
    id: "q308",
    chapter: 3,
    questionEn: "What do individuals generally seek between their attitudes and their behavior?",
    questionVi: "Cá nhân thường tìm kiếm điều gì giữa thái độ và hành vi của họ?",
    options: {
      A: { en: "Conflict", vi: "Sự xung đột" },
      B: { en: "Consistency", vi: "Sự nhất quán" },
      C: { en: "Diversity", vi: "Sự đa dạng" },
      D: { en: "Randomness", vi: "Sự ngẫu nhiên" }
    },
    correctAnswer: "B",
    explanationEn: "Research has concluded that people seek consistency among their attitudes and between their attitudes and their behavior.",
    explanationVi: "Con người luôn tìm kiếm sự nhất quán giữa các thái độ với nhau và với hành vi thực tế.",
    relatedSectionId: "3.2",
    topic: "Attitude-Behavior Consistency"
  },
  {
    id: "q309",
    chapter: 3,
    questionEn: "What is 'Cognitive Dissonance'?",
    questionVi: "Sự bất hòa nhận thức (Cognitive Dissonance) là gì?",
    options: {
      A: { en: "A state of perfect mental balance.", vi: "Một trạng thái cân bằng tâm trí hoàn hảo." },
      B: { en: "Any incompatibility between two or more attitudes or between behavior and attitudes.", vi: "Bất kỳ sự không tương thích nào giữa hai hoặc nhiều thái độ hoặc giữa hành vi và thái độ." },
      C: { en: "The ability to learn new things quickly.", vi: "Khả năng học hỏi những điều mới nhanh chóng." },
      D: { en: "A type of memory loss.", vi: "Một loại mất trí nhớ." }
    },
    correctAnswer: "B",
    explanationEn: "Cognitive dissonance is any incompatibility between two or more attitudes or between behavior and attitudes.",
    explanationVi: "Sự bất hòa nhận thức là cảm giác khó chịu khi thái độ và hành vi không tương thích với nhau.",
    relatedSectionId: "3.2.1",
    topic: "Cognitive Dissonance"
  },
  {
    id: "q310",
    chapter: 3,
    questionEn: "The desire to reduce cognitive dissonance depends on which factor?",
    questionVi: "Khao khát giảm bớt sự bất hòa nhận thức phụ thuộc vào yếu tố nào?",
    options: {
      A: { en: "The weather conditions.", vi: "Điều kiện thời tiết." },
      B: { en: "The importance of the elements creating it.", vi: "Tầm quan trọng của các yếu tố tạo ra nó." },
      C: { en: "The age of the individual.", vi: "Tuổi tác của cá nhân." },
      D: { en: "The time of day.", vi: "Thời gian trong ngày." }
    },
    correctAnswer: "B",
    explanationEn: "The desire to reduce dissonance depends on the importance of the elements, influence, and rewards.",
    explanationVi: "Mức độ khao khát giảm sự bất hòa phụ thuộc vào tầm quan trọng của thái độ/hành vi đó.",
    relatedSectionId: "3.2.1",
    topic: "Reducing Dissonance"
  },
  {
    id: "q311",
    chapter: 3,
    questionEn: "If an individual feels they have no choice but to behave in a way that contradicts their attitude, their dissonance will likely be:",
    questionVi: "Nếu một cá nhân cảm thấy họ không có lựa chọn nào khác ngoài việc hành động trái với thái độ của mình, sự bất hòa của họ có khả năng sẽ:",
    options: {
      A: { en: "Higher", vi: "Cao hơn" },
      B: { en: "Lower", vi: "Thấp hơn" },
      C: { en: "Unchanged", vi: "Không đổi" },
      D: { en: "Eliminated", vi: "Bị loại bỏ hoàn toàn" }
    },
    correctAnswer: "B",
    explanationEn: "Dissonance is lower when the individual believes the behavior is forced (low individual influence).",
    explanationVi: "Sự bất hòa sẽ thấp hơn nếu cá nhân cảm thấy mình bị ép buộc (mức độ kiểm soát thấp).",
    relatedSectionId: "3.2.1",
    topic: "Reducing Dissonance"
  },
  {
    id: "q312",
    chapter: 3,
    questionEn: "How do 'Rewards' affect cognitive dissonance?",
    questionVi: "Phần thưởng (Rewards) ảnh hưởng thế nào đến sự bất hòa nhận thức?",
    options: {
      A: { en: "They always increase dissonance.", vi: "Chúng luôn làm tăng sự bất hòa." },
      B: { en: "High rewards accompanying high dissonance tend to reduce the tension.", vi: "Phần thưởng cao đi kèm với sự bất hòa cao có xu hướng làm giảm căng thẳng." },
      C: { en: "They have no effect on dissonance.", vi: "Chúng không có tác dụng gì đối với sự bất hòa." },
      D: { en: "They make the individual more angry.", vi: "Chúng làm cho cá nhân tức giận hơn." }
    },
    correctAnswer: "B",
    explanationEn: "High rewards tend to reduce the tension inherent in dissonance.",
    explanationVi: "Phần thưởng lớn giúp cá nhân dễ dàng chấp nhận và biện minh cho hành vi trái với thái độ, từ đó giảm bất hòa.",
    relatedSectionId: "3.2.1",
    topic: "Reducing Dissonance"
  },
  {
    id: "q313",
    chapter: 3,
    questionEn: "Which moderating variable suggests that attitudes we hold strongly are more likely to predict behavior?",
    questionVi: "Biến điều tiết nào cho thấy những thái độ mà chúng ta giữ vững chắc có nhiều khả năng dự đoán hành vi hơn?",
    options: {
      A: { en: "Social pressures", vi: "Áp lực xã hội" },
      B: { en: "Attitude's importance", vi: "Tầm quan trọng của thái độ" },
      C: { en: "Accessibility", vi: "Mức độ dễ tiếp cận" },
      D: { en: "Direct experience", vi: "Trải nghiệm trực tiếp" }
    },
    correctAnswer: "B",
    explanationEn: "Important attitudes reflect fundamental values and show a strong relationship to behavior.",
    explanationVi: "Thái độ càng quan trọng với một người thì càng tác động mạnh đến hành vi.",
    relatedSectionId: "3.2.2",
    topic: "Moderating Variables"
  },
  {
    id: "q314",
    chapter: 3,
    questionEn: "Attitudes formed through ________ are stronger predictors of behavior.",
    questionVi: "Thái độ được hình thành thông qua ________ là những yếu tố dự đoán hành vi mạnh mẽ hơn.",
    options: {
      A: { en: "Reading books", vi: "Đọc sách" },
      B: { en: "Direct experience", vi: "Trải nghiệm trực tiếp" },
      C: { en: "Watching TV", vi: "Xem TV" },
      D: { en: "Hearing rumors", vi: "Nghe tin đồn" }
    },
    correctAnswer: "B",
    explanationEn: "The attitude-behavior relationship is much stronger if an attitude refers to something with which the person has direct personal experience.",
    explanationVi: "Mối quan hệ giữa thái độ và hành vi sẽ mạnh mẽ hơn nhiều nếu cá nhân đã có trải nghiệm trực tiếp.",
    relatedSectionId: "3.2.2",
    topic: "Moderating Variables"
  },
  {
    id: "q315",
    chapter: 3,
    questionEn: "What is 'Job Satisfaction'?",
    questionVi: "Sự hài lòng với công việc (Job Satisfaction) là gì?",
    options: {
      A: { en: "The amount of money an employee earns.", vi: "Số tiền mà một nhân viên kiếm được." },
      B: { en: "A positive feeling about a job resulting from an evaluation of its characteristics.", vi: "Một cảm xúc tích cực về công việc có được từ việc đánh giá các đặc điểm của nó." },
      C: { en: "The number of hours an employee works.", vi: "Số giờ một nhân viên làm việc." },
      D: { en: "The physical location of the office.", vi: "Vị trí vật lý của văn phòng." }
    },
    correctAnswer: "B",
    explanationEn: "Job satisfaction is a positive feeling about a job resulting from an evaluation of its characteristics.",
    explanationVi: "Sự hài lòng với công việc là một cảm xúc tích cực sau khi đánh giá các đặc điểm của công việc đó.",
    relatedSectionId: "3.3.1",
    topic: "Job Satisfaction"
  },
  {
    id: "q316",
    chapter: 3,
    questionEn: "Which attitude measures the degree to which people identify psychologically with their jobs?",
    questionVi: "Thái độ nào đo lường mức độ mà mọi người đồng nhất về mặt tâm lý với công việc của họ?",
    options: {
      A: { en: "Organizational Commitment", vi: "Cam kết tổ chức" },
      B: { en: "Job Involvement", vi: "Sự gắn bó với công việc" },
      C: { en: "Perceived Organizational Support", vi: "Nhận thức sự hỗ trợ của tổ chức" },
      D: { en: "Employee Engagement", vi: "Sự gắn kết của nhân viên" }
    },
    correctAnswer: "B",
    explanationEn: "Job involvement measures the degree to which people identify psychologically with their jobs.",
    explanationVi: "Job Involvement là mức độ một người đồng nhất bản thân với công việc và coi hiệu suất cao là thước đo giá trị bản thân.",
    relatedSectionId: "3.3.2",
    topic: "Job Involvement"
  },
  {
    id: "q317",
    chapter: 3,
    questionEn: "What is 'Psychological Empowerment'?",
    questionVi: "Trao quyền tâm lý (Psychological Empowerment) là gì?",
    options: {
      A: { en: "Giving employees more physical strength.", vi: "Cung cấp cho nhân viên nhiều sức mạnh thể chất hơn." },
      B: { en: "Employees' beliefs in the degree to which they influence their work environment and their job meaningfulness.", vi: "Niềm tin của nhân viên về mức độ họ ảnh hưởng đến môi trường làm việc và ý nghĩa công việc của họ." },
      C: { en: "The process of firing unproductive workers.", vi: "Quá trình sa thải những công nhân không năng suất." },
      D: { en: "Increasing the salary of all employees.", vi: "Tăng lương cho tất cả nhân viên." }
    },
    correctAnswer: "B",
    explanationEn: "Psychological empowerment is employees' belief in the degree to which they influence their work environment, their competence, and their job meaningfulness.",
    explanationVi: "Psychological Empowerment là niềm tin của nhân viên rằng họ có quyền tự chủ, có năng lực và công việc có ý nghĩa.",
    relatedSectionId: "3.3.2",
    topic: "Psychological Empowerment"
  },
  {
    id: "q318",
    chapter: 3,
    questionEn: "When an employee identifies with a particular organization and its goals, it is called:",
    questionVi: "Khi một nhân viên đồng nhất với một tổ chức cụ thể và các mục tiêu của nó, điều đó được gọi là:",
    options: {
      A: { en: "Job Satisfaction", vi: "Sự hài lòng với công việc" },
      B: { en: "Organizational Commitment", vi: "Sự cam kết với tổ chức" },
      C: { en: "Job Involvement", vi: "Sự gắn bó với công việc" },
      D: { en: "Self-worth", vi: "Giá trị bản thân" }
    },
    correctAnswer: "B",
    explanationEn: "Organizational commitment is the degree to which an employee identifies with a particular organization and its goals.",
    explanationVi: "Organizational Commitment là sự đồng nhất với một tổ chức cụ thể, đồng tình với các mục tiêu và mong muốn gắn bó với nó.",
    relatedSectionId: "3.3.3",
    topic: "Organizational Commitment"
  },
  {
    id: "q319",
    chapter: 3,
    questionEn: "How does Organizational Commitment differ from Job Satisfaction?",
    questionVi: "Sự cam kết với tổ chức khác với Sự hài lòng với công việc như thế nào?",
    options: {
      A: { en: "Commitment is about liking the tasks, while satisfaction is about loyalty.", vi: "Cam kết là về việc thích các nhiệm vụ, trong khi hài lòng là về lòng trung thành." },
      B: { en: "Commitment involves 'loyalty' to the company, even if dissatisfied with the job.", vi: "Cam kết liên quan đến 'lòng trung thành' với công ty, ngay cả khi không hài lòng với công việc." },
      C: { en: "There is no difference between them.", vi: "Không có sự khác biệt giữa chúng." },
      D: { en: "Satisfaction is always higher than commitment.", vi: "Sự hài lòng luôn cao hơn sự cam kết." }
    },
    correctAnswer: "B",
    explanationEn: "Commitment is about loyalty; a committed employee may stay even if they are currently dissatisfied.",
    explanationVi: "Cam kết mang tính 'lòng trung thành'. Người có cam kết cao dù đang chán việc vẫn ít khi bỏ việc.",
    relatedSectionId: "3.3.3",
    topic: "Organizational Commitment"
  },
  {
    id: "q320",
    chapter: 3,
    questionEn: "What is 'Perceived Organizational Support' (POS)?",
    questionVi: "Nhận thức về sự hỗ trợ của tổ chức (POS) là gì?",
    options: {
      A: { en: "The physical support provided by office furniture.", vi: "Sự hỗ trợ vật lý được cung cấp bởi nội thất văn phòng." },
      B: { en: "The degree to which employees believe an organization values their contribution and cares about their well-being.", vi: "Mức độ nhân viên tin rằng tổ chức trân trọng đóng góp của họ và quan tâm đến phúc lợi của họ." },
      C: { en: "The amount of financial aid a company gives to charities.", vi: "Số tiền hỗ trợ tài chính mà một công ty dành cho các tổ chức từ thiện." },
      D: { en: "The technical support provided by the IT department.", vi: "Sự hỗ trợ kỹ thuật được cung cấp bởi bộ phận IT." }
    },
    correctAnswer: "B",
    explanationEn: "POS is the degree to which employees believe the organization values their contribution and cares about their well-being.",
    explanationVi: "POS là mức độ nhân viên tin rằng công ty trân trọng những đóng góp của họ và quan tâm đến phúc lợi/sức khỏe của họ.",
    relatedSectionId: "3.3.4",
    topic: "POS"
  },
  {
    id: "q321",
    chapter: 3,
    questionEn: "In which type of culture is POS typically more important?",
    questionVi: "Trong loại hình văn hóa nào thì POS thường quan trọng hơn?",
    options: {
      A: { en: "High power distance cultures", vi: "Văn hóa có khoảng cách quyền lực cao" },
      B: { en: "Low power distance cultures", vi: "Văn hóa có khoảng cách quyền lực thấp" },
      C: { en: "Cultures with no power structure", vi: "Văn hóa không có cấu trúc quyền lực" },
      D: { en: "Cultures that value only money", vi: "Văn hóa chỉ coi trọng tiền bạc" }
    },
    correctAnswer: "B",
    explanationEn: "POS is especially important in countries with lower power distance.",
    explanationVi: "Khái niệm POS đặc biệt quan trọng ở các quốc gia có khoảng cách quyền lực thấp (lower power distance).",
    relatedSectionId: "3.3.4",
    topic: "POS"
  },
  {
    id: "q322",
    chapter: 3,
    questionEn: "What is 'Employee Engagement'?",
    questionVi: "Sự gắn kết của nhân viên (Employee Engagement) là gì?",
    options: {
      A: { en: "The process of getting married to a co-worker.", vi: "Quá trình kết hôn với một đồng nghiệp." },
      B: { en: "An individual's involvement with, satisfaction with, and enthusiasm for the work they do.", vi: "Sự tham gia, hài lòng và nhiệt huyết của một cá nhân đối với công việc họ làm." },
      C: { en: "The legal contract between an employee and employer.", vi: "Hợp đồng pháp lý giữa nhân viên và người sử dụng lao động." },
      D: { en: "The number of meetings an employee attends.", vi: "Số lượng cuộc họp mà một nhân viên tham dự." }
    },
    correctAnswer: "B",
    explanationEn: "Employee engagement is an individual's involvement with, satisfaction with, and enthusiasm for the work they do.",
    explanationVi: "Employee Engagement là sự tham gia, sự hài lòng và lòng nhiệt huyết/đam mê của cá nhân đối với công việc và công ty.",
    relatedSectionId: "3.3.5",
    topic: "Employee Engagement"
  },
  {
    id: "q323",
    chapter: 3,
    questionEn: "What characterizes 'disengaged' employees?",
    questionVi: "Đặc điểm của những nhân viên 'không gắn kết' (disengaged) là gì?",
    options: {
      A: { en: "They are highly productive and creative.", vi: "Họ rất năng suất và sáng tạo." },
      B: { en: "They put time but not energy or attention into their work.", vi: "Họ dành thời gian nhưng không dành năng lượng hay sự chú ý vào công việc." },
      C: { en: "They always volunteer for extra tasks.", vi: "Họ luôn tình nguyện làm thêm các nhiệm vụ." },
      D: { en: "They are the most loyal members of the team.", vi: "Họ là những thành viên trung thành nhất của nhóm." }
    },
    correctAnswer: "B",
    explanationEn: "Disengaged employees put in time but not energy or attention into their work; they essentially 'check out'.",
    explanationVi: "Nhân viên disengaged làm việc kiểu đối phó, vác xác đến công ty cho đủ giờ nhưng không bỏ năng lượng hay sự chú ý vào công việc.",
    relatedSectionId: "3.3.5",
    topic: "Employee Engagement"
  },
  {
    id: "q324",
    chapter: 3,
    questionEn: "What is 'Organizational Identification'?",
    questionVi: "Sự nhận diện với tổ chức (Organizational Identification) là gì?",
    options: {
      A: { en: "The process of getting a company ID card.", vi: "Quá trình lấy thẻ ID của công ty." },
      B: { en: "The degree to which employees define themselves by the same characteristics that define the organization.", vi: "Mức độ mà nhân viên tự định nghĩa bản thân bằng chính các đặc điểm định nghĩa tổ chức." },
      C: { en: "Learning the names of all the managers.", vi: "Học tên của tất cả các nhà quản lý." },
      D: { en: "Wearing the company uniform every day.", vi: "Mặc đồng phục công ty mỗi ngày." }
    },
    correctAnswer: "B",
    explanationEn: "Organizational identification is when employees define themselves by the characteristics of the organization.",
    explanationVi: "Organizational Identification là mức độ nhân viên dùng chính các đặc điểm của tổ chức để định nghĩa bản thân mình.",
    relatedSectionId: "3.3.6",
    topic: "Organizational Identification"
  },
  {
    id: "q325",
    chapter: 3,
    questionEn: "The 'single global rating' method for measuring job satisfaction involves:",
    questionVi: "Phương pháp 'đánh giá tổng thể' để đo lường sự hài lòng với công việc bao gồm:",
    options: {
      A: { en: "Asking many detailed questions about different tasks.", vi: "Đặt nhiều câu hỏi chi tiết về các nhiệm vụ khác nhau." },
      B: { en: "Asking one question like 'All things considered, how satisfied are you with your job?'.", vi: "Đặt một câu hỏi như 'Xét trên mọi phương diện, bạn hài lòng với công việc của mình ở mức độ nào?'." },
      C: { en: "Observing employees while they work.", vi: "Quan sát nhân viên trong khi họ làm việc." },
      D: { en: "Interviewing the employee's family members.", vi: "Phỏng vấn các thành viên gia đình của nhân viên." }
    },
    correctAnswer: "B",
    explanationEn: "The single global rating is a response to one question, such as 'All things considered, how satisfied are you with your job?'.",
    explanationVi: "Phương pháp này vô cùng đơn giản, chỉ yêu cầu nhân viên trả lời đúng một câu hỏi duy nhất về mức độ hài lòng tổng thể.",
    relatedSectionId: "3.4.1",
    topic: "Measuring Job Satisfaction"
  },
  {
    id: "q326",
    chapter: 3,
    questionEn: "The 'summation of job facets' method for measuring job satisfaction:",
    questionVi: "Phương pháp 'tổng hợp các khía cạnh công việc' để đo lường sự hài lòng với công việc:",
    options: {
      A: { en: "Is simpler than the single global rating.", vi: "Đơn giản hơn so với đánh giá tổng thể." },
      B: { en: "Identifies key elements of a job and asks for an employee's feelings about each.", vi: "Xác định các yếu tố cốt lõi của công việc và hỏi về cảm nhận của nhân viên đối với từng yếu tố." },
      C: { en: "Only focuses on the salary.", vi: "Chỉ tập trung vào tiền lương." },
      D: { en: "Is rarely used by researchers.", vi: "Hiếm khi được sử dụng bởi các nhà nghiên cứu." }
    },
    correctAnswer: "B",
    explanationEn: "The summation of job facets identifies key elements in a job and asks for the employee's feelings about each.",
    explanationVi: "Phương pháp này chia công việc ra thành nhiều khía cạnh cốt lõi (lương, sếp, đồng nghiệp...) và hỏi ý kiến nhân viên về từng phần.",
    relatedSectionId: "3.4.2",
    topic: "Measuring Job Satisfaction"
  },
  {
    id: "q327",
    chapter: 3,
    questionEn: "What is a major advantage of the 'single global rating' method?",
    questionVi: "Lợi thế lớn của phương pháp 'đánh giá tổng thể' là gì?",
    options: {
      A: { en: "It provides very detailed data.", vi: "Nó cung cấp dữ liệu rất chi tiết." },
      B: { en: "It is very simple and takes very little time.", vi: "Nó rất đơn giản và tốn rất ít thời gian." },
      C: { en: "It helps identify exactly why an employee is unhappy.", vi: "Nó giúp xác định chính xác lý do tại sao một nhân viên không hạnh phúc." },
      D: { en: "It is more sophisticated than other methods.", vi: "Nó tinh vi hơn các phương pháp khác." }
    },
    correctAnswer: "B",
    explanationEn: "The single global rating is remarkably simple and efficient.",
    explanationVi: "Phương pháp này vô cùng đơn giản và nhanh chóng vì chỉ có một câu hỏi.",
    relatedSectionId: "3.4.1",
    topic: "Measuring Job Satisfaction"
  },
  {
    id: "q328",
    chapter: 3,
    questionEn: "What is a major advantage of the 'summation of job facets' method?",
    questionVi: "Lợi thế lớn của phương pháp 'tổng hợp các khía cạnh công việc' là gì?",
    options: {
      A: { en: "It is the fastest method available.", vi: "Đây là phương pháp nhanh nhất hiện có." },
      B: { en: "It helps managers identify specific areas that need improvement.", vi: "Nó giúp các nhà quản lý xác định các lĩnh vực cụ thể cần cải thiện." },
      C: { en: "It only requires one answer from the employee.", vi: "Nó chỉ yêu cầu một câu trả lời từ nhân viên." },
      D: { en: "It is cheaper to implement.", vi: "Nó rẻ hơn để thực hiện." }
    },
    correctAnswer: "B",
    explanationEn: "The summation of job facets helps managers zero in on problems and deal with them more quickly and easily.",
    explanationVi: "Phương pháp này giúp nhà quản lý biết chính xác 'căn bệnh' nằm ở đâu để đưa ra giải pháp phù hợp.",
    relatedSectionId: "3.4.2",
    topic: "Measuring Job Satisfaction"
  },
  {
    id: "q329",
    chapter: 3,
    questionEn: "If an HR manager wants to know *why* employees are leaving, which measurement method is better?",
    questionVi: "Nếu một giám đốc nhân sự muốn biết *tại sao* nhân viên rời đi, phương pháp đo lường nào tốt hơn?",
    options: {
      A: { en: "Single global rating", vi: "Đánh giá tổng thể" },
      B: { en: "Summation of job facets", vi: "Tổng hợp các khía cạnh công việc" },
      C: { en: "Neither method is useful.", vi: "Cả hai phương pháp đều không hữu ích." },
      D: { en: "Asking the employees' friends.", vi: "Hỏi bạn bè của nhân viên." }
    },
    correctAnswer: "B",
    explanationEn: "The summation method provides detailed insights into specific job elements, helping identify the root cause of dissatisfaction.",
    explanationVi: "Phương pháp tổng hợp các khía cạnh chỉ ra chi tiết từng phần, giúp tìm ra nguyên nhân gốc rễ của sự bất mãn.",
    relatedSectionId: "3.4.3",
    topic: "Measuring Job Satisfaction"
  },
  {
    id: "q330",
    chapter: 3,
    questionEn: "Which of the following is typically a 'key element' in the summation of job facets method?",
    questionVi: "Điều nào sau đây thường là một 'yếu tố cốt lõi' trong phương pháp tổng hợp các khía cạnh công việc?",
    options: {
      A: { en: "The color of the office walls.", vi: "Màu sắc của các bức tường văn phòng." },
      B: { en: "Promotion opportunities.", vi: "Cơ hội thăng tiến." },
      C: { en: "The brand of coffee in the breakroom.", vi: "Thương hiệu cà phê trong phòng nghỉ." },
      D: { en: "The distance to the nearest gym.", vi: "Khoảng cách đến phòng tập gym gần nhất." }
    },
    correctAnswer: "B",
    explanationEn: "Key elements typically include the nature of the work, pay, promotion opportunities, supervision, and co-workers.",
    explanationVi: "Các yếu tố cốt lõi thường bao gồm: bản chất công việc, tiền lương, cơ hội thăng tiến, người quản lý và đồng nghiệp.",
    relatedSectionId: "3.4.2",
    topic: "Measuring Job Satisfaction"
  },
  {
    id: "q331",
    chapter: 3,
    questionEn: "What is considered the most important predictor of job satisfaction?",
    questionVi: "Điều gì được coi là yếu tố dự đoán quan trọng nhất về sự hài lòng với công việc?",
    options: {
      A: { en: "The salary amount.", vi: "Số tiền lương." },
      B: { en: "Job conditions.", vi: "Điều kiện công việc." },
      C: { en: "The company's logo.", vi: "Logo của công ty." },
      D: { en: "The age of the manager.", vi: "Tuổi của người quản lý." }
    },
    correctAnswer: "B",
    explanationEn: "Job conditions—the intrinsic nature of the work itself, social interactions, and supervision—are important predictors of job satisfaction.",
    explanationVi: "Điều kiện công việc (bản chất công việc, tương tác xã hội, sự giám sát) là yếu tố dự đoán quan trọng nhất.",
    relatedSectionId: "3.5.1",
    topic: "Causes of Job Satisfaction"
  },
  {
    id: "q332",
    chapter: 3,
    questionEn: "The 'intrinsic nature of the work itself' refers to:",
    questionVi: "'Bản chất thực sự của chính công việc' đề cập đến:",
    options: {
      A: { en: "The physical environment of the office.", vi: "Môi trường vật lý của văn phòng." },
      B: { en: "The tasks and responsibilities that make up the job.", vi: "Các nhiệm vụ và trách nhiệm tạo nên công việc." },
      C: { en: "The salary and benefits package.", vi: "Gói lương và phúc lợi." },
      D: { en: "The company's social media presence.", vi: "Sự hiện diện trên mạng xã hội của công ty." }
    },
    correctAnswer: "B",
    explanationEn: "Intrinsic nature refers to the core tasks and challenges of the job itself.",
    explanationVi: "Bản chất thực sự của công việc liên quan đến các nhiệm vụ và thử thách cốt lõi của chính công việc đó.",
    relatedSectionId: "3.5.1",
    topic: "Causes of Job Satisfaction"
  },
  {
    id: "q333",
    chapter: 3,
    questionEn: "People with ________ are more likely to be satisfied with their jobs.",
    questionVi: "Những người có ________ có nhiều khả năng hài lòng với công việc của họ hơn.",
    options: {
      A: { en: "Negative outlooks", vi: "Cái nhìn tiêu cực" },
      B: { en: "Positive core self-evaluations (CSE)", vi: "Tự đánh giá cốt lõi tích cực (CSE)" },
      C: { en: "Low self-esteem", vi: "Lòng tự trọng thấp" },
      D: { en: "A history of changing jobs frequently", vi: "Lịch sử thay đổi công việc thường xuyên" }
    },
    correctAnswer: "B",
    explanationEn: "People who have positive core self-evaluations (CSE) are more satisfied with their jobs than those with negative CSEs.",
    explanationVi: "Những người tin tưởng vào giá trị và năng lực bản thân (positive CSE) sẽ dễ hài lòng với công việc hơn.",
    relatedSectionId: "3.5.2",
    topic: "Causes of Job Satisfaction"
  },
  {
    id: "q334",
    chapter: 3,
    questionEn: "Once an individual reaches a level of comfortable living, the relationship between pay and job satisfaction:",
    questionVi: "Một khi cá nhân đạt đến mức sống thoải mái, mối quan hệ giữa tiền lương và sự hài lòng với công việc:",
    options: {
      A: { en: "Becomes even stronger.", vi: "Trở nên mạnh mẽ hơn nữa." },
      B: { en: "Virtually disappears.", vi: "Hầu như biến mất." },
      C: { en: "Becomes negative.", vi: "Trở nên tiêu cực." },
      D: { en: "Is the only thing that matters.", vi: "Là điều duy nhất quan trọng." }
    },
    correctAnswer: "B",
    explanationEn: "Once an individual reaches a level of comfortable living, the relationship between pay and job satisfaction virtually disappears.",
    explanationVi: "Khi đã đạt ngưỡng ổn định cuộc sống, tiền lương không còn tác động mạnh đến sự hài lòng nữa.",
    relatedSectionId: "3.5.3",
    topic: "Causes of Job Satisfaction"
  },
  {
    id: "q335",
    chapter: 3,
    questionEn: "Does high pay automatically create a satisfying work environment?",
    questionVi: "Tiền lương cao có tự động tạo ra một môi trường làm việc hài lòng không?",
    options: {
      A: { en: "Yes, always.", vi: "Có, luôn luôn." },
      B: { en: "No, other factors like job conditions and supervision are also critical.", vi: "Không, các yếu tố khác như điều kiện công việc và sự giám sát cũng rất quan trọng." },
      C: { en: "Only for young employees.", vi: "Chỉ dành cho nhân viên trẻ." },
      D: { en: "Only in the technology sector.", vi: "Chỉ trong lĩnh vực công nghệ." }
    },
    correctAnswer: "B",
    explanationEn: "Pay helps, but it doesn't automatically create satisfaction if other core elements like job conditions are poor.",
    explanationVi: "Việc trả thêm lương thật cao không tự động tạo ra sự hài lòng nếu thiếu đi các yếu tố cốt lõi khác.",
    relatedSectionId: "3.5.3",
    topic: "Causes of Job Satisfaction"
  },
  {
    id: "q336",
    chapter: 3,
    questionEn: "Which of the following is a component of 'Job Conditions'?",
    questionVi: "Điều nào sau đây là một thành phần của 'Điều kiện công việc'?",
    options: {
      A: { en: "The employee's home address.", vi: "Địa chỉ nhà của nhân viên." },
      B: { en: "Quality of supervision.", vi: "Chất lượng giám sát." },
      C: { en: "The brand of the employee's car.", vi: "Thương hiệu xe hơi của nhân viên." },
      D: { en: "The weather outside the office.", vi: "Thời tiết bên ngoài văn phòng." }
    },
    correctAnswer: "B",
    explanationEn: "Job conditions include the nature of the work, social interactions, and supervision.",
    explanationVi: "Điều kiện công việc bao gồm bản chất công việc, tương tác xã hội và chất lượng của người quản lý.",
    relatedSectionId: "3.5.1",
    topic: "Causes of Job Satisfaction"
  },
  {
    id: "q337",
    chapter: 3,
    questionEn: "How do social interactions affect job satisfaction?",
    questionVi: "Tương tác xã hội ảnh hưởng thế nào đến sự hài lòng với công việc?",
    options: {
      A: { en: "They always make employees unhappy.", vi: "Chúng luôn làm cho nhân viên không hạnh phúc." },
      B: { en: "Positive social interactions with co-workers increase satisfaction.", vi: "Tương tác xã hội tích cực với đồng nghiệp làm tăng sự hài lòng." },
      C: { en: "They have no impact at all.", vi: "Chúng không có tác động gì cả." },
      D: { en: "They are only important for managers.", vi: "Chúng chỉ quan trọng đối với các nhà quản lý." }
    },
    correctAnswer: "B",
    explanationEn: "Social interactions at work are a key part of job conditions that drive satisfaction.",
    explanationVi: "Sự tương tác xã hội vui vẻ, hòa đồng với những người xung quanh là một yếu tố quan trọng dẫn đến sự hài lòng.",
    relatedSectionId: "3.5.1",
    topic: "Causes of Job Satisfaction"
  },
  {
    id: "q338",
    chapter: 3,
    questionEn: "What is the relationship between job satisfaction and job performance?",
    questionVi: "Mối quan hệ giữa sự hài lòng với công việc và hiệu suất công việc là gì?",
    options: {
      A: { en: "There is no relationship.", vi: "Không có mối quan hệ nào." },
      B: { en: "Satisfied employees tend to be more productive.", vi: "Nhân viên hài lòng có xu hướng năng suất hơn." },
      C: { en: "Satisfied employees work slower.", vi: "Nhân viên hài lòng làm việc chậm hơn." },
      D: { en: "Performance decreases as satisfaction increases.", vi: "Hiệu suất giảm khi sự hài lòng tăng lên." }
    },
    correctAnswer: "B",
    explanationEn: "Happy workers are more likely to be productive workers.",
    explanationVi: "Những nhân viên vui vẻ và thỏa mãn với công việc thường là những người làm việc năng suất hơn.",
    relatedSectionId: "3.6.1",
    topic: "Outcomes of Job Satisfaction"
  },
  {
    id: "q339",
    chapter: 3,
    questionEn: "What is 'Organizational Citizenship Behavior' (OCB)?",
    questionVi: "Hành vi công dân tổ chức (OCB) là gì?",
    options: {
      A: { en: "Following the rules exactly as written.", vi: "Tuân thủ các quy tắc chính xác như đã viết." },
      B: { en: "Discretionary behaviors that contribute to the organization but are not part of formal job requirements.", vi: "Các hành vi tự nguyện đóng góp cho tổ chức nhưng không phải là một phần của yêu cầu công việc chính thức." },
      C: { en: "Voting in national elections.", vi: "Bỏ phiếu trong các cuộc bầu cử quốc gia." },
      D: { en: "Complaining about the company to outsiders.", vi: "Phàn nàn về công ty với người bên ngoài." }
    },
    correctAnswer: "B",
    explanationEn: "OCB includes discretionary behaviors that contribute to the organization's psychological and social environment.",
    explanationVi: "OCB là những hành vi tự nguyện cống hiến không nằm trong bản mô tả công việc nhưng mang lại lợi ích lớn cho tập thể.",
    relatedSectionId: "3.6.2",
    topic: "OCB"
  },
  {
    id: "q340",
    chapter: 3,
    questionEn: "Why are satisfied employees more likely to engage in OCB?",
    questionVi: "Tại sao nhân viên hài lòng có nhiều khả năng thực hiện OCB hơn?",
    options: {
      A: { en: "Because they are forced to by their boss.", vi: "Bởi vì họ bị sếp ép buộc." },
      B: { en: "Because they want to reciprocate their positive experiences.", vi: "Bởi vì họ muốn đáp lại những trải nghiệm tích cực của mình." },
      C: { en: "Because they have nothing else to do.", vi: "Bởi vì họ không có việc gì khác để làm." },
      D: { en: "Because they want a higher salary.", vi: "Bởi vì họ muốn một mức lương cao hơn." }
    },
    correctAnswer: "B",
    explanationEn: "Satisfied employees are more likely to talk positively about the organization and help others, going beyond their normal duties.",
    explanationVi: "Những người hài lòng có xu hướng muốn cống hiến thêm cho tổ chức như một cách đáp lại sự thỏa mãn của họ.",
    relatedSectionId: "3.6.2",
    topic: "OCB"
  },
  {
    id: "q341",
    chapter: 3,
    questionEn: "How does employee job satisfaction affect customers?",
    questionVi: "Sự hài lòng với công việc của nhân viên ảnh hưởng đến khách hàng như thế nào?",
    options: {
      A: { en: "It makes customers angry.", vi: "Nó làm cho khách hàng tức giận." },
      B: { en: "Satisfied employees increase customer satisfaction and loyalty.", vi: "Nhân viên hài lòng làm tăng sự hài lòng và lòng trung thành của khách hàng." },
      C: { en: "It has no effect on customers.", vi: "Nó không có tác động gì đến khách hàng." },
      D: { en: "It makes products more expensive.", vi: "Nó làm cho sản phẩm đắt hơn." }
    },
    correctAnswer: "B",
    explanationEn: "Satisfied employees are more friendly and upbeat, which leads to higher customer satisfaction.",
    explanationVi: "Thái độ tích cực của nhân viên truyền sang khách hàng, khiến họ đánh giá cao dịch vụ và trung thành hơn.",
    relatedSectionId: "3.6.3",
    topic: "Outcomes of Job Satisfaction"
  },
  {
    id: "q342",
    chapter: 3,
    questionEn: "Is there a link between job satisfaction and life satisfaction?",
    questionVi: "Có mối liên hệ giữa sự hài lòng với công việc và sự hài lòng với cuộc sống không?",
    options: {
      A: { en: "No, they are completely separate.", vi: "Không, chúng hoàn toàn tách biệt." },
      B: { en: "Yes, they are positively correlated.", vi: "Có, chúng có mối tương quan tích cực." },
      C: { en: "Only for people who work from home.", vi: "Chỉ dành cho những người làm việc tại nhà." },
      D: { en: "Yes, but only in small companies.", vi: "Có, nhưng chỉ trong các công ty nhỏ." }
    },
    correctAnswer: "B",
    explanationEn: "Research shows that job satisfaction is positively correlated with life satisfaction.",
    explanationVi: "Nghiên cứu chỉ ra rằng sự hài lòng trong công việc và cuộc sống có mối tương quan tích cực với nhau.",
    relatedSectionId: "3.6.4",
    topic: "Outcomes of Job Satisfaction"
  },
  {
    id: "q343",
    chapter: 3,
    questionEn: "A 'productive worker' is most likely to be a ________ worker.",
    questionVi: "Một 'nhân viên năng suất' có khả năng cao nhất là một nhân viên ________.",
    options: {
      A: { en: "Stressed", vi: "Căng thẳng" },
      B: { en: "Satisfied", vi: "Hài lòng" },
      C: { en: "Angry", vi: "Tức giận" },
      D: { en: "Bored", vi: "Chán nản" }
    },
    correctAnswer: "B",
    explanationEn: "Satisfied employees are generally more productive.",
    explanationVi: "Nhân viên hài lòng thường là những người làm việc năng suất hơn.",
    relatedSectionId: "3.6.1",
    topic: "Outcomes of Job Satisfaction"
  },
  {
    id: "q344",
    chapter: 3,
    questionEn: "Why does job satisfaction lead to better life satisfaction?",
    questionVi: "Tại sao sự hài lòng với công việc dẫn đến sự hài lòng với cuộc sống tốt hơn?",
    options: {
      A: { en: "Because employees spend all their time at work.", vi: "Bởi vì nhân viên dành toàn bộ thời gian ở nơi làm việc." },
      B: { en: "Because positive moods from work carry over to home life.", vi: "Bởi vì tâm trạng tích cực từ công việc lan tỏa sang cuộc sống gia đình." },
      C: { en: "Because work is the only source of happiness.", vi: "Bởi vì công việc là nguồn hạnh phúc duy nhất." },
      D: { en: "It doesn't; work always makes life worse.", vi: "Nó không dẫn đến; công việc luôn làm cho cuộc sống tồi tệ hơn." }
    },
    correctAnswer: "B",
    explanationEn: "The positive experiences and emotions from a satisfying job improve an individual's overall well-being.",
    explanationVi: "Công việc tốt giúp tâm trạng thư thái khi về nhà, từ đó nâng cao chất lượng cuộc sống và các mối quan hệ.",
    relatedSectionId: "3.6.4",
    topic: "Outcomes of Job Satisfaction"
  },
  {
    id: "q345",
    chapter: 3,
    questionEn: "Which response to dissatisfaction involves actively and constructively trying to improve conditions?",
    questionVi: "Phản ứng nào đối với sự bất mãn liên quan đến việc cố gắng cải thiện các điều kiện một cách chủ động và xây dựng?",
    options: {
      A: { en: "Exit", vi: "Rời đi" },
      B: { en: "Voice", vi: "Lên tiếng" },
      C: { en: "Loyalty", vi: "Trung thành" },
      D: { en: "Neglect", vi: "Thờ ơ" }
    },
    correctAnswer: "B",
    explanationEn: "The voice response includes suggesting improvements and discussing problems with superiors.",
    explanationVi: "Voice mang tính chủ động và xây dựng (Active & Constructive), thể hiện qua việc đề xuất giải pháp.",
    relatedSectionId: "3.7.1",
    topic: "Responses to Dissatisfaction"
  },
  {
    id: "q346",
    chapter: 3,
    questionEn: "The 'Exit' response to job dissatisfaction is characterized as:",
    questionVi: "Phản ứng 'Rời đi' (Exit) đối với sự bất mãn trong công việc được đặc trưng là:",
    options: {
      A: { en: "Passive and Constructive", vi: "Bị động và Xây dựng" },
      B: { en: "Active and Destructive", vi: "Chủ động và Phá hoại" },
      C: { en: "Passive and Destructive", vi: "Bị động và Phá hoại" },
      D: { en: "Active and Constructive", vi: "Chủ động và Xây dựng" }
    },
    correctAnswer: "B",
    explanationEn: "Exit involves leaving the organization, which is an active but destructive action for the company.",
    explanationVi: "Exit mang tính chủ động nhưng phá hoại (Active & Destructive) vì nó dẫn đến việc mất nhân sự.",
    relatedSectionId: "3.7.2",
    topic: "Responses to Dissatisfaction"
  },
  {
    id: "q347",
    chapter: 3,
    questionEn: "Which response involves passively but optimistically waiting for conditions to improve?",
    questionVi: "Phản ứng nào liên quan đến việc chờ đợi các điều kiện cải thiện một cách bị động nhưng lạc quan?",
    options: {
      A: { en: "Exit", vi: "Rời đi" },
      B: { en: "Voice", vi: "Lên tiếng" },
      C: { en: "Loyalty", vi: "Trung thành" },
      D: { en: "Neglect", vi: "Thờ ơ" }
    },
    correctAnswer: "C",
    explanationEn: "Loyalty means passively waiting for conditions to improve while defending the organization.",
    explanationVi: "Loyalty mang tính bị động nhưng xây dựng (Passive & Constructive), tin tưởng ban lãnh đạo sẽ giải quyết vấn đề.",
    relatedSectionId: "3.7.3",
    topic: "Responses to Dissatisfaction"
  },
  {
    id: "q348",
    chapter: 3,
    questionEn: "The 'Neglect' response to dissatisfaction involves:",
    questionVi: "Phản ứng 'Thờ ơ' (Neglect) đối với sự bất mãn bao gồm:",
    options: {
      A: { en: "Working harder to prove a point.", vi: "Làm việc chăm chỉ hơn để chứng minh một điều gì đó." },
      B: { en: "Passively allowing conditions to worsen, including chronic absenteeism.", vi: "Bị động để mặc các điều kiện trở nên tồi tệ hơn, bao gồm cả việc vắng mặt thường xuyên." },
      C: { en: "Organizing a strike.", vi: "Tổ chức một cuộc đình công." },
      D: { en: "Asking for a promotion.", vi: "Yêu cầu thăng tiến." }
    },
    correctAnswer: "B",
    explanationEn: "Neglect involves allowing conditions to worsen through reduced effort and increased errors.",
    explanationVi: "Neglect mang tính bị động và phá hoại (Passive & Destructive), biểu hiện qua việc buông xuôi, đi muộn, vắng mặt.",
    relatedSectionId: "3.7.4",
    topic: "Responses to Dissatisfaction"
  },
  {
    id: "q349",
    chapter: 3,
    questionEn: "What is 'Counterproductive Work Behavior' (CWB)?",
    questionVi: "Hành vi chống đối tại nơi làm việc (CWB) là gì?",
    options: {
      A: { en: "Helping a co-worker with a difficult task.", vi: "Giúp đỡ đồng nghiệp thực hiện một nhiệm vụ khó khăn." },
      B: { en: "Actions that actively damage the organization, such as stealing or aggression.", vi: "Các hành động tích cực gây hại cho tổ chức, chẳng hạn như trộm cắp hoặc hung hăng." },
      C: { en: "Suggesting a new way to save money.", vi: "Đề xuất một cách mới để tiết kiệm tiền." },
      D: { en: "Attending a training seminar.", vi: "Tham dự một buổi hội thảo đào tạo." }
    },
    correctAnswer: "B",
    explanationEn: "CWB includes intentional behaviors that are contrary to the interests of the organization.",
    explanationVi: "CWB là các hành vi chống đối, phản tác dụng gây thiệt hại trực tiếp cho tổ chức (trộm cắp, trốn việc...).",
    relatedSectionId: "3.7.5",
    topic: "CWB"
  },
  {
    id: "q350",
    chapter: 3,
    questionEn: "Chronic absenteeism and lateness are most closely associated with which response?",
    questionVi: "Vắng mặt thường xuyên và đi muộn có liên quan chặt chẽ nhất với phản ứng nào?",
    options: {
      A: { en: "Voice", vi: "Lên tiếng" },
      B: { en: "Loyalty", vi: "Trung thành" },
      C: { en: "Neglect", vi: "Thờ ơ" },
      D: { en: "Engagement", vi: "Gắn kết" }
    },
    correctAnswer: "C",
    explanationEn: "Neglect manifests as reduced effort, lateness, and absenteeism.",
    explanationVi: "Neglect biểu hiện qua việc giảm sút nỗ lực, thường xuyên mắc lỗi, đi muộn hoặc vắng mặt.",
    relatedSectionId: "3.7.4",
    topic: "Responses to Dissatisfaction"
  },

  // --- CHAPTER 4: Emotions and Moods (50 questions) ---
  {
    id: "q401",
    chapter: 4,
    questionEn: "What is the broad umbrella term that covers a wide range of feelings people experience?",
    questionVi: "Thuật ngữ 'ô dù' rộng lớn bao quát một phạm vi rộng các cảm giác mà con người trải qua là gì?",
    options: {
      A: { en: "Emotion", vi: "Cảm xúc" },
      B: { en: "Mood", vi: "Tâm trạng" },
      C: { en: "Affect", vi: "Xúc cảm (Affect)" },
      D: { en: "Dissonance", vi: "Sự bất hòa" }
    },
    correctAnswer: "C",
    explanationEn: "Affect is a generic term that covers both emotions and moods.",
    explanationVi: "Affect là một thuật ngữ chung bao quát cả cảm xúc và tâm trạng.",
    relatedSectionId: "4.1",
    topic: "Affect"
  },
  {
    id: "q402",
    chapter: 4,
    questionEn: "Which of the following is a key characteristic of an emotion?",
    questionVi: "Đặc điểm nào sau đây là đặc trưng chính của một cảm xúc (emotion)?",
    options: {
      A: { en: "It is caused by a specific event.", vi: "Nó được gây ra bởi một sự kiện cụ thể." },
      B: { en: "It lasts for many days.", vi: "Nó kéo dài trong nhiều ngày." },
      C: { en: "It is usually general and unclear.", vi: "Nó thường chung chung và không rõ ràng." },
      D: { en: "It is not indicated by facial expressions.", vi: "Nó không được biểu thị bằng biểu cảm khuôn mặt." }
    },
    correctAnswer: "A",
    explanationEn: "Emotions are caused by specific events, are brief in duration, and are often accompanied by distinct facial expressions.",
    explanationVi: "Cảm xúc được gây ra bởi các sự kiện cụ thể, diễn ra ngắn ngủi và thường đi kèm với các biểu cảm khuôn mặt rõ rệt.",
    relatedSectionId: "4.1.1",
    topic: "Emotions vs Moods"
  },
  {
    id: "q403",
    chapter: 4,
    questionEn: "How do moods differ from emotions in terms of duration?",
    questionVi: "Tâm trạng (moods) khác với cảm xúc (emotions) như thế nào về thời gian kéo dài?",
    options: {
      A: { en: "Moods last for seconds.", vi: "Tâm trạng kéo dài trong vài giây." },
      B: { en: "Moods last longer, often hours or days.", vi: "Tâm trạng kéo dài lâu hơn, thường là nhiều giờ hoặc nhiều ngày." },
      C: { en: "Emotions last longer than moods.", vi: "Cảm xúc kéo dài lâu hơn tâm trạng." },
      D: { en: "Both last for the same amount of time.", vi: "Cả hai đều kéo dài trong cùng một khoảng thời gian." }
    },
    correctAnswer: "B",
    explanationEn: "Moods are longer-lasting than emotions, often persisting for hours or days.",
    explanationVi: "Tâm trạng kéo dài lâu hơn cảm xúc, thường tồn tại trong nhiều giờ hoặc nhiều ngày.",
    relatedSectionId: "4.1.1",
    topic: "Emotions vs Moods"
  },
  {
    id: "q404",
    chapter: 4,
    questionEn: "Which of the following is NOT one of the six universal emotions?",
    questionVi: "Điều nào sau đây KHÔNG phải là một trong sáu cảm xúc phổ quát?",
    options: {
      A: { en: "Anger", vi: "Tức giận" },
      B: { en: "Happiness", vi: "Hạnh phúc" },
      C: { en: "Surprise", vi: "Ngạc nhiên" },
      D: { en: "Boredom", vi: "Buồn chán" }
    },
    correctAnswer: "D",
    explanationEn: "The six universal emotions are anger, fear, sadness, happiness, disgust, and surprise.",
    explanationVi: "Sáu cảm xúc phổ quát là tức giận, sợ hãi, buồn bã, hạnh phúc, kinh tởm và ngạc nhiên.",
    relatedSectionId: "4.1.1",
    topic: "Universal Emotions"
  },
  {
    id: "q405",
    chapter: 4,
    questionEn: "What is 'Affect Intensity'?",
    questionVi: "'Cường độ cảm xúc' (Affect Intensity) là gì?",
    options: {
      A: { en: "The frequency of emotional changes.", vi: "Tần suất thay đổi cảm xúc." },
      B: { en: "Individual differences in the strength with which people experience emotions.", vi: "Sự khác biệt cá nhân về mức độ mạnh mẽ khi trải nghiệm cảm xúc." },
      C: { en: "The ability to hide emotions.", vi: "Khả năng che giấu cảm xúc." },
      D: { en: "The duration of a mood.", vi: "Thời gian kéo dài của một tâm trạng." }
    },
    correctAnswer: "B",
    explanationEn: "Affect intensity refers to how strongly individuals experience their emotions.",
    explanationVi: "Cường độ cảm xúc đề cập đến mức độ mạnh mẽ mà các cá nhân trải nghiệm cảm xúc của họ.",
    relatedSectionId: "4.2.1",
    topic: "Affect Intensity"
  },
  {
    id: "q406",
    chapter: 4,
    questionEn: "When are people generally at their highest level of positive affect during the day?",
    questionVi: "Mọi người thường đạt mức xúc cảm tích cực cao nhất vào thời điểm nào trong ngày?",
    options: {
      A: { en: "Early morning", vi: "Sáng sớm" },
      B: { en: "Late at night", vi: "Đêm muộn" },
      C: { en: "Midpoint of the daily awake period", vi: "Khoảng thời gian giữa ngày" },
      D: { en: "Right before sleep", vi: "Ngay trước khi ngủ" }
    },
    correctAnswer: "C",
    explanationEn: "Positive affect tends to peak around the midpoint of the daily awake period.",
    explanationVi: "Xúc cảm tích cực có xu hướng đạt đỉnh vào khoảng giữa thời gian thức trong ngày.",
    relatedSectionId: "4.2.2",
    topic: "Time of Day"
  },
  {
    id: "q407",
    chapter: 4,
    questionEn: "What is 'Illusory Correlation' in the context of weather and mood?",
    questionVi: "'Sự tương quan ảo' (Illusory Correlation) trong bối cảnh thời tiết và tâm trạng là gì?",
    options: {
      A: { en: "The fact that rain always makes people sad.", vi: "Thực tế là trời mưa luôn làm con người buồn." },
      B: { en: "The tendency of people to associate two events when in reality no connection exists.", vi: "Xu hướng mọi người liên kết hai sự kiện khi thực tế không có mối liên hệ nào tồn tại." },
      C: { en: "The scientific proof that sun increases productivity.", vi: "Bằng chứng khoa học cho thấy ánh nắng làm tăng năng suất." },
      D: { en: "The impact of seasonal changes on health.", vi: "Tác động của thay đổi mùa đối với sức khỏe." }
    },
    correctAnswer: "B",
    explanationEn: "Illusory correlation is the tendency to see a relationship between weather and mood when there isn't one.",
    explanationVi: "Tương quan ảo là xu hướng nhìn thấy mối quan hệ giữa thời tiết và tâm trạng trong khi thực tế không có.",
    relatedSectionId: "4.2.3",
    topic: "Weather"
  },
  {
    id: "q408",
    chapter: 4,
    questionEn: "How does stress affect mood?",
    questionVi: "Căng thẳng (stress) ảnh hưởng đến tâm trạng như thế nào?",
    options: {
      A: { en: "It has no impact.", vi: "Nó không có tác động." },
      B: { en: "Even low levels of constant stress can worsen mood over time.", vi: "Ngay cả mức độ căng thẳng thấp nhưng kéo dài cũng có thể làm tâm trạng tồi tệ đi theo thời gian." },
      C: { en: "It only affects emotions, not moods.", vi: "Nó chỉ ảnh hưởng đến cảm xúc, không ảnh hưởng đến tâm trạng." },
      D: { en: "It only impacts people on weekends.", vi: "Nó chỉ tác động đến mọi người vào cuối tuần." }
    },
    correctAnswer: "B",
    explanationEn: "Constant stress, even at low levels, can significantly worsen a person's mood.",
    explanationVi: "Căng thẳng liên tục, ngay cả ở mức độ thấp, có thể làm tâm trạng một người tồi tệ đi đáng kể.",
    relatedSectionId: "4.2.4",
    topic: "Stress"
  },
  {
    id: "q409",
    chapter: 4,
    questionEn: "What is the 'spill over' effect in social interactions?",
    questionVi: "Hiệu ứng 'tràn ra' (spill over) trong tương tác xã hội là gì?",
    options: {
      A: { en: "Sharing a drink with colleagues.", vi: "Chia sẻ đồ uống với đồng nghiệp." },
      B: { en: "Negative interactions at work affecting one's home life.", vi: "Các tương tác tiêu cực tại nơi làm việc ảnh hưởng đến cuộc sống gia đình." },
      C: { en: "Spreading rumors in the office.", vi: "Lan truyền tin đồn trong văn phòng." },
      D: { en: "The physical layout of the office.", vi: "Bố trí vật lý của văn phòng." }
    },
    correctAnswer: "B",
    explanationEn: "The spill over effect occurs when work-related emotions affect personal life outside of work.",
    explanationVi: "Hiệu ứng tràn ra xảy ra khi các cảm xúc liên quan đến công việc ảnh hưởng đến cuộc sống cá nhân bên ngoài công việc.",
    relatedSectionId: "4.2.5",
    topic: "Social Interactions"
  },
  {
    id: "q410",
    chapter: 4,
    questionEn: "Which of the following helps improve mood and is especially good for people with depression?",
    questionVi: "Điều nào sau đây giúp cải thiện tâm trạng và đặc biệt tốt cho những người bị trầm cảm?",
    options: {
      A: { en: "Working long hours", vi: "Làm việc nhiều giờ" },
      B: { en: "Physical exercise", vi: "Tập thể dục" },
      C: { en: "Drinking caffeine", vi: "Uống caffeine" },
      D: { en: "Social isolation", vi: "Cô lập xã hội" }
    },
    correctAnswer: "B",
    explanationEn: "Exercise helps improve mood and is beneficial for individuals with depression.",
    explanationVi: "Tập thể dục giúp cải thiện tâm trạng và có lợi cho những người bị trầm cảm.",
    relatedSectionId: "4.2.6",
    topic: "Exercise"
  },
  {
    id: "q411",
    chapter: 4,
    questionEn: "What is a common gender stereotype regarding emotions in the workplace?",
    questionVi: "Một định kiến giới phổ biến liên quan đến cảm xúc tại nơi làm việc là gì?",
    options: {
      A: { en: "Men are seen as more emotional than women.", vi: "Đàn ông được coi là dễ xúc động hơn phụ nữ." },
      B: { en: "Women are often perceived as being 'emotional' while men are seen as 'angry'.", vi: "Phụ nữ thường bị coi là 'cảm xúc' trong khi đàn ông bị coi là 'tức giận'." },
      C: { en: "There are no gender stereotypes in OB.", vi: "Không có định kiến giới trong OB." },
      D: { en: "Men are always praised for being emotional.", vi: "Đàn ông luôn được khen ngợi vì dễ xúc động." }
    },
    correctAnswer: "B",
    explanationEn: "Stereotypes often label women as 'emotional' and men as 'angry' for similar behaviors.",
    explanationVi: "Các định kiến thường dán nhãn phụ nữ là 'cảm xúc' và đàn ông là 'tức giận' cho những hành vi tương tự.",
    relatedSectionId: "4.2.7",
    topic: "Gender Identity"
  },
  {
    id: "q412",
    chapter: 4,
    questionEn: "Define 'Emotional Labor'.",
    questionVi: "Định nghĩa 'Lao động cảm xúc' (Emotional Labor).",
    options: {
      A: { en: "Physical work that is tiring.", vi: "Công việc thể chất gây mệt mỏi." },
      B: { en: "An employee's expression of organizationally desired emotions during interpersonal transactions at work.", vi: "Việc nhân viên bộc lộ những cảm xúc mà tổ chức mong muốn trong các giao dịch liên cá nhân tại nơi làm việc." },
      C: { en: "Working in a laboratory.", vi: "Làm việc trong phòng thí nghiệm." },
      D: { en: "The study of brain activity.", vi: "Nghiên cứu hoạt động của não bộ." }
    },
    correctAnswer: "B",
    explanationEn: "Emotional labor involves showing emotions required by the job, regardless of true feelings.",
    explanationVi: "Lao động cảm xúc liên quan đến việc thể hiện những cảm xúc mà công việc yêu cầu, bất kể cảm xúc thực sự.",
    relatedSectionId: "4.3",
    topic: "Emotional Labor"
  },
  {
    id: "q413",
    chapter: 4,
    questionEn: "What are 'Felt Emotions'?",
    questionVi: "'Cảm xúc thực' (Felt Emotions) là gì?",
    options: {
      A: { en: "Emotions an organization requires us to show.", vi: "Cảm xúc mà tổ chức yêu cầu chúng ta thể hiện." },
      B: { en: "An individual's actual emotions.", vi: "Cảm xúc thực sự của một cá nhân." },
      C: { en: "Emotions we see in others.", vi: "Cảm xúc chúng ta thấy ở người khác." },
      D: { en: "Fake emotions for a job.", vi: "Cảm xúc giả tạo cho một công việc." }
    },
    correctAnswer: "B",
    explanationEn: "Felt emotions are the actual emotions an individual is experiencing internally.",
    explanationVi: "Cảm xúc thực là những cảm xúc thực sự mà một cá nhân đang trải qua bên trong.",
    relatedSectionId: "4.3.1",
    topic: "Felt vs Displayed"
  },
  {
    id: "q414",
    chapter: 4,
    questionEn: "What is 'Surface Acting'?",
    questionVi: "'Diễn bề ngoài' (Surface Acting) là gì?",
    options: {
      A: { en: "Changing internal feelings to match requirements.", vi: "Thay đổi cảm xúc bên trong để phù hợp với yêu cầu." },
      B: { en: "Hiding inner feelings and forgoing emotional expressions in response to display rules.", vi: "Che giấu cảm xúc bên trong và từ bỏ các biểu hiện cảm xúc để đáp ứng các quy tắc thể hiện." },
      C: { en: "Acting in a play on a stage.", vi: "Diễn kịch trên sân khấu." },
      D: { en: "Being honest about all feelings.", vi: "Thành thật về tất cả cảm xúc." }
    },
    correctAnswer: "B",
    explanationEn: "Surface acting involves hiding true feelings and 'putting on a mask' to meet display rules.",
    explanationVi: "Diễn bề ngoài liên quan đến việc che giấu cảm xúc thật và 'đeo mặt nạ' để đáp ứng các quy tắc thể hiện.",
    relatedSectionId: "4.3.1",
    topic: "Surface Acting"
  },
  {
    id: "q415",
    chapter: 4,
    questionEn: "What is 'Deep Acting'?",
    questionVi: "'Diễn sâu' (Deep Acting) là gì?",
    options: {
      A: { en: "Ignoring all emotions.", vi: "Bỏ qua tất cả cảm xúc." },
      B: { en: "Trying to modify one's true inner feelings based on display rules.", vi: "Cố gắng sửa đổi cảm xúc thực sự bên trong dựa trên các quy tắc thể hiện." },
      C: { en: "Acting in a very dramatic way.", vi: "Diễn xuất một cách rất kịch tính." },
      D: { en: "Only smiling with the mouth, not eyes.", vi: "Chỉ cười bằng miệng, không cười bằng mắt." }
    },
    correctAnswer: "B",
    explanationEn: "Deep acting involves trying to actually feel the emotions required by the organization.",
    explanationVi: "Diễn sâu liên quan đến việc cố gắng thực sự cảm nhận những cảm xúc mà tổ chức yêu cầu.",
    relatedSectionId: "4.3.1",
    topic: "Deep Acting"
  },
  {
    id: "q416",
    chapter: 4,
    questionEn: "What is 'Emotional Dissonance'?",
    questionVi: "'Sự bất hòa cảm xúc' (Emotional Dissonance) là gì?",
    options: {
      A: { en: "A state of extreme happiness.", vi: "Một trạng thái cực kỳ hạnh phúc." },
      B: { en: "Inconsistencies between the emotions people feel and the emotions they project.", vi: "Sự không nhất quán giữa cảm xúc mà mọi người cảm thấy và cảm xúc họ thể hiện ra." },
      C: { en: "A type of hearing loss.", vi: "Một loại mất thính lực." },
      D: { en: "Agreement between coworkers.", vi: "Sự đồng thuận giữa các đồng nghiệp." }
    },
    correctAnswer: "B",
    explanationEn: "Emotional dissonance occurs when felt emotions conflict with displayed emotions.",
    explanationVi: "Bất hòa cảm xúc xảy ra khi cảm xúc thực sự xung đột với cảm xúc được thể hiện.",
    relatedSectionId: "4.3.2",
    topic: "Emotional Dissonance"
  },
  {
    id: "q417",
    chapter: 4,
    questionEn: "Long-term emotional dissonance, often from surface acting, can lead to:",
    questionVi: "Sự bất hòa cảm xúc kéo dài, thường do diễn bề ngoài, có thể dẫn đến:",
    options: {
      A: { en: "Increased energy", vi: "Tăng năng lượng" },
      B: { en: "Job burnout", vi: "Kiệt sức trong công việc" },
      C: { en: "Higher salary", vi: "Lương cao hơn" },
      D: { en: "Better sleep", vi: "Ngủ ngon hơn" }
    },
    correctAnswer: "B",
    explanationEn: "Chronic emotional dissonance is a major cause of job burnout and lower satisfaction.",
    explanationVi: "Bất hòa cảm xúc mãn tính là nguyên nhân chính gây ra kiệt sức trong công việc và giảm sự hài lòng.",
    relatedSectionId: "4.3.2",
    topic: "Impact of Emotional Labor"
  },
  {
    id: "q418",
    chapter: 4,
    questionEn: "According to Affective Events Theory (AET), what triggers emotional reactions in employees?",
    questionVi: "Theo Thuyết Sự kiện Cảm xúc (AET), điều gì kích hoạt các phản ứng cảm xúc ở nhân viên?",
    options: {
      A: { en: "Work events", vi: "Các sự kiện trong công việc" },
      B: { en: "The weather", vi: "Thời tiết" },
      C: { en: "Genetic makeup only", vi: "Chỉ do di truyền" },
      D: { en: "The stock market", vi: "Thị trường chứng khoán" }
    },
    correctAnswer: "A",
    explanationEn: "AET suggests that workplace events trigger emotional reactions that influence performance and satisfaction.",
    explanationVi: "AET cho rằng các sự kiện tại nơi làm việc kích hoạt các phản ứng cảm xúc ảnh hưởng đến hiệu suất và sự hài lòng.",
    relatedSectionId: "4.4",
    topic: "AET"
  },
  {
    id: "q419",
    chapter: 4,
    questionEn: "Why should managers NOT ignore minor negative work events?",
    questionVi: "Tại sao các nhà quản lý KHÔNG nên phớt lờ các sự kiện tiêu cực nhỏ trong công việc?",
    options: {
      A: { en: "Because they cost money immediately.", vi: "Bởi vì chúng tốn tiền ngay lập tức." },
      B: { en: "Because negative emotions from small events can accumulate over time.", vi: "Bởi vì các cảm xúc tiêu cực từ các sự kiện nhỏ có thể tích tụ theo thời gian." },
      C: { en: "Because minor events are always illegal.", vi: "Bởi vì các sự kiện nhỏ luôn là bất hợp pháp." },
      D: { en: "Because employees will forget them anyway.", vi: "Bởi vì nhân viên dù sao cũng sẽ quên chúng." }
    },
    correctAnswer: "B",
    explanationEn: "Minor negative events can accumulate and lead to significant drops in performance and satisfaction.",
    explanationVi: "Các sự kiện tiêu cực nhỏ có thể tích tụ và dẫn đến sự sụt giảm đáng kể về hiệu suất và sự hài lòng.",
    relatedSectionId: "4.4.1",
    topic: "AET"
  },
  {
    id: "q420",
    chapter: 4,
    questionEn: "What is Emotional Intelligence (EI)?",
    questionVi: "Trí tuệ cảm xúc (EI) là gì?",
    options: {
      A: { en: "The ability to solve math problems.", vi: "Khả năng giải các bài toán." },
      B: { en: "The ability to detect and to manage emotional cues and information.", vi: "Khả năng phát hiện và quản lý các tín hiệu và thông tin cảm xúc." },
      C: { en: "Having a high IQ.", vi: "Có chỉ số IQ cao." },
      D: { en: "Being very sensitive and crying easily.", vi: "Rất nhạy cảm và dễ khóc." }
    },
    correctAnswer: "B",
    explanationEn: "EI is the ability to perceive, understand, and regulate emotions in oneself and others.",
    explanationVi: "EI là khả năng nhận biết, thấu hiểu và điều chỉnh cảm xúc ở bản thân và người khác.",
    relatedSectionId: "4.5",
    topic: "Emotional Intelligence"
  },
  {
    id: "q421",
    chapter: 4,
    questionEn: "In the Cascading Model of EI, what is the first step?",
    questionVi: "Trong Mô hình thác đổ của EI, bước đầu tiên là gì?",
    options: {
      A: { en: "Regulate Emotions", vi: "Điều chỉnh cảm xúc" },
      B: { en: "Understand the Meaning of Emotions", vi: "Hiểu ý nghĩa của cảm xúc" },
      C: { en: "Perceive Emotions in Self and Others", vi: "Nhận biết cảm xúc ở bản thân và người khác" },
      D: { en: "Ignore Emotions", vi: "Bỏ qua cảm xúc" }
    },
    correctAnswer: "C",
    explanationEn: "The first step is perceiving emotions, which is supported by conscientiousness.",
    explanationVi: "Bước đầu tiên là nhận biết cảm xúc, được hỗ trợ bởi sự tận tâm (conscientiousness).",
    relatedSectionId: "4.5.1",
    topic: "Cascading Model of EI"
  },
  {
    id: "q422",
    chapter: 4,
    questionEn: "Which trait supports the 'Understand the Meaning of Emotions' step in the EI model?",
    questionVi: "Đặc điểm nào hỗ trợ bước 'Hiểu ý nghĩa của cảm xúc' trong mô hình EI?",
    options: {
      A: { en: "Conscientiousness", vi: "Sự tận tâm" },
      B: { en: "Cognitive Ability", vi: "Năng lực nhận thức" },
      C: { en: "Emotional Stability", vi: "Sự ổn định cảm xúc" },
      D: { en: "Physical Strength", vi: "Sức mạnh thể chất" }
    },
    correctAnswer: "B",
    explanationEn: "Understanding the meaning of emotions requires cognitive ability to analyze causes and consequences.",
    explanationVi: "Hiểu ý nghĩa của cảm xúc đòi hỏi năng lực nhận thức để phân tích nguyên nhân và hệ quả.",
    relatedSectionId: "4.5.1",
    topic: "Cascading Model of EI"
  },
  {
    id: "q423",
    chapter: 4,
    questionEn: "What is the final, highest step in the Cascading Model of EI?",
    questionVi: "Bước cuối cùng, cao nhất trong Mô hình thác đổ của EI là gì?",
    options: {
      A: { en: "Perceive Emotions", vi: "Nhận biết cảm xúc" },
      B: { en: "Understand Emotions", vi: "Thấu hiểu cảm xúc" },
      C: { en: "Regulate Emotions", vi: "Điều chỉnh cảm xúc" },
      D: { en: "Suppress Emotions", vi: "Kìm nén cảm xúc" }
    },
    correctAnswer: "C",
    explanationEn: "Regulating emotions is the highest step, requiring emotional stability.",
    explanationVi: "Điều chỉnh cảm xúc là bước cao nhất, đòi hỏi sự ổn định cảm xúc.",
    relatedSectionId: "4.5.1",
    topic: "Cascading Model of EI"
  },
  {
    id: "q424",
    chapter: 4,
    questionEn: "Which of the following is an emotion regulation technique?",
    questionVi: "Điều nào sau đây là một kỹ thuật điều chỉnh cảm xúc?",
    options: {
      A: { en: "Cognitive reappraisal", vi: "Tái đánh giá nhận thức" },
      B: { en: "Ignoring the problem", vi: "Bỏ qua vấn đề" },
      C: { en: "Getting angry at everyone", vi: "Tức giận với tất cả mọi người" },
      D: { en: "Quitting the job immediately", vi: "Nghỉ việc ngay lập tức" }
    },
    correctAnswer: "A",
    explanationEn: "Cognitive reappraisal involves changing how one thinks about a situation to modify its emotional impact.",
    explanationVi: "Tái đánh giá nhận thức liên quan đến việc thay đổi cách suy nghĩ về một tình huống để sửa đổi tác động cảm xúc của nó.",
    relatedSectionId: "4.6.1",
    topic: "Emotion Regulation"
  },
  {
    id: "q425",
    chapter: 4,
    questionEn: "What is 'Social Sharing' as an emotion regulation strategy?",
    questionVi: "'Chia sẻ xã hội' (Social Sharing) như một chiến lược điều chỉnh cảm xúc là gì?",
    options: {
      A: { en: "Posting on social media only.", vi: "Chỉ đăng bài trên mạng xã hội." },
      B: { en: "Venting or talking to others about one's feelings.", vi: "Giải tỏa hoặc nói chuyện với người khác về cảm xúc của mình." },
      C: { en: "Sharing office supplies.", vi: "Chia sẻ văn phòng phẩm." },
      D: { en: "Giving money to charity.", vi: "Quyên góp tiền cho từ thiện." }
    },
    correctAnswer: "B",
    explanationEn: "Social sharing involves talking to others to help soothe the mind and process emotions.",
    explanationVi: "Chia sẻ xã hội liên quan đến việc nói chuyện với người khác để giúp xoa dịu tâm trí và xử lý cảm xúc.",
    relatedSectionId: "4.6.1",
    topic: "Social Sharing"
  },
  {
    id: "q426",
    chapter: 4,
    questionEn: "Is emotion regulation always ethical?",
    questionVi: "Điều chỉnh cảm xúc có luôn hợp đạo đức không?",
    options: {
      A: { en: "Yes, always.", vi: "Có, luôn luôn." },
      B: { en: "No, some argue it is unethical because it requires acting or being fake.", vi: "Không, một số người cho rằng nó phi đạo đức vì nó đòi hỏi sự diễn xuất hoặc giả tạo." },
      C: { en: "It is only ethical for managers.", vi: "Nó chỉ hợp đạo đức đối với các nhà quản lý." },
      D: { en: "It is only ethical on weekends.", vi: "Nó chỉ hợp đạo đức vào cuối tuần." }
    },
    correctAnswer: "B",
    explanationEn: "There is an ethical debate; some see it as fake, while others see it as necessary for professional behavior.",
    explanationVi: "Có một cuộc tranh luận về đạo đức; một số người coi đó là giả tạo, trong khi những người khác coi đó là cần thiết cho hành vi chuyên nghiệp.",
    relatedSectionId: "4.6.2",
    topic: "Ethics of Emotion Regulation"
  },
  {
    id: "q427",
    chapter: 4,
    questionEn: "What is 'Emotional Contagion'?",
    questionVi: "'Sự lây lan cảm xúc' (Emotional Contagion) là gì?",
    options: {
      A: { en: "A type of flu.", vi: "Một loại cúm." },
      B: { en: "The process by which peoples' emotions are caused by the emotions of others.", vi: "Quá trình mà cảm xúc của mọi người bị gây ra bởi cảm xúc của người khác." },
      C: { en: "Crying when watching a movie.", vi: "Khóc khi xem phim." },
      D: { en: "Being afraid of germs.", vi: "Sợ vi trùng." }
    },
    correctAnswer: "B",
    explanationEn: "Emotional contagion is the 'catching' of emotions from others, common in customer service.",
    explanationVi: "Lây lan cảm xúc là việc 'bắt' cảm xúc từ người khác, phổ biến trong dịch vụ khách hàng.",
    relatedSectionId: "4.7.7",
    topic: "Emotional Contagion"
  },
  {
    id: "q428",
    chapter: 4,
    questionEn: "How do positive emotions affect decision making?",
    questionVi: "Cảm xúc tích cực ảnh hưởng đến việc ra quyết định như thế nào?",
    options: {
      A: { en: "They make people slow and indecisive.", vi: "Chúng làm con người chậm chạp và thiếu quyết đoán." },
      B: { en: "They can lead to better, faster, and more accurate decisions.", vi: "Chúng có thể dẫn đến các quyết định tốt hơn, nhanh hơn và chính xác hơn." },
      C: { en: "They have no effect.", vi: "Chúng không có tác dụng." },
      D: { en: "They always lead to bad investments.", vi: "Chúng luôn dẫn đến các khoản đầu tư tồi." }
    },
    correctAnswer: "B",
    explanationEn: "Positive emotions help people process complex information better and make bolder, more accurate decisions.",
    explanationVi: "Cảm xúc tích cực giúp mọi người xử lý thông tin phức tạp tốt hơn và đưa ra các quyết định táo bạo, chính xác hơn.",
    relatedSectionId: "4.7.2",
    topic: "Decision Making"
  },
  {
    id: "q429",
    chapter: 4,
    questionEn: "Why is EI important in the selection process?",
    questionVi: "Tại sao EI lại quan trọng trong quá trình tuyển dụng?",
    options: {
      A: { en: "It measures physical strength.", vi: "Nó đo lường sức mạnh thể chất." },
      B: { en: "It is a good predictor of performance, especially in social jobs.", vi: "Nó là một yếu tố dự báo tốt về hiệu suất, đặc biệt là trong các công việc xã hội." },
      C: { en: "It helps calculate taxes.", vi: "Nó giúp tính thuế." },
      D: { en: "It is required by law in all countries.", vi: "Nó được luật pháp yêu cầu ở tất cả các quốc gia." }
    },
    correctAnswer: "B",
    explanationEn: "EI is a valuable hiring factor for jobs requiring high social interaction.",
    explanationVi: "EI là một yếu tố tuyển dụng có giá trị cho các công việc đòi hỏi tương tác xã hội cao.",
    relatedSectionId: "4.7.1",
    topic: "Selection"
  },
  {
    id: "q430",
    chapter: 4,
    questionEn: "How does a positive mood impact creativity?",
    questionVi: "Tâm trạng tích cực tác động đến sự sáng tạo như thế nào?",
    options: {
      A: { en: "It decreases flexibility.", vi: "Nó làm giảm tính linh hoạt." },
      B: { en: "It increases flexibility, openness, and the ability to generate unique ideas.", vi: "Nó làm tăng tính linh hoạt, sự cởi mở và khả năng tạo ra các ý tưởng độc đáo." },
      C: { en: "It makes people too lazy to be creative.", vi: "Nó làm con người quá lười biếng để sáng tạo." },
      D: { en: "It has no impact on marketing teams.", vi: "Nó không có tác động đến các nhóm marketing." }
    },
    correctAnswer: "B",
    explanationEn: "Positive moods enhance creative thinking and flexibility.",
    explanationVi: "Tâm trạng tích cực tăng cường tư duy sáng tạo và tính linh hoạt.",
    relatedSectionId: "4.7.3",
    topic: "Creativity"
  },
  {
    id: "q431",
    chapter: 4,
    questionEn: "In negotiation, a skilled salesperson should:",
    questionVi: "Trong đàm phán, một nhân viên bán hàng lành nghề nên:",
    options: {
      A: { en: "Show all their anxiety.", vi: "Thể hiện tất cả sự lo lắng của họ." },
      B: { en: "Control their emotions and not reveal negative feelings like anxiety.", vi: "Kiểm soát cảm xúc và không để lộ các cảm nhận tiêu cực như lo lắng." },
      C: { en: "Cry to get a better deal.", vi: "Khóc để có được thỏa thuận tốt hơn." },
      D: { en: "Ignore the client's emotions.", vi: "Bỏ qua cảm xúc của khách hàng." }
    },
    correctAnswer: "B",
    explanationEn: "Controlling emotions helps maintain a strong position during negotiations.",
    explanationVi: "Kiểm soát cảm xúc giúp duy trì vị thế vững chắc trong quá trình đàm phán.",
    relatedSectionId: "4.7.6",
    topic: "Negotiation"
  },
  {
    id: "q432",
    chapter: 4,
    questionEn: "Negative emotions at work can lead to 'deviant behaviors' such as:",
    questionVi: "Cảm xúc tiêu cực tại nơi làm việc có thể dẫn đến 'hành vi sai lệch' chẳng hạn như:",
    options: {
      A: { en: "Helping others", vi: "Giúp đỡ người khác" },
      B: { en: "Leaking confidential data or sabotage.", vi: "Rò rỉ dữ liệu mật hoặc phá hoại." },
      C: { en: "Arriving early", vi: "Đến sớm" },
      D: { en: "Organizing office parties", vi: "Tổ chức tiệc văn phòng" }
    },
    correctAnswer: "B",
    explanationEn: "Negative emotions like anger can trigger unethical or deviant workplace behaviors.",
    explanationVi: "Cảm xúc tiêu cực như tức giận có thể kích hoạt các hành vi sai trái hoặc sai lệch tại nơi làm việc.",
    relatedSectionId: "4.7.9",
    topic: "Unethical Behaviors"
  },
  {
    id: "q433",
    chapter: 4,
    questionEn: "Why is it dangerous to work in a 'bad mood' in high-risk jobs?",
    questionVi: "Tại sao làm việc trong 'tâm trạng tồi tệ' lại nguy hiểm trong các công việc rủi ro cao?",
    options: {
      A: { en: "It makes the uniform look bad.", vi: "Nó làm cho đồng phục trông xấu đi." },
      B: { en: "It reduces attention to safety rules and increases the risk of accidents.", vi: "Nó làm giảm sự chú ý vào các quy tắc an toàn và tăng nguy cơ tai nạn." },
      C: { en: "It costs more in insurance.", vi: "Nó tốn nhiều tiền bảo hiểm hơn." },
      D: { en: "Co-workers will be annoyed.", vi: "Đồng nghiệp sẽ bị làm phiền." }
    },
    correctAnswer: "B",
    explanationEn: "Bad moods distract workers from safety protocols, leading to injuries.",
    explanationVi: "Tâm trạng tồi tệ làm xao nhãng công nhân khỏi các quy trình an toàn, dẫn đến chấn thương.",
    relatedSectionId: "4.7.10",
    topic: "Safety"
  },
  {
    id: "q434",
    chapter: 4,
    questionEn: "What does 'dissipates overnight' mean regarding work-life conflict?",
    questionVi: "'Tiêu tan sau một đêm' (dissipates overnight) có nghĩa là gì liên quan đến xung đột công việc - cuộc sống?",
    options: {
      A: { en: "The job disappears.", vi: "Công việc biến mất." },
      B: { en: "Negative moods from work often return to normal after a night's sleep.", vi: "Tâm trạng tiêu cực từ công việc thường trở lại bình thường sau một đêm ngủ." },
      C: { en: "Employees forget their salary.", vi: "Nhân viên quên lương của họ." },
      D: { en: "The office is cleaned at night.", vi: "Văn phòng được dọn dẹp vào ban đêm." }
    },
    correctAnswer: "B",
    explanationEn: "Most daily negative moods from work do not persist indefinitely and reset after sleep.",
    explanationVi: "Hầu hết các tâm trạng tiêu cực hàng ngày từ công việc không tồn tại vô hạn và được thiết lập lại sau khi ngủ.",
    relatedSectionId: "4.7.8",
    topic: "Work-Life Conflict"
  },
  {
    id: "q435",
    chapter: 4,
    questionEn: "A manager who uses 'Emotional Stability' to stay calm when an employee is rude is practicing:",
    questionVi: "Một nhà quản lý sử dụng 'Sự ổn định cảm xúc' để giữ bình tĩnh khi nhân viên thô lỗ đang thực hành:",
    options: {
      A: { en: "Perceiving emotions", vi: "Nhận biết cảm xúc" },
      B: { en: "Regulating emotions", vi: "Điều chỉnh cảm xúc" },
      C: { en: "Ignoring emotions", vi: "Bỏ qua cảm xúc" },
      D: { en: "Surface acting", vi: "Diễn bề ngoài" }
    },
    correctAnswer: "B",
    explanationEn: "Regulating emotions is the ability to manage one's own emotional response to a situation.",
    explanationVi: "Điều chỉnh cảm xúc là khả năng quản lý phản ứng cảm xúc của chính mình đối với một tình huống.",
    relatedSectionId: "4.5.1",
    topic: "Regulating Emotions"
  },
  {
    id: "q436",
    chapter: 4,
    questionEn: "Which of the following is a 'displayed emotion' for a flight attendant?",
    questionVi: "Điều nào sau đây là một 'cảm xúc được thể hiện' (displayed emotion) đối với một tiếp viên hàng không?",
    options: {
      A: { en: "Feeling tired after a long flight.", vi: "Cảm thấy mệt mỏi sau một chuyến bay dài." },
      B: { en: "Smiling and being friendly to passengers.", vi: "Mỉm cười và thân thiện với hành khách." },
      C: { en: "Being angry at a rude passenger internally.", vi: "Tức giận thầm kín với một hành khách thô lỗ." },
      D: { en: "Thinking about dinner.", vi: "Nghĩ về bữa tối." }
    },
    correctAnswer: "B",
    explanationEn: "Displayed emotions are those required by the organization for the job role.",
    explanationVi: "Cảm xúc được thể hiện là những cảm xúc mà tổ chức yêu cầu cho vai trò công việc.",
    relatedSectionId: "4.3.1",
    topic: "Displayed Emotions"
  },
  {
    id: "q437",
    chapter: 4,
    questionEn: "What is the main drawback of 'Emotional Suppression'?",
    questionVi: "Nhược điểm chính của 'Kìm nén cảm xúc' (Emotional Suppression) là gì?",
    options: {
      A: { en: "It is too expensive.", vi: "Nó quá đắt đỏ." },
      B: { en: "It doesn't solve the root cause and can lead to burnout.", vi: "Nó không giải quyết được nguyên nhân gốc rễ và có thể dẫn đến kiệt sức." },
      C: { en: "It makes people too happy.", vi: "Nó làm con người quá hạnh phúc." },
      D: { en: "It is illegal.", vi: "Nó là bất hợp pháp." }
    },
    correctAnswer: "B",
    explanationEn: "Suppression only hides the emotion and doesn't provide real relief or resolution.",
    explanationVi: "Kìm nén chỉ che giấu cảm xúc và không cung cấp sự giải tỏa hoặc giải quyết thực sự.",
    relatedSectionId: "4.6.1",
    topic: "Emotional Suppression"
  },
  {
    id: "q438",
    chapter: 4,
    questionEn: "In AET, what does 'accumulate' mean?",
    questionVi: "Trong AET, 'tích tụ' (accumulate) có nghĩa là gì?",
    options: {
      A: { en: "To lose money.", vi: "Mất tiền." },
      B: { en: "Small emotional responses building up over time into a larger reaction.", vi: "Các phản ứng cảm xúc nhỏ tích tụ theo thời gian thành một phản ứng lớn hơn." },
      C: { en: "To hire more people.", vi: "Thuê thêm người." },
      D: { en: "To clean the office.", vi: "Dọn dẹp văn phòng." }
    },
    correctAnswer: "B",
    explanationEn: "Accumulation refers to the build-up of minor emotional events into significant issues.",
    explanationVi: "Tích tụ đề cập đến việc xây dựng các sự kiện cảm xúc nhỏ thành các vấn đề lớn.",
    relatedSectionId: "4.4.1",
    topic: "AET"
  },
  {
    id: "q439",
    chapter: 4,
    questionEn: "Which of the following is an example of 'Affect'?",
    questionVi: "Ví dụ nào sau đây là một ví dụ về 'Xúc cảm' (Affect)?",
    options: {
      A: { en: "Both emotions and moods.", vi: "Cả cảm xúc và tâm trạng." },
      B: { en: "Only physical pain.", vi: "Chỉ là nỗi đau thể xác." },
      C: { en: "Only logical thoughts.", vi: "Chỉ là những suy nghĩ logic." },
      D: { en: "Only financial data.", vi: "Chỉ là dữ liệu tài chính." }
    },
    correctAnswer: "A",
    explanationEn: "Affect is the broad category that includes all feelings, both specific emotions and general moods.",
    explanationVi: "Affect là danh mục rộng bao gồm tất cả các cảm giác, cả cảm xúc cụ thể và tâm trạng chung.",
    relatedSectionId: "4.1",
    topic: "Affect"
  },
  {
    id: "q440",
    chapter: 4,
    questionEn: "A person who is 'always grumpy' regardless of what happens likely has a specific:",
    questionVi: "Một người 'luôn cáu kỉnh' bất kể điều gì xảy ra có khả năng có một cái gì đó cụ thể:",
    options: {
      A: { en: "Emotion", vi: "Cảm xúc" },
      B: { en: "Mood", vi: "Tâm trạng" },
      C: { en: "Trait component of personality", vi: "Thành phần đặc điểm của tính cách" },
      D: { en: "High IQ", vi: "Chỉ số IQ cao" }
    },
    correctAnswer: "C",
    explanationEn: "Personality traits can predispose individuals to certain moods or emotional intensities.",
    explanationVi: "Các đặc điểm tính cách có thể khiến cá nhân có xu hướng rơi vào các tâm trạng hoặc cường độ cảm xúc nhất định.",
    relatedSectionId: "4.2.1",
    topic: "Personality"
  },
  {
    id: "q441",
    chapter: 4,
    questionEn: "Which day of the week do people usually report the highest positive affect?",
    questionVi: "Ngày nào trong tuần mọi người thường báo cáo mức xúc cảm tích cực cao nhất?",
    options: {
      A: { en: "Monday", vi: "Thứ Hai" },
      B: { en: "Wednesday", vi: "Thứ Tư" },
      C: { en: "Friday or weekends", vi: "Thứ Sáu hoặc cuối tuần" },
      D: { en: "Tuesday", vi: "Thứ Ba" }
    },
    correctAnswer: "C",
    explanationEn: "Positive affect is generally higher toward the end of the work week and on weekends.",
    explanationVi: "Xúc cảm tích cực thường cao hơn vào cuối tuần làm việc và vào cuối tuần.",
    relatedSectionId: "4.2.2",
    topic: "Day of the Week"
  },
  {
    id: "q442",
    chapter: 4,
    questionEn: "What is the best advice for a manager regarding 'Surface Acting'?",
    questionVi: "Lời khuyên tốt nhất cho một nhà quản lý liên quan đến 'Diễn bề ngoài' là gì?",
    options: {
      A: { en: "Encourage it as much as possible.", vi: "Khuyến khích nó càng nhiều càng tốt." },
      B: { en: "Train employees to use deep acting and cognitive reappraisal instead.", vi: "Đào tạo nhân viên sử dụng diễn sâu và tái đánh giá nhận thức thay thế." },
      C: { en: "Ignore it.", vi: "Bỏ qua nó." },
      D: { en: "Fire anyone who does it.", vi: "Sa thải bất cứ ai làm điều đó." }
    },
    correctAnswer: "B",
    explanationEn: "Deep acting and reappraisal are more effective and less draining than surface acting.",
    explanationVi: "Diễn sâu và tái đánh giá hiệu quả hơn và ít gây kiệt sức hơn diễn bề ngoài.",
    relatedSectionId: "4.6.2",
    topic: "Managerial Advice"
  },
  {
    id: "q443",
    chapter: 4,
    questionEn: "How does 'Cognitive Reappraisal' work?",
    questionVi: "'Tái đánh giá nhận thức' hoạt động như thế nào?",
    options: {
      A: { en: "By shouting loudly.", vi: "Bằng cách hét thật to." },
      B: { en: "By changing the way you perceive the situation that caused the emotion.", vi: "Bằng cách thay đổi cách bạn nhìn nhận tình huống đã gây ra cảm xúc." },
      C: { en: "By taking a nap.", vi: "Bằng cách đi ngủ trưa." },
      D: { en: "By quitting the job.", vi: "Bằng cách nghỉ việc." }
    },
    correctAnswer: "B",
    explanationEn: "Reappraisal involves reframing a situation to reduce its negative emotional impact.",
    explanationVi: "Tái đánh giá liên quan đến việc định khung lại một tình huống để giảm tác động cảm xúc tiêu cực của nó.",
    relatedSectionId: "4.6.1",
    topic: "Cognitive Reappraisal"
  },
  {
    id: "q444",
    chapter: 4,
    questionEn: "Which of the following is a 'negative affect' dimension of mood?",
    questionVi: "Điều nào sau đây là một chiều 'xúc cảm tiêu cực' của tâm trạng?",
    options: {
      A: { en: "Excitement", vi: "Hào hứng" },
      B: { en: "Nervousness or stress", vi: "Lo lắng hoặc căng thẳng" },
      C: { en: "Relaxation", vi: "Thư giãn" },
      D: { en: "Happiness", vi: "Hạnh phúc" }
    },
    correctAnswer: "B",
    explanationEn: "Negative affect includes states like nervousness, stress, and anxiety.",
    explanationVi: "Xúc cảm tiêu cực bao gồm các trạng thái như lo lắng, căng thẳng và bất an.",
    relatedSectionId: "4.1.1",
    topic: "Mood Dimensions"
  },
  {
    id: "q445",
    chapter: 4,
    questionEn: "What is the 'Cascading Model' of EI?",
    questionVi: "'Mô hình thác đổ' của EI là gì?",
    options: {
      A: { en: "A model for water management.", vi: "Một mô hình quản lý nước." },
      B: { en: "A sequential process of perceiving, understanding, and regulating emotions.", vi: "Một quá trình tuần tự gồm nhận biết, thấu hiểu và điều chỉnh cảm xúc." },
      C: { en: "A way to increase sales.", vi: "Một cách để tăng doanh số." },
      D: { en: "A type of organizational structure.", vi: "Một loại cấu trúc tổ chức." }
    },
    correctAnswer: "B",
    explanationEn: "The model shows how EI skills build upon each other in a specific order.",
    explanationVi: "Mô hình cho thấy các kỹ năng EI xây dựng dựa trên nhau theo một thứ tự cụ thể.",
    relatedSectionId: "4.5",
    topic: "EI Model"
  },
  {
    id: "q446",
    chapter: 4,
    questionEn: "Which EI step is most linked to 'Cognitive Ability'?",
    questionVi: "Bước EI nào liên kết nhất với 'Năng lực nhận thức'?",
    options: {
      A: { en: "Perceive", vi: "Nhận biết" },
      B: { en: "Understand", vi: "Thấu hiểu" },
      C: { en: "Regulate", vi: "Điều chỉnh" },
      D: { en: "Suppress", vi: "Kìm nén" }
    },
    correctAnswer: "B",
    explanationEn: "Understanding emotions requires logical analysis of why they occur.",
    explanationVi: "Thấu hiểu cảm xúc đòi hỏi sự phân tích logic về lý do tại sao chúng xảy ra.",
    relatedSectionId: "4.5.1",
    topic: "EI Model"
  },
  {
    id: "q447",
    chapter: 4,
    questionEn: "Which EI step is most linked to 'Conscientiousness'?",
    questionVi: "Bước EI nào liên kết nhất với 'Sự tận tâm'?",
    options: {
      A: { en: "Perceive", vi: "Nhận biết" },
      B: { en: "Understand", vi: "Thấu hiểu" },
      C: { en: "Regulate", vi: "Điều chỉnh" },
      D: { en: "Ignore", vi: "Bỏ qua" }
    },
    correctAnswer: "A",
    explanationEn: "Conscientious people are more observant and better at perceiving emotional cues.",
    explanationVi: "Những người tận tâm quan sát tốt hơn và giỏi hơn trong việc nhận biết các tín hiệu cảm xúc.",
    relatedSectionId: "4.5.1",
    topic: "EI Model"
  },
  {
    id: "q448",
    chapter: 4,
    questionEn: "Which EI step is most linked to 'Emotional Stability'?",
    questionVi: "Bước EI nào liên kết nhất với 'Sự ổn định cảm xúc'?",
    options: {
      A: { en: "Perceive", vi: "Nhận biết" },
      B: { en: "Understand", vi: "Thấu hiểu" },
      C: { en: "Regulate", vi: "Điều chỉnh" },
      D: { en: "Create", vi: "Tạo ra" }
    },
    correctAnswer: "C",
    explanationEn: "Emotional stability allows a person to keep a 'cool head' and regulate their reactions.",
    explanationVi: "Sự ổn định cảm xúc cho phép một người giữ 'cái đầu lạnh' và điều chỉnh các phản ứng của họ.",
    relatedSectionId: "4.5.1",
    topic: "EI Model"
  },
  {
    id: "q449",
    chapter: 4,
    questionEn: "What is the impact of a leader's positive emotions on employees?",
    questionVi: "Tác động của cảm xúc tích cực của nhà lãnh đạo đối với nhân viên là gì?",
    options: {
      A: { en: "It makes them jealous.", vi: "Nó làm họ ghen tị." },
      B: { en: "It makes them more likely to accept the leader's message and be motivated.", vi: "Nó làm họ dễ chấp nhận thông điệp của nhà lãnh đạo và có động lực hơn." },
      C: { en: "It has no impact.", vi: "Nó không có tác động." },
      D: { en: "It makes them work slower.", vi: "Nó làm họ làm việc chậm hơn." }
    },
    correctAnswer: "B",
    explanationEn: "Enthusiastic and sincere leadership positively influences employee acceptance and motivation.",
    explanationVi: "Sự lãnh đạo nhiệt huyết và chân thành ảnh hưởng tích cực đến sự chấp nhận và động lực của nhân viên.",
    relatedSectionId: "4.7.5",
    topic: "Leadership"
  },
  {
    id: "q450",
    chapter: 4,
    questionEn: "Why should HR use EI tests for customer service roles?",
    questionVi: "Tại sao nhân sự nên sử dụng các bài kiểm tra EI cho các vai trò dịch vụ khách hàng?",
    options: {
      A: { en: "To see if they can type fast.", vi: "Để xem họ có thể đánh máy nhanh không." },
      B: { en: "To see if they can stay calm and handle difficult social interactions.", vi: "Để xem họ có thể giữ bình tĩnh và xử lý các tương tác xã hội khó khăn không." },
      C: { en: "To check their physical health.", vi: "Để kiểm tra sức khỏe thể chất của họ." },
      D: { en: "To save time during interviews.", vi: "Để tiết kiệm thời gian trong các cuộc phỏng vấn." }
    },
    correctAnswer: "B",
    explanationEn: "EI is critical for roles that involve high levels of emotional labor and social interaction.",
    explanationVi: "EI rất quan trọng cho các vai trò liên quan đến mức độ lao động cảm xúc và tương tác xã hội cao.",
    relatedSectionId: "4.7.1",
    topic: "Selection"
  },

  // --- CHAPTER 6: Perception and Individual Decision Making (50 questions) ---
  {
    id: "q601",
    chapter: 6,
    questionEn: "What is the definition of perception in OB?",
    questionVi: "Định nghĩa về nhận thức trong OB là gì?",
    options: {
      A: { en: "The process of gathering raw data from the environment.", vi: "Quá trình thu thập dữ liệu thô từ môi trường." },
      B: { en: "A process by which individuals organize and interpret sensory impressions to give meaning to their environment.", vi: "Quá trình mà cá nhân sắp xếp và diễn dịch các ấn tượng giác quan để mang lại ý nghĩa cho môi trường." },
      C: { en: "The objective reality of the physical world.", vi: "Thực tại khách quan của thế giới vật lý." },
      D: { en: "The ability to see things exactly as they are.", vi: "Khả năng nhìn nhận sự vật chính xác như chúng vốn có." }
    },
    correctAnswer: "B",
    explanationEn: "Perception is the process of organizing and interpreting sensory impressions to give meaning to the environment.",
    explanationVi: "Nhận thức là quá trình sắp xếp và diễn dịch các ấn tượng giác quan để mang lại ý nghĩa cho môi trường.",
    relatedSectionId: "6.1",
    topic: "Defining Perception"
  },
  {
    id: "q602",
    chapter: 6,
    questionEn: "Why is perception important in the study of OB?",
    questionVi: "Tại sao nhận thức lại quan trọng trong nghiên cứu OB?",
    options: {
      A: { en: "Because people's behavior is based on their perception of reality, not reality itself.", vi: "Vì hành vi của con người dựa trên nhận thức của họ về thực tại, chứ không phải bản thân thực tại." },
      B: { en: "Because reality is always the same for everyone.", vi: "Vì thực tại luôn giống nhau đối với mọi người." },
      C: { en: "Because it helps in measuring physical strength.", vi: "Vì nó giúp đo lường sức mạnh thể chất." },
      D: { en: "Because it is the only way to gather objective data.", vi: "Vì đó là cách duy nhất để thu thập dữ liệu khách quan." }
    },
    correctAnswer: "A",
    explanationEn: "People act based on what they perceive, which may differ from objective reality.",
    explanationVi: "Con người hành động dựa trên những gì họ nhận thức được, điều này có thể khác với thực tại khách quan.",
    relatedSectionId: "6.1",
    topic: "Importance of Perception"
  },
  {
    id: "q603",
    chapter: 6,
    questionEn: "Which of the following is a factor in the perceiver that influences perception?",
    questionVi: "Yếu tố nào sau đây thuộc về người nhận thức ảnh hưởng đến nhận thức?",
    options: {
      A: { en: "Novelty", vi: "Sự mới lạ" },
      B: { en: "Motives", vi: "Động cơ" },
      C: { en: "Sounds", vi: "Âm thanh" },
      D: { en: "Size", vi: "Kích thước" }
    },
    correctAnswer: "B",
    explanationEn: "Factors in the perceiver include attitudes, motives, interests, experience, and expectations.",
    explanationVi: "Các yếu tố ở người nhận thức bao gồm thái độ, động cơ, sở thích, kinh nghiệm và kỳ vọng.",
    relatedSectionId: "6.1.1",
    topic: "Factors in the Perceiver"
  },
  {
    id: "q604",
    chapter: 6,
    questionEn: "How does 'Novelty' influence perception?",
    questionVi: "Sự 'mới lạ' ảnh hưởng đến nhận thức như thế nào?",
    options: {
      A: { en: "It is a factor in the perceiver.", vi: "Nó là một yếu tố ở người nhận thức." },
      B: { en: "It is a factor in the target that attracts attention.", vi: "Nó là một yếu tố ở đối tượng thu hút sự chú ý." },
      C: { en: "It is a factor in the situation.", vi: "Nó là một yếu tố trong tình huống." },
      D: { en: "It has no influence on perception.", vi: "Nó không có ảnh hưởng đến nhận thức." }
    },
    correctAnswer: "B",
    explanationEn: "Novelty is a characteristic of the target that makes it stand out from the background.",
    explanationVi: "Sự mới lạ là một đặc điểm của đối tượng khiến nó nổi bật so với bối cảnh.",
    relatedSectionId: "6.1.2",
    topic: "Factors in the Target"
  },
  {
    id: "q605",
    chapter: 6,
    questionEn: "Which of the following is a factor in the situation that influences perception?",
    questionVi: "Yếu tố nào sau đây thuộc về tình huống ảnh hưởng đến nhận thức?",
    options: {
      A: { en: "Time", vi: "Thời gian" },
      B: { en: "Attitudes", vi: "Thái độ" },
      C: { en: "Motion", vi: "Sự chuyển động" },
      D: { en: "Proximity", vi: "Khoảng cách" }
    },
    correctAnswer: "A",
    explanationEn: "Factors in the situation include time, work setting, and social setting.",
    explanationVi: "Các yếu tố trong tình huống bao gồm thời gian, môi trường làm việc và bối cảnh xã hội.",
    relatedSectionId: "6.1.3",
    topic: "Factors in the Situation"
  },
  {
    id: "q606",
    chapter: 6,
    questionEn: "What does Attribution Theory try to explain?",
    questionVi: "Thuyết quy gán cố gắng giải thích điều gì?",
    options: {
      A: { en: "How people perceive physical objects.", vi: "Cách con người nhận thức các vật thể vật lý." },
      B: { en: "How we judge people differently depending on what meaning we attribute to a given behavior.", vi: "Cách chúng ta đánh giá con người khác nhau tùy thuộc vào ý nghĩa mà chúng ta gán cho một hành vi nhất định." },
      C: { en: "The process of making rational decisions.", vi: "Quá trình đưa ra các quyết định hợp lý." },
      D: { en: "The impact of culture on perception.", vi: "Tác động của văn hóa đối với nhận thức." }
    },
    correctAnswer: "B",
    explanationEn: "Attribution theory explains whether we attribute behavior to internal or external causes.",
    explanationVi: "Thuyết quy gán giải thích liệu chúng ta gán hành vi cho nguyên nhân bên trong hay bên ngoài.",
    relatedSectionId: "6.2",
    topic: "Attribution Theory"
  },
  {
    id: "q607",
    chapter: 6,
    questionEn: "In attribution theory, what does 'Consensus' refer to?",
    questionVi: "Trong thuyết quy gán, 'Sự đồng thuận' đề cập đến điều gì?",
    options: {
      A: { en: "Whether an individual displays different behaviors in different situations.", vi: "Liệu một cá nhân có biểu hiện các hành vi khác nhau trong các tình huống khác nhau hay không." },
      B: { en: "Whether everyone who is faced with a similar situation responds in the same way.", vi: "Liệu tất cả những người đối mặt với tình huống tương tự có phản ứng theo cùng một cách hay không." },
      C: { en: "Whether a person responds the same way over time.", vi: "Liệu một người có phản ứng giống nhau theo thời gian hay không." },
      D: { en: "The level of agreement in a group decision.", vi: "Mức độ đồng ý trong một quyết định nhóm." }
    },
    correctAnswer: "B",
    explanationEn: "Consensus is high if everyone in the same situation behaves the same way.",
    explanationVi: "Sự đồng thuận cao nếu mọi người trong cùng một tình huống đều hành xử giống nhau.",
    relatedSectionId: "6.2.1",
    topic: "Consensus"
  },
  {
    id: "q608",
    chapter: 6,
    questionEn: "If an employee is late for a meeting today but is usually very punctual, this behavior shows:",
    questionVi: "Nếu một nhân viên đi họp muộn hôm nay nhưng thường rất đúng giờ, hành vi này thể hiện:",
    options: {
      A: { en: "High consistency", vi: "Sự nhất quán cao" },
      B: { en: "Low consistency", vi: "Sự nhất quán thấp" },
      C: { en: "High consensus", vi: "Sự đồng thuận cao" },
      D: { en: "Low distinctiveness", vi: "Sự khác biệt thấp" }
    },
    correctAnswer: "B",
    explanationEn: "Consistency refers to whether the person responds the same way over time. Being late only once is low consistency.",
    explanationVi: "Sự nhất quán đề cập đến việc liệu người đó có phản ứng giống nhau theo thời gian hay không. Chỉ đi muộn một lần là sự nhất quán thấp.",
    relatedSectionId: "6.2.1",
    topic: "Consistency"
  },
  {
    id: "q609",
    chapter: 6,
    questionEn: "What is the Fundamental Attribution Error?",
    questionVi: "Lỗi quy gán cơ bản là gì?",
    options: {
      A: { en: "The tendency to underestimate the influence of external factors and overestimate the influence of internal factors when judging others.", vi: "Xu hướng đánh giá thấp ảnh hưởng của các yếu tố bên ngoài và đánh giá quá cao ảnh hưởng của các yếu tố bên trong khi đánh giá người khác." },
      B: { en: "The tendency to attribute our own successes to internal factors and failures to external factors.", vi: "Xu hướng gán thành công của chính mình cho các yếu tố bên trong và thất bại cho các yếu tố bên ngoài." },
      C: { en: "The process of simplifying complex problems.", vi: "Quá trình đơn giản hóa các vấn đề phức tạp." },
      D: { en: "Making decisions based on intuition.", vi: "Đưa ra quyết định dựa trên trực giác." }
    },
    correctAnswer: "A",
    explanationEn: "We often blame the person (internal) rather than the situation (external) when others fail.",
    explanationVi: "Chúng ta thường đổ lỗi cho con người (bên trong) thay vì tình huống (bên ngoài) khi người khác thất bại.",
    relatedSectionId: "6.2.2",
    topic: "Fundamental Attribution Error"
  },
  {
    id: "q610",
    chapter: 6,
    questionEn: "What is Self-Serving Bias?",
    questionVi: "Thiên kiến tự đề cao là gì?",
    options: {
      A: { en: "Blaming others for our own mistakes.", vi: "Đổ lỗi cho người khác về sai lầm của chính mình." },
      B: { en: "The tendency for individuals to attribute their own successes to internal factors while putting the blame for failures on external factors.", vi: "Xu hướng cá nhân gán thành công của mình cho các yếu tố bên trong trong khi đổ lỗi cho thất bại cho các yếu tố bên ngoài." },
      C: { en: "Overestimating the influence of internal factors in others.", vi: "Đánh giá quá cao ảnh hưởng của các yếu tố bên trong ở người khác." },
      D: { en: "Seeking information that confirms our beliefs.", vi: "Tìm kiếm thông tin xác nhận niềm tin của chúng ta." }
    },
    correctAnswer: "B",
    explanationEn: "Self-serving bias is the tendency to take credit for success and blame the situation for failure.",
    explanationVi: "Thiên kiến tự đề cao là xu hướng nhận công trạng khi thành công và đổ lỗi cho hoàn cảnh khi thất bại.",
    relatedSectionId: "6.2.2",
    topic: "Self-Serving Bias"
  },
  {
    id: "q611",
    chapter: 6,
    questionEn: "How is decision making linked to perception?",
    questionVi: "Việc ra quyết định liên kết với nhận thức như thế nào?",
    options: {
      A: { en: "Decisions are always based on objective data.", vi: "Quyết định luôn dựa trên dữ liệu khách quan." },
      B: { en: "Perception determines how a person 'sees' a problem and evaluates options.", vi: "Nhận thức quyết định cách một người 'thấy' một vấn đề và đánh giá các lựa chọn." },
      C: { en: "There is no link between the two.", vi: "Không có mối liên hệ nào giữa hai điều này." },
      D: { en: "Decision making is purely a logical process.", vi: "Ra quyết định thuần túy là một quá trình logic." }
    },
    correctAnswer: "B",
    explanationEn: "Perception filters the information used to identify problems and evaluate solutions.",
    explanationVi: "Nhận thức lọc thông tin được sử dụng để xác định vấn đề và đánh giá các giải pháp.",
    relatedSectionId: "6.3",
    topic: "Perception and Decision Making"
  },
  {
    id: "q612",
    chapter: 6,
    questionEn: "What is Confirmation Bias?",
    questionVi: "Thiên kiến xác nhận là gì?",
    options: {
      A: { en: "Seeking out information that reaffirms past choices and discounting information that contradicts them.", vi: "Tìm kiếm thông tin tái khẳng định các lựa chọn trong quá khứ và phớt lờ thông tin mâu thuẫn với chúng." },
      B: { en: "Making decisions based on the most recent information.", vi: "Đưa ra quyết định dựa trên thông tin gần đây nhất." },
      C: { en: "Increasing commitment to a failing course of action.", vi: "Tăng cường cam kết đối với một hướng hành động thất bại." },
      D: { en: "The tendency to believe we can predict the outcome of random events.", vi: "Xu hướng tin rằng chúng ta có thể dự đoán kết quả của các sự kiện ngẫu nhiên." }
    },
    correctAnswer: "A",
    explanationEn: "Confirmation bias involves selective perception to support existing beliefs.",
    explanationVi: "Thiên kiến xác nhận liên quan đến nhận thức có chọn lọc để hỗ trợ các niềm tin hiện có.",
    relatedSectionId: "6.3.1",
    topic: "Confirmation Bias"
  },
  {
    id: "q613",
    chapter: 6,
    questionEn: "What is Availability Bias?",
    questionVi: "Thiên kiến tính sẵn có là gì?",
    options: {
      A: { en: "The tendency to base judgments on information that is readily available to them.", vi: "Xu hướng đưa ra các phán quyết dựa trên thông tin sẵn có cho họ." },
      B: { en: "The tendency to overestimate our own abilities.", vi: "Xu hướng đánh giá quá cao khả năng của chính mình." },
      C: { en: "Sticking with a decision even when it's clearly wrong.", vi: "Bám chặt lấy một quyết định ngay cả khi nó rõ ràng là sai." },
      D: { en: "Searching for information that confirms our view.", vi: "Tìm kiếm thông tin xác nhận quan điểm của chúng ta." }
    },
    correctAnswer: "A",
    explanationEn: "Availability bias relies on vivid or recent memories rather than complete data.",
    explanationVi: "Thiên kiến tính sẵn có dựa trên những ký ức sống động hoặc gần đây thay vì dữ liệu đầy đủ.",
    relatedSectionId: "6.3.1",
    topic: "Availability Bias"
  },
  {
    id: "q614",
    chapter: 6,
    questionEn: "What is Escalation of Commitment?",
    questionVi: "Leo thang cam kết là gì?",
    options: {
      A: { en: "Switching to a better option quickly.", vi: "Chuyển sang một lựa chọn tốt hơn một cách nhanh chóng." },
      B: { en: "An increased commitment to a previous decision in spite of negative information.", vi: "Sự cam kết gia tăng đối với một quyết định trước đó bất chấp thông tin tiêu cực." },
      C: { en: "The process of gathering more data before deciding.", vi: "Quá trình thu thập thêm dữ liệu trước khi quyết định." },
      D: { en: "Making a decision based on intuition.", vi: "Đưa ra quyết định dựa trên trực giác." }
    },
    correctAnswer: "B",
    explanationEn: "Escalation of commitment happens when people feel responsible for a failure and try to 'fix' it by adding more resources.",
    explanationVi: "Leo thang cam kết xảy ra khi mọi người cảm thấy có trách nhiệm đối với một thất bại và cố gắng 'sửa chữa' nó bằng cách thêm nhiều nguồn lực hơn.",
    relatedSectionId: "6.3.1",
    topic: "Escalation of Commitment"
  },
  {
    id: "q615",
    chapter: 6,
    questionEn: "What is Bounded Rationality?",
    questionVi: "Tính hợp lý bị giới hạn là gì?",
    options: {
      A: { en: "Making perfectly logical decisions.", vi: "Đưa ra các quyết định hoàn toàn logic." },
      B: { en: "A process of making decisions by constructing simplified models that extract the essential features from problems without capturing all their complexity.", vi: "Một quá trình đưa ra quyết định bằng cách xây dựng các mô hình đơn giản hóa trích xuất các đặc điểm thiết yếu từ các vấn đề mà không nắm bắt được tất cả sự phức tạp của chúng." },
      C: { en: "Deciding based on pure emotion.", vi: "Quyết định dựa trên cảm xúc thuần túy." },
      D: { en: "The ability to process infinite information.", vi: "Khả năng xử lý thông tin vô hạn." }
    },
    correctAnswer: "B",
    explanationEn: "Because the human mind cannot handle all complexity, we simplify problems to find 'good enough' solutions.",
    explanationVi: "Vì tâm trí con người không thể xử lý tất cả sự phức tạp, chúng ta đơn giản hóa các vấn đề để tìm ra các giải pháp 'đủ tốt'.",
    relatedSectionId: "6.4.2",
    topic: "Bounded Rationality"
  },
  {
    id: "q616",
    chapter: 6,
    questionEn: "What does it mean to 'satisfice'?",
    questionVi: "'Satisfice' có nghĩa là gì?",
    options: {
      A: { en: "To find the absolute best solution.", vi: "Tìm ra giải pháp tốt nhất tuyệt đối." },
      B: { en: "To find a solution that is satisfactory and sufficient.", vi: "Tìm một giải pháp thỏa đáng và đủ tốt." },
      C: { en: "To delay a decision indefinitely.", vi: "Trì hoãn một quyết định vô thời hạn." },
      D: { en: "To make a decision based on a coin toss.", vi: "Đưa ra quyết định dựa trên việc tung đồng xu." }
    },
    correctAnswer: "B",
    explanationEn: "Satisficing is choosing the first acceptable option rather than searching for the optimal one.",
    explanationVi: "Satisficing là chọn phương án chấp nhận được đầu tiên thay vì tìm kiếm phương án tối ưu.",
    relatedSectionId: "6.4.2",
    topic: "Satisficing"
  },
  {
    id: "q617",
    chapter: 6,
    questionEn: "Which decision model is characterized by an unconscious process created out of distilled experience?",
    questionVi: "Mô hình quyết định nào được đặc trưng bởi một quá trình vô thức được tạo ra từ kinh nghiệm được chắt lọc?",
    options: {
      A: { en: "Rational Model", vi: "Mô hình hợp lý" },
      B: { en: "Bounded Rationality", vi: "Tính hợp lý bị giới hạn" },
      C: { en: "Intuition", vi: "Trực giác" },
      D: { en: "Groupthink", vi: "Tư duy nhóm" }
    },
    correctAnswer: "C",
    explanationEn: "Intuitive decision making is fast, affectively charged, and based on experience.",
    explanationVi: "Ra quyết định theo trực giác là nhanh chóng, bị chi phối bởi cảm xúc và dựa trên kinh nghiệm.",
    relatedSectionId: "6.4.3",
    topic: "Intuition"
  },
  {
    id: "q618",
    chapter: 6,
    questionEn: "How does 'Personality' affect decision making?",
    questionVi: "'Tính cách' ảnh hưởng đến việc ra quyết định như thế nào?",
    options: {
      A: { en: "It has no effect.", vi: "Nó không có tác dụng." },
      B: { en: "Traits like self-esteem or narcissism influence how people handle failure and take risks.", vi: "Các đặc điểm như lòng tự trọng hoặc tính ái kỷ ảnh hưởng đến cách mọi người xử lý thất bại và chấp nhận rủi ro." },
      C: { en: "It only affects group decisions.", vi: "Nó chỉ ảnh hưởng đến các quyết định nhóm." },
      D: { en: "It makes everyone decide in the same way.", vi: "Nó khiến mọi người quyết định theo cùng một cách." }
    },
    correctAnswer: "B",
    explanationEn: "Individual differences like personality traits create unique filters for perception and decision making.",
    explanationVi: "Sự khác biệt cá nhân như các đặc điểm tính cách tạo ra các bộ lọc duy nhất cho nhận thức và ra quyết định.",
    relatedSectionId: "6.5.1",
    topic: "Individual Differences"
  },
  {
    id: "q619",
    chapter: 6,
    questionEn: "What is an example of an organizational constraint on decision making?",
    questionVi: "Ví dụ về một ràng buộc tổ chức đối với việc ra quyết định là gì?",
    options: {
      A: { en: "Personal values", vi: "Giá trị cá nhân" },
      B: { en: "Performance Evaluation Systems", vi: "Hệ thống đánh giá hiệu suất" },
      C: { en: "Gender", vi: "Giới tính" },
      D: { en: "Mental ability", vi: "Năng lực trí tuệ" }
    },
    correctAnswer: "B",
    explanationEn: "Organizations limit decision makers through evaluation systems, reward systems, and formal regulations.",
    explanationVi: "Các tổ chức giới hạn những người ra quyết định thông qua hệ thống đánh giá, hệ thống khen thưởng và các quy định chính thức.",
    relatedSectionId: "6.5.2",
    topic: "Organizational Constraints"
  },
  {
    id: "q620",
    chapter: 6,
    questionEn: "How do 'Historical Precedents' constrain decisions?",
    questionVi: "'Tiền lệ lịch sử' ràng buộc các quyết định như thế nào?",
    options: {
      A: { en: "By providing perfect information.", vi: "Bằng cách cung cấp thông tin hoàn hảo." },
      B: { en: "Decisions are often framed by what has been done in the past, such as previous budget allocations.", vi: "Các quyết định thường bị đóng khung bởi những gì đã được thực hiện trong quá khứ, chẳng hạn như các phân bổ ngân sách trước đó." },
      C: { en: "By encouraging radical innovation.", vi: "Bằng cách khuyến khích sự đổi mới triệt để." },
      D: { en: "They have no impact on current decisions.", vi: "Chúng không có tác động đến các quyết định hiện tại." }
    },
    correctAnswer: "B",
    explanationEn: "Past choices act as a baseline that limits the range of current options.",
    explanationVi: "Các lựa chọn trong quá khứ đóng vai trò là một đường cơ sở giới hạn phạm vi của các lựa chọn hiện tại.",
    relatedSectionId: "6.5.2",
    topic: "Historical Precedents"
  },
  {
    id: "q621",
    chapter: 6,
    questionEn: "What is the focus of Utilitarianism in ethical decision making?",
    questionVi: "Trọng tâm của Chủ nghĩa vị lợi trong việc ra quyết định đạo đức là gì?",
    options: {
      A: { en: "Protecting individual rights.", vi: "Bảo vệ các quyền cá nhân." },
      B: { en: "Making decisions based on outcomes to provide the greatest good for the greatest number.", vi: "Đưa ra quyết định dựa trên kết quả để mang lại lợi ích lớn nhất cho số đông người nhất." },
      C: { en: "Ensuring fair distribution of benefits.", vi: "Đảm bảo phân phối công bằng các lợi ích." },
      D: { en: "Following formal regulations strictly.", vi: "Tuân thủ nghiêm ngặt các quy định chính thức." }
    },
    correctAnswer: "B",
    explanationEn: "Utilitarianism evaluates ethics based on the consequences or outcomes of an action.",
    explanationVi: "Chủ nghĩa vị lợi đánh giá đạo đức dựa trên hậu quả hoặc kết quả của một hành động.",
    relatedSectionId: "6.6.1",
    topic: "Utilitarianism"
  },
  {
    id: "q622",
    chapter: 6,
    questionEn: "Which ethical criterion focuses on protecting whistleblowers?",
    questionVi: "Tiêu chuẩn đạo đức nào tập trung vào việc bảo vệ những người tố cáo sai phạm?",
    options: {
      A: { en: "Utilitarianism", vi: "Chủ nghĩa vị lợi" },
      B: { en: "Focus on Rights", vi: "Tập trung vào Quyền" },
      C: { en: "Justice", vi: "Sự công bằng" },
      D: { en: "Rationality", vi: "Sự hợp lý" }
    },
    correctAnswer: "B",
    explanationEn: "The focus on rights protects individual liberties and privileges, including freedom of speech for whistleblowers.",
    explanationVi: "Việc tập trung vào quyền bảo vệ các quyền tự do và đặc quyền cá nhân, bao gồm quyền tự do ngôn luận cho những người tố cáo sai phạm.",
    relatedSectionId: "6.6.2",
    topic: "Focus on Rights"
  },
  {
    id: "q623",
    chapter: 6,
    questionEn: "What is the goal of the 'Justice' criterion in ethics?",
    questionVi: "Mục tiêu của tiêu chuẩn 'Công bằng' trong đạo đức là gì?",
    options: {
      A: { en: "To maximize profit.", vi: "Để tối đa hóa lợi nhuận." },
      B: { en: "To impose and enforce rules fairly and impartially to ensure equitable distribution of benefits and costs.", vi: "Để áp đặt và thực thi các quy tắc một cách công bằng và vô tư nhằm đảm bảo phân phối công bằng các lợi ích và chi phí." },
      C: { en: "To protect the privacy of individuals.", vi: "Để bảo vệ quyền riêng tư của cá nhân." },
      D: { en: "To follow the leader's intuition.", vi: "Để làm theo trực giác của người lãnh đạo." }
    },
    correctAnswer: "B",
    explanationEn: "Justice ensures that rules are applied consistently and fairly to all members of an organization.",
    explanationVi: "Sự công bằng đảm bảo rằng các quy tắc được áp dụng nhất quán và công bằng cho tất cả các thành viên của một tổ chức.",
    relatedSectionId: "6.6.3",
    topic: "Justice"
  },
  {
    id: "q624",
    chapter: 6,
    questionEn: "What are the two components of creativity?",
    questionVi: "Hai thành phần của sự sáng tạo là gì?",
    options: {
      A: { en: "Intelligence and hard work.", vi: "Trí thông minh và sự chăm chỉ." },
      B: { en: "Novelty and usefulness.", vi: "Sự mới mẻ và tính hữu ích." },
      C: { en: "Intuition and logic.", vi: "Trực giác và logic." },
      D: { en: "Art and science.", vi: "Nghệ thuật và khoa học." }
    },
    correctAnswer: "B",
    explanationEn: "Creativity is the ability to produce ideas that are both novel (new) and useful (applicable).",
    explanationVi: "Sáng tạo là khả năng tạo ra các ý tưởng vừa mới mẻ (mới) vừa hữu ích (có thể áp dụng)." ,
    relatedSectionId: "6.7",
    topic: "Defining Creativity"
  },
  {
    id: "q625",
    chapter: 6,
    questionEn: "In the three-stage model of creativity, what are the causes of creative behavior?",
    questionVi: "Trong mô hình sáng tạo 3 giai đoạn, nguyên nhân của hành vi sáng tạo là gì?",
    options: {
      A: { en: "Creative potential and creative environment.", vi: "Tiềm năng sáng tạo và môi trường sáng tạo." },
      B: { en: "Problem formulation and idea generation.", vi: "Định hình vấn đề và tạo ra ý tưởng." },
      C: { en: "Novelty and usefulness.", vi: "Sự mới mẻ và tính hữu ích." },
      D: { en: "Luck and timing.", vi: "Sự may mắn và thời điểm." }
    },
    correctAnswer: "A",
    explanationEn: "Creativity requires both the individual's potential and a supportive environment.",
    explanationVi: "Sự sáng tạo đòi hỏi cả tiềm năng của cá nhân và một môi trường hỗ trợ.",
    relatedSectionId: "6.7.1",
    topic: "Causes of Creativity"
  },
  {
    id: "q626",
    chapter: 6,
    questionEn: "What is the first step in creative behavior?",
    questionVi: "Bước đầu tiên trong hành vi sáng tạo là gì?",
    options: {
      A: { en: "Information gathering", vi: "Thu thập thông tin" },
      B: { en: "Problem formulation", vi: "Định hình vấn đề" },
      C: { en: "Idea generation", vi: "Tạo ra ý tưởng" },
      D: { en: "Idea evaluation", vi: "Đánh giá ý tưởng" }
    },
    correctAnswer: "B",
    explanationEn: "Creative behavior starts with identifying and defining a problem that needs a creative solution.",
    explanationVi: "Hành vi sáng tạo bắt đầu bằng việc xác định và định nghĩa một vấn đề cần một giải pháp sáng tạo.",
    relatedSectionId: "6.7.2",
    topic: "Creative Behavior Steps"
  },
  {
    id: "q627",
    chapter: 6,
    questionEn: "What is 'Creative Potential'?",
    questionVi: "'Tiềm năng sáng tạo' là gì?",
    options: {
      A: { en: "The physical space provided for work.", vi: "Không gian vật lý được cung cấp cho công việc." },
      B: { en: "The individual's inherent traits and abilities that allow for creative thinking.", vi: "Các đặc điểm và khả năng vốn có của cá nhân cho phép tư duy sáng tạo." },
      C: { en: "The final product of a creative process.", vi: "Sản phẩm cuối cùng của một quá trình sáng tạo." },
      D: { en: "The reward given for a new idea.", vi: "Phần thưởng được trao cho một ý tưởng mới." }
    },
    correctAnswer: "B",
    explanationEn: "Creative potential belongs to the individual, while the environment is an external cause.",
    explanationVi: "Tiềm năng sáng tạo thuộc về cá nhân, trong khi môi trường là một nguyên nhân bên ngoài.",
    relatedSectionId: "6.7.1",
    topic: "Creative Potential"
  },
  {
    id: "q628",
    chapter: 6,
    questionEn: "What is the 'Fundamental Attribution Error' specifically about?",
    questionVi: "'Lỗi quy gán cơ bản' cụ thể là về điều gì?",
    options: {
      A: { en: "Judging ourselves too harshly.", vi: "Đánh giá bản thân quá khắt khe." },
      B: { en: "Judging others by overestimating internal factors and underestimating external factors.", vi: "Đánh giá người khác bằng cách đánh giá quá cao các yếu tố bên trong và đánh giá thấp các yếu tố bên ngoài." },
      C: { en: "Judging others by overestimating external factors.", vi: "Đánh giá người khác bằng cách đánh giá quá cao các yếu tố bên ngoài." },
      D: { en: "Believing we are always right.", vi: "Tin rằng chúng ta luôn đúng." }
    },
    correctAnswer: "B",
    explanationEn: "It's a bias where we blame the person's character rather than the situation for their failure.",
    explanationVi: "Đó là một thiên kiến mà chúng ta đổ lỗi cho tính cách của con người thay vì tình huống cho thất bại của họ.",
    relatedSectionId: "6.2.2",
    topic: "Fundamental Attribution Error"
  },
  {
    id: "q629",
    chapter: 6,
    questionEn: "In the case of 'Al's Burgers', what was the manager's dilemma?",
    questionVi: "Trong trường hợp 'Al's Burgers', tình thế tiến thoái lưỡng nan của người quản lý là gì?",
    options: {
      A: { en: "Whether to fire an employee.", vi: "Liệu có nên sa thải một nhân viên hay không." },
      B: { en: "Whether the bad meat was due to external factors (weather/shipping) or internal factors (supplier negligence).", vi: "Liệu thịt hỏng là do các yếu tố bên ngoài (thời tiết/vận chuyển) hay các yếu tố bên trong (sự cẩu thả của nhà cung cấp)." },
      C: { en: "How to increase sales.", vi: "Làm thế nào để tăng doanh số bán hàng." },
      D: { en: "Which new burger to launch.", vi: "Nên tung ra loại burger mới nào." }
    },
    correctAnswer: "B",
    explanationEn: "The manager had to attribute the cause of the problem to decide whether to accept the shipment.",
    explanationVi: "Người quản lý phải quy gán nguyên nhân của vấn đề để quyết định có nhận lô hàng hay không.",
    relatedSectionId: "6.2",
    topic: "Attribution in Practice"
  },
  {
    id: "q630",
    chapter: 6,
    questionEn: "What is 'Hindsight Bias'?",
    questionVi: "'Thiên kiến nhận thức muộn' là gì?",
    options: {
      A: { en: "Predicting the future accurately.", vi: "Dự đoán tương lai một cách chính xác." },
      B: { en: "The tendency to believe falsely, after an outcome is actually known, that one would have accurately predicted that outcome.", vi: "Xu hướng tin tưởng sai lầm, sau khi kết quả thực sự được biết, rằng người ta sẽ dự đoán chính xác kết quả đó." },
      C: { en: "Making decisions based on past data.", vi: "Đưa ra quyết định dựa trên dữ liệu quá khứ." },
      D: { en: "Ignoring the past completely.", vi: "Bỏ qua quá khứ hoàn toàn." }
    },
    correctAnswer: "B",
    explanationEn: "Hindsight bias makes people feel they 'knew it all along' after an event occurs.",
    explanationVi: "Thiên kiến nhận thức muộn khiến mọi người cảm thấy họ 'đã biết tất cả ngay từ đầu' sau khi một sự kiện xảy ra.",
    relatedSectionId: "6.3",
    topic: "Hindsight Bias"
  },
  {
    id: "q631",
    chapter: 6,
    questionEn: "Which factor in the target refers to how close objects are to each other?",
    questionVi: "Yếu tố nào ở đối tượng đề cập đến mức độ gần nhau của các vật thể?",
    options: {
      A: { en: "Similarity", vi: "Sự tương đồng" },
      B: { en: "Proximity", vi: "Khoảng cách (Sự gần gũi)" },
      C: { en: "Novelty", vi: "Sự mới lạ" },
      D: { en: "Motion", vi: "Sự chuyển động" }
    },
    correctAnswer: "B",
    explanationEn: "Proximity leads us to perceive objects that are close together as a group.",
    explanationVi: "Khoảng cách (sự gần gũi) dẫn chúng ta đến việc nhận thức các vật thể ở gần nhau như một nhóm.",
    relatedSectionId: "6.1.2",
    topic: "Proximity"
  },
  {
    id: "q632",
    chapter: 6,
    questionEn: "When a manager blames a drop in sales on 'lazy staff' without considering the economic recession, they are committing:",
    questionVi: "Khi một nhà quản lý đổ lỗi cho sự sụt giảm doanh số là do 'nhân viên lười biếng' mà không xem xét đến cuộc suy thoái kinh tế, họ đang mắc lỗi:",
    options: {
      A: { en: "Self-serving bias", vi: "Thiên kiến tự đề cao" },
      B: { en: "Fundamental attribution error", vi: "Lỗi quy gán cơ bản" },
      C: { en: "Confirmation bias", vi: "Thiên kiến xác nhận" },
      D: { en: "Availability bias", vi: "Thiên kiến tính sẵn có" }
    },
    correctAnswer: "B",
    explanationEn: "They are overestimating internal factors (staff) and underestimating external factors (economy).",
    explanationVi: "Họ đang đánh giá quá cao các yếu tố bên trong (nhân viên) và đánh giá thấp các yếu tố bên ngoài (kinh tế).",
    relatedSectionId: "6.2.2",
    topic: "Fundamental Attribution Error"
  },
  {
    id: "q633",
    chapter: 6,
    questionEn: "What is the main difference between the Rational Model and Bounded Rationality?",
    questionVi: "Sự khác biệt chính giữa Mô hình hợp lý và Tính hợp lý bị giới hạn là gì?",
    options: {
      A: { en: "Rational model is faster.", vi: "Mô hình hợp lý nhanh hơn." },
      B: { en: "Rational model seeks the 'optimal' choice, while Bounded Rationality seeks a 'good enough' choice.", vi: "Mô hình hợp lý tìm kiếm lựa chọn 'tối ưu', trong khi Tính hợp lý bị giới hạn tìm kiếm lựa chọn 'đủ tốt'." },
      C: { en: "Bounded rationality uses more data.", vi: "Tính hợp lý bị giới hạn sử dụng nhiều dữ liệu hơn." },
      D: { en: "There is no difference.", vi: "Không có sự khác biệt." }
    },
    correctAnswer: "B",
    explanationEn: "Rationality aims for perfection; bounded rationality aims for sufficiency (satisficing).",
    explanationVi: "Sự hợp lý hướng tới sự hoàn hảo; tính hợp lý bị giới hạn hướng tới sự thỏa đáng (satisficing).",
    relatedSectionId: "6.4",
    topic: "Rational vs Bounded"
  },
  {
    id: "q634",
    chapter: 6,
    questionEn: "In 'Trait Activation Theory' (TAT), what activates personality traits?",
    questionVi: "Trong 'Lý thuyết Kích hoạt Đặc điểm' (TAT), điều gì kích hoạt các đặc điểm tính cách?",
    options: {
      A: { en: "Specific situations or job requirements.", vi: "Các tình huống cụ thể hoặc yêu cầu công việc." },
      B: { en: "Genetics only.", vi: "Chỉ do di truyền." },
      C: { en: "The weather.", vi: "Thời tiết." },
      D: { en: "Financial rewards.", vi: "Phần thưởng tài chính." }
    },
    correctAnswer: "A",
    explanationEn: "TAT suggests that certain jobs or events 'activate' specific traits (e.g., accounting activates conscientiousness).",
    explanationVi: "TAT gợi ý rằng một số công việc hoặc sự kiện nhất định 'kích hoạt' các đặc điểm cụ thể (ví dụ: kế toán kích hoạt tính tận tâm).",
    relatedSectionId: "6.5",
    topic: "Trait Activation Theory"
  },
  {
    id: "q635",
    chapter: 6,
    questionEn: "Which organizational constraint involves 'Historical Precedents'?",
    questionVi: "Ràng buộc tổ chức nào liên quan đến 'Tiền lệ lịch sử'?",
    options: {
      A: { en: "Reward systems", vi: "Hệ thống khen thưởng" },
      B: { en: "Budgeting based on last year's numbers.", vi: "Lập ngân sách dựa trên con số của năm ngoái." },
      C: { en: "Formal regulations", vi: "Quy định chính thức" },
      D: { en: "Time constraints", vi: "Ràng buộc thời gian" }
    },
    correctAnswer: "B",
    explanationEn: "Historical precedents mean current decisions are limited by past choices.",
    explanationVi: "Tiền lệ lịch sử có nghĩa là các quyết định hiện tại bị giới hạn bởi các lựa chọn trong quá khứ.",
    relatedSectionId: "6.5.2",
    topic: "Historical Precedents"
  },
  {
    id: "q636",
    chapter: 6,
    questionEn: "What is the 'Utilitarian' approach to firing 20% of staff?",
    questionVi: "Cách tiếp cận 'Vị lợi' đối với việc sa thải 20% nhân viên là gì?",
    options: {
      A: { en: "Firing them to save the jobs of the remaining 80%.", vi: "Sa thải họ để cứu lấy công việc của 80% còn lại." },
      B: { en: "Refusing to fire anyone because it violates their rights.", vi: "Từ chối sa thải bất kỳ ai vì nó vi phạm quyền của họ." },
      C: { en: "Firing only those who are not friends with the boss.", vi: "Chỉ sa thải những người không phải là bạn của sếp." },
      D: { en: "Firing people based on a fair performance evaluation.", vi: "Sa thải mọi người dựa trên một đánh giá hiệu suất công bằng." }
    },
    correctAnswer: "A",
    explanationEn: "Utilitarianism focuses on the greatest good for the greatest number (saving 80% is better than losing 100%).",
    explanationVi: "Chủ nghĩa vị lợi tập trung vào lợi ích lớn nhất cho số đông người nhất (cứu 80% tốt hơn là mất 100%).",
    relatedSectionId: "6.6.1",
    topic: "Utilitarianism Example"
  },
  {
    id: "q637",
    chapter: 6,
    questionEn: "What does the 'Justice' criterion focus on during layoffs?",
    questionVi: "Tiêu chuẩn 'Công bằng' tập trung vào điều gì trong quá trình sa thải?",
    options: {
      A: { en: "The total money saved.", vi: "Tổng số tiền tiết kiệm được." },
      B: { en: "The fairness of the process and criteria used to select who is laid off.", vi: "Sự công bằng của quy trình và các tiêu chí được sử dụng để chọn người bị sa thải." },
      C: { en: "The individual rights of the employees.", vi: "Các quyền cá nhân của nhân viên." },
      D: { en: "The manager's gut feeling.", vi: "Cảm giác của người quản lý." }
    },
    correctAnswer: "B",
    explanationEn: "Justice ensures that the burden of a decision is distributed fairly according to impartial rules.",
    explanationVi: "Sự công bằng đảm bảo rằng gánh nặng của một quyết định được phân phối công bằng theo các quy tắc vô tư.",
    relatedSectionId: "6.6.3",
    topic: "Justice Example"
  },
  {
    id: "q638",
    chapter: 6,
    questionEn: "What is 'Information Gathering' in the creative process?",
    questionVi: "'Thu thập thông tin' trong quá trình sáng tạo là gì?",
    options: {
      A: { en: "Identifying the problem.", vi: "Xác định vấn đề." },
      B: { en: "Searching for knowledge and data related to the identified problem.", vi: "Tìm kiếm kiến thức và dữ liệu liên quan đến vấn đề đã xác định." },
      C: { en: "Developing the final product.", vi: "Phát triển sản phẩm cuối cùng." },
      D: { en: "Evaluating the best idea.", vi: "Đánh giá ý tưởng tốt nhất." }
    },
    correctAnswer: "B",
    explanationEn: "It is the second step of creative behavior, where raw materials for ideas are collected.",
    explanationVi: "Đây là bước thứ hai của hành vi sáng tạo, nơi các nguyên liệu thô cho các ý tưởng được thu thập.",
    relatedSectionId: "6.7.2",
    topic: "Creative Behavior"
  },
  {
    id: "q639",
    chapter: 6,
    questionEn: "Why should managers be aware of 'Perceptual Errors' in recruitment?",
    questionVi: "Tại sao các nhà quản lý nên nhận thức được các 'Lỗi nhận thức' trong tuyển dụng?",
    options: {
      A: { en: "To make faster decisions.", vi: "Để đưa ra quyết định nhanh hơn." },
      B: { en: "To avoid biased hiring and select the best candidates objectively.", vi: "Để tránh tuyển dụng thiên vị và lựa chọn những ứng viên tốt nhất một cách khách quan." },
      C: { en: "To save money on job ads.", vi: "Để tiết kiệm tiền cho quảng cáo việc làm." },
      D: { en: "To follow company rules.", vi: "Để tuân thủ các quy tắc của công ty." }
    },
    correctAnswer: "B",
    explanationEn: "Recognizing biases like first impressions or stereotypes helps in making better selection decisions.",
    explanationVi: "Nhận biết các thiên kiến như ấn tượng đầu tiên hoặc định kiến giúp đưa ra các quyết định lựa chọn tốt hơn.",
    relatedSectionId: "6.8.3",
    topic: "Implications for Managers"
  },
  {
    id: "q640",
    chapter: 6,
    questionEn: "What is the 'Triple Bottom Line' in the context of CSR?",
    questionVi: "'Bộ ba cốt lõi' (Triple Bottom Line) trong bối cảnh CSR là gì?",
    options: {
      A: { en: "Profit, Profit, Profit.", vi: "Lợi nhuận, Lợi nhuận, Lợi nhuận." },
      B: { en: "People, Planet, Revenue (Profit).", vi: "Con người, Hành tinh, Doanh thu (Lợi nhuận)." },
      C: { en: "Marketing, Sales, HR.", vi: "Tiếp thị, Bán hàng, Nhân sự." },
      D: { en: "Past, Present, Future.", vi: "Quá khứ, Hiện tại, Tương lai." }
    },
    correctAnswer: "B",
    explanationEn: "CSR involves balancing social, environmental, and economic goals.",
    explanationVi: "CSR liên quan đến việc cân bằng các mục tiêu xã hội, môi trường và kinh tế.",
    relatedSectionId: "1.5.5",
    topic: "CSR"
  },
  {
    id: "q641",
    chapter: 6,
    questionEn: "If a manager only listens to feedback that praises their new policy and ignores complaints, they are showing:",
    questionVi: "Nếu một nhà quản lý chỉ lắng nghe phản hồi khen ngợi chính sách mới của họ và phớt lờ các khiếu nại, họ đang thể hiện:",
    options: {
      A: { en: "Availability bias", vi: "Thiên kiến tính sẵn có" },
      B: { en: "Confirmation bias", vi: "Thiên kiến xác nhận" },
      C: { en: "Escalation of commitment", vi: "Leo thang cam kết" },
      D: { en: "Fundamental attribution error", vi: "Lỗi quy gán cơ bản" }
    },
    correctAnswer: "B",
    explanationEn: "Confirmation bias leads people to seek out information that supports their existing views.",
    explanationVi: "Thiên kiến xác nhận dẫn dắt mọi người tìm kiếm thông tin hỗ trợ các quan điểm hiện có của họ.",
    relatedSectionId: "6.3.1",
    topic: "Confirmation Bias"
  },
  {
    id: "q642",
    chapter: 6,
    questionEn: "Why does 'Time Pressure' lead to Bounded Rationality?",
    questionVi: "Tại sao 'Áp lực thời gian' dẫn đến Tính hợp lý bị giới hạn?",
    options: {
      A: { en: "It provides more time for analysis.", vi: "Nó cung cấp thêm thời gian cho việc phân tích." },
      B: { en: "It forces decision makers to simplify problems and choose 'good enough' options quickly.", vi: "Nó buộc những người ra quyết định phải đơn giản hóa các vấn đề và chọn các phương án 'đủ tốt' một cách nhanh chóng." },
      C: { en: "It makes people more rational.", vi: "Nó khiến mọi người trở nên hợp lý hơn." },
      D: { en: "It has no effect on the process.", vi: "Nó không có tác dụng gì đối với quá trình này." }
    },
    correctAnswer: "B",
    explanationEn: "When time is short, we cannot perform a full rational analysis and must satisfice.",
    explanationVi: "Khi thời gian ngắn, chúng ta không thể thực hiện một phân tích hợp lý đầy đủ và phải satisfice.",
    relatedSectionId: "6.5.2",
    topic: "Time Constraints"
  },
  {
    id: "q643",
    chapter: 6,
    questionEn: "Which ethical criterion is most likely to be used by a whistleblower?",
    questionVi: "Tiêu chuẩn đạo đức nào có khả năng nhất được sử dụng bởi một người tố cáo sai phạm?",
    options: {
      A: { en: "Utilitarianism", vi: "Chủ nghĩa vị lợi" },
      B: { en: "Focus on Rights", vi: "Tập trung vào Quyền" },
      C: { en: "Justice", vi: "Sự công bằng" },
      D: { en: "Profit maximization", vi: "Tối đa hóa lợi nhuận" }
    },
    correctAnswer: "B",
    explanationEn: "Whistleblowers rely on their right to free speech and ethical duty to report wrongdoing.",
    explanationVi: "Những người tố cáo sai phạm dựa trên quyền tự do ngôn luận và nghĩa vụ đạo đức của họ để báo cáo hành vi sai trái.",
    relatedSectionId: "6.6.2",
    topic: "Focus on Rights"
  },
  {
    id: "q644",
    chapter: 6,
    questionEn: "What is the 'Creative Environment'?",
    questionVi: "'Môi trường sáng tạo' là gì?",
    options: {
      A: { en: "The individual's IQ.", vi: "IQ của cá nhân." },
      B: { en: "The organizational context that encourages or blocks new ideas.", vi: "Bối cảnh tổ chức khuyến khích hoặc ngăn chặn các ý tưởng mới." },
      C: { en: "The physical tools used for drawing.", vi: "Các công cụ vật lý được sử dụng để vẽ." },
      D: { en: "The final innovation.", vi: "Sự đổi mới cuối cùng." }
    },
    correctAnswer: "B",
    explanationEn: "A creative environment removes barriers and rewards innovation.",
    explanationVi: "Một môi trường sáng tạo loại bỏ các rào cản và khen thưởng sự đổi mới.",
    relatedSectionId: "6.7.1",
    topic: "Creative Environment"
  },
  {
    id: "q645",
    chapter: 6,
    questionEn: "How does 'Culture' influence ethical decisions?",
    questionVi: "'Văn hóa' ảnh hưởng đến các quyết định đạo đức như thế nào?",
    options: {
      A: { en: "It doesn't; ethics are universal.", vi: "Nó không ảnh hưởng; đạo đức là phổ quát." },
      B: { en: "Different cultures place different weights on utilitarianism, rights, or justice.", vi: "Các nền văn hóa khác nhau đặt trọng số khác nhau vào chủ nghĩa vị lợi, quyền hoặc sự công bằng." },
      C: { en: "It only affects the language used.", vi: "Nó chỉ ảnh hưởng đến ngôn ngữ được sử dụng." },
      D: { en: "It makes everyone follow the same rules.", vi: "Nó khiến mọi người tuân theo cùng một quy tắc." }
    },
    correctAnswer: "B",
    explanationEn: "Cultural values define what is considered 'right' or 'fair' in a specific society.",
    explanationVi: "Các giá trị văn hóa định nghĩa những gì được coi là 'đúng' hoặc 'công bằng' trong một xã hội cụ thể.",
    relatedSectionId: "6.5.1",
    topic: "Cultural Differences"
  },
  {
    id: "q646",
    chapter: 6,
    questionEn: "What is 'Problem Formulation' in creativity?",
    questionVi: "'Định hình vấn đề' trong sáng tạo là gì?",
    options: {
      A: { en: "Evaluating the final idea.", vi: "Đánh giá ý tưởng cuối cùng." },
      B: { en: "The stage where a person identifies a problem that needs a solution.", vi: "Giai đoạn mà một người xác định một vấn đề cần một giải pháp." },
      C: { en: "Gathering data.", vi: "Thu thập dữ liệu." },
      D: { en: "Generating 100 ideas.", vi: "Tạo ra 100 ý tưởng." }
    },
    correctAnswer: "B",
    explanationEn: "It is the first step of creative behavior.",
    explanationVi: "Đây là bước đầu tiên của hành vi sáng tạo.",
    relatedSectionId: "6.7.2",
    topic: "Creative Behavior"
  },
  {
    id: "q647",
    chapter: 6,
    questionEn: "Which factor in the perceiver refers to 'what we want' influencing what we see?",
    questionVi: "Yếu tố nào ở người nhận thức đề cập đến việc 'những gì chúng ta muốn' ảnh hưởng đến những gì chúng ta thấy?",
    options: {
      A: { en: "Attitudes", vi: "Thái độ" },
      B: { en: "Motives", vi: "Động cơ" },
      C: { en: "Experience", vi: "Kinh nghiệm" },
      D: { en: "Expectations", vi: "Kỳ vọng" }
    },
    correctAnswer: "B",
    explanationEn: "Unsatisfied needs or motives stimulate perception and can distort it.",
    explanationVi: "Các nhu cầu hoặc động cơ không được thỏa mãn kích thích nhận thức và có thể bóp méo nó.",
    relatedSectionId: "6.1.1",
    topic: "Motives"
  },
  {
    id: "q648",
    chapter: 6,
    questionEn: "If a person is late for work every single day, their behavior has:",
    questionVi: "Nếu một người đi làm muộn mỗi ngày, hành vi của họ có:",
    options: {
      A: { en: "High consistency", vi: "Sự nhất quán cao" },
      B: { en: "Low consistency", vi: "Sự nhất quán thấp" },
      C: { en: "High consensus", vi: "Sự đồng thuận cao" },
      D: { en: "High distinctiveness", vi: "Sự khác biệt cao" }
    },
    correctAnswer: "A",
    explanationEn: "Consistency is high when the person responds the same way over time.",
    explanationVi: "Sự nhất quán cao khi người đó phản ứng giống nhau theo thời gian.",
    relatedSectionId: "6.2.1",
    topic: "Consistency"
  },
  {
    id: "q649",
    chapter: 6,
    questionEn: "What is 'Intuition' in decision making?",
    questionVi: "'Trực giác' trong việc ra quyết định là gì?",
    options: {
      A: { en: "A slow, logical process.", vi: "Một quá trình logic, chậm chạp." },
      B: { en: "An unconscious process created out of distilled experience.", vi: "Một quá trình vô thức được tạo ra từ kinh nghiệm được chắt lọc." },
      C: { en: "A process based on perfect information.", vi: "Một quá trình dựa trên thông tin hoàn hảo." },
      D: { en: "A random guess.", vi: "Một phán đoán ngẫu nhiên." }
    },
    correctAnswer: "B",
    explanationEn: "Intuition is fast and relies on holistic associations from experience.",
    explanationVi: "Trực giác là nhanh chóng và dựa trên các liên tưởng tổng thể từ kinh nghiệm.",
    relatedSectionId: "6.4.3",
    topic: "Intuition"
  },
  {
    id: "q650",
    chapter: 6,
    questionEn: "What is the final stage of the creativity model?",
    questionVi: "Giai đoạn cuối cùng của mô hình sáng tạo là gì?",
    options: {
      A: { en: "Creative behavior", vi: "Hành vi sáng tạo" },
      B: { en: "Creative outcomes (Innovation)", vi: "Kết quả sáng tạo (Sự đổi mới)" },
      C: { en: "Causes of creativity", vi: "Nguyên nhân của sự sáng tạo" },
      D: { en: "Idea evaluation", vi: "Đánh giá ý tưởng" }
    },
    correctAnswer: "B",
    explanationEn: "The model ends with the actual creative outcome, which must be novel and useful.",
    explanationVi: "Mô hình kết thúc với kết quả sáng tạo thực tế, phải mới mẻ và hữu ích.",
    relatedSectionId: "6.7.3",
    topic: "Creative Outcomes"
  }
];
