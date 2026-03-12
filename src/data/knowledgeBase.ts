export interface SubSection {
  id: string;
  title: string;
  content: string;
  example?: string;
}

export interface Section {
  id: string;
  chapter: number;
  title: string;
  content?: string;
  subsections: SubSection[];
}

export const knowledgeBase: Section[] = [
  {
    id: "1.1",
    chapter: 1,
    title: "1.1 Define organizational behavior (OB).",
    content: "**Organizational behavior (OB)** là một lĩnh vực nghiên cứu (*field of study*) chuyên tìm hiểu về tác động của ba yếu tố chính: **cá nhân** (*individuals*), **các nhóm** (*groups*), và **cấu trúc** (*structure*) lên hành vi của con người bên trong một tổ chức.  \n\n**Mục đích cốt lõi** của việc nghiên cứu này là áp dụng những kiến thức thu được để cải thiện **tính hiệu quả** (*effectiveness*) của tổ chức đó.",
    subsections: [
      {
        id: "1.1.1",
        title: "Mục đích cốt lõi",
        content: "Nghiên cứu OB giúp hiểu rõ cách con người hành động trong tổ chức để từ đó đưa ra các giải pháp quản trị tối ưu.",
        example: "**Ví dụ:** Thay đổi cấu trúc (*structure*) từ phòng làm việc độc lập sang không gian mở. OB nghiên cứu xem sự thay đổi này ảnh hưởng thế nào đến **cá nhân** (*individuals*) và **nhóm** (*groups*) về mức độ tập trung và giao tiếp."
      }
    ]
  },
  {
    id: "1.2",
    chapter: 1,
    title: "1.2 Show the value of systematic study to OB.",
    content: "Giá trị cốt lõi của **Systematic study** (*Nghiên cứu có hệ thống*) giúp nhà quản lý đưa ra các quyết định chính xác, khoa học và tránh sai lầm do cảm tính.",
    subsections: [
      {
        id: "1.2.1",
        title: "1. Giúp dự đoán hành vi (Predictable behavior)",
        content: "Hành vi con người không hoàn toàn ngẫu nhiên mà thường có thể dự đoán được nếu hiểu cách họ **nhận thức** (*perceived*) tình huống."
      },
      {
        id: "1.2.2",
        title: "2. Khắc phục điểm yếu của Intuition (Trực giác)",
        content: "Bổ sung và lấp đầy những lỗ hổng của trực giác vốn thường dựa trên **thông tin thiếu sót** (*incomplete information*)."
      },
      {
        id: "1.2.3",
        title: "3. Tạo nền tảng cho Evidence-Based Management (EBM)",
        content: "Manager phải đưa ra quyết định dựa trên các **bằng chứng thực tế**, tránh dựa dẫm vào các sự **khái quát hóa** (*generalizations*) dễ sai lệch."
      }
    ]
  },
  {
    id: "1.3",
    chapter: 1,
    title: "1.3 Identify the major behavioral science disciplines that contribute to OB.",
    content: "Có **4 ngành khoa học hành vi** (*behavioral science disciplines*) cốt lõi đóng góp nền tảng cho OB:",
    subsections: [
      {
        id: "1.3.1",
        title: "1. Psychology (Tâm lý học)",
        content: "Nghiên cứu tập trung vào cấp độ **cá nhân** (*Individual*). Các chủ đề chính: *Learning, Motivation, Personality, Emotions, Job satisfaction*."
      },
      {
        id: "1.3.2",
        title: "2. Social psychology (Tâm lý học xã hội)",
        content: "Kết hợp giữa tâm lý học và xã hội học, tập trung ở cấp độ **nhóm** (*Group*). Giải quyết: *Behavioral change, Attitude change, Communication, Group decision making*."
      },
      {
        id: "1.3.3",
        title: "3. Sociology (Xã hội học)",
        content: "Nghiên cứu con người trong mối liên hệ với môi trường xã hội. Đóng góp cho cấp độ **Group** và **Organization system**. Từ khóa: *Power, Conflict, Organizational culture*."
      },
      {
        id: "1.3.4",
        title: "4. Anthropology (Nhân chủng học)",
        content: "Nghiên cứu vĩ mô về các xã hội để tìm hiểu con người và văn hóa. Đóng góp ở cấp độ **Organization system**. Giúp thực hiện *Cross-cultural analysis*."
      }
    ]
  },
  {
    id: "1.4",
    chapter: 1,
    title: "1.4 Demonstrate why few absolutes apply to OB.",
    content: "Trong OB, có rất ít hoặc gần như không có những **nguyên lý phổ quát** (*universal principles*) có thể áp dụng tuyệt đối.",
    subsections: [
      {
        id: "1.4.1",
        title: "Contingency variables (Biến tình huống)",
        content: "OB sử dụng khái niệm **Contingency variables** để điều tiết mối quan hệ giữa **biến độc lập** (*independent variables*) và **biến phụ thuộc** (*dependent variables*).",
        example: "**Ví dụ:** Chính sách giờ làm linh hoạt (*Flextime*) có thể tăng năng suất với nhân viên tự kỷ luật cao, nhưng giảm năng suất với nhóm cần làm việc nhóm thời gian thực."
      }
    ]
  },
  {
    id: "1.5",
    chapter: 1,
    title: "1.5 Identify managers’ challenges and opportunities in applying OB concepts.",
    content: "Manager đối mặt với **8 nhóm thách thức và cơ hội** chính:",
    subsections: [
      {
        id: "1.5.1",
        title: "1. Managing workforce diversity",
        content: "Tổ chức trở nên đa dạng (*heterogeneous*). Cần xây dựng sự hòa nhập (**Workforce inclusion**)."
      },
      {
        id: "1.5.2",
        title: "2. Responding to globalization",
        content: "Làm việc với người từ các nền văn hóa khác nhau và quản lý các **Expatriate** (nhân viên làm việc tại nước ngoài)."
      },
      {
        id: "1.5.3",
        title: "3. Using technology and social media at work",
        content: "Giải quyết vấn đề **không gian làm việc ảo** (*virtual workplace*) và cân bằng **công việc - cuộc sống** (*work-life balance*)."
      },
      {
        id: "1.5.4",
        title: "4. Improving ethical behavior",
        content: "Đối mặt với các tình huống **tiến thoái lưỡng nan về đạo đức** (*Ethical dilemmas*). Cần **Ethics training**."
      },
      {
        id: "1.5.5",
        title: "5. Practicing corporate social responsibility (CSR)",
        content: "Chú ý đến bộ ba cốt lõi (**Triple bottom line**): **con người** (*people*), **hành tinh** (*planet*), và **doanh thu** (*revenue*)."
      },
      {
        id: "1.5.6",
        title: "6. Creating a positive work environment",
        content: "Áp dụng **Positive organizational scholarship** - tập trung phát huy **điểm mạnh** (*strengths*) thay vì chỉ nhìn vào hạn chế."
      },
      {
        id: "1.5.7",
        title: "7. Responding to the Gig Economy",
        content: "Thích ứng với *Independent contractor, Freelancer* và *Flextime*."
      },
      {
        id: "1.5.8",
        title: "8. Managing crises",
        content: "Đưa ra quyết định hợp lý khi xảy ra biến cố (ví dụ: đại dịch **COVID-19**)."
      }
    ]
  },
  {
    id: "1.6",
    chapter: 1,
    title: "1.6 Compare the three levels of analysis in this text’s OB model.",
    content: "Mô hình OB cơ bản phân tích hành vi dựa trên **3 cấp độ** (*levels of analysis*):",
    subsections: [
      {
        id: "1.6.1",
        title: "1. Individual Level (Cấp độ Cá nhân)",
        content: "- **Inputs:** *Diversity, Personality, Values*.\n- **Processes:** *Emotions, Motivation, Perception, Decision making*.\n- **Outcomes:** *Attitudes, Stress, Job performance, OCB, Withdrawal behavior*."
      },
      {
        id: "1.6.2",
        title: "2. Group Level (Cấp độ Nhóm)",
        content: "- **Inputs:** *Group structure, Group roles, Team responsibilities*.\n- **Processes:** *Communication, Leadership, Power, Politics, Conflict, Negotiation*.\n- **Outcomes:** *Team performance*."
      },
      {
        id: "1.6.3",
        title: "3. Organizational Level (Cấp độ Tổ chức)",
        content: "- **Inputs:** *Structure, Culture*.\n- **Processes:** *Human resource management, Change practices*.\n- **Outcomes:** *Productivity, Survival*."
      }
    ]
  },
  {
    id: "5.1",
    chapter: 5,
    title: "5.1 Compare person–job fit and person–organization fit.",
    content: "Để phân biệt giữa **Person–job fit** (*Sự phù hợp giữa người và việc*) và **Person–organization fit** (*Sự phù hợp giữa người và tổ chức*), chúng ta cần nhìn vào yếu tố cốt lõi mà mỗi lý thuyết đo lường: một bên dựa trên **tính cách** đối với công việc, bên còn lại dựa trên **hệ giá trị** đối với môi trường tổ chức.",
    subsections: [
      {
        id: "5.1.1",
        title: "1. Person–Job Fit (Sự phù hợp giữa Người và Việc)",
        content: "**Bản chất:** Lý thuyết này đề xuất rằng sự phù hợp giữa **loại tính cách** (*personality type*) của một người và **môi trường nghề nghiệp** (*occupational environment*) sẽ là yếu tố quyết định mức độ **hài lòng với công việc** (*satisfaction*) và **tỷ lệ nghỉ việc** (*turnover*) của người đó.\n\n**Mô hình áp dụng:** Sự phù hợp này được xác định thông qua **6 nhóm tính cách** trong mô hình của Holland (*Holland's Typology of Personality*), bao gồm:\n- **Realistic (Thực tế):** Thích các hoạt động thể chất đòi hỏi kỹ năng, sức mạnh, hợp với thợ máy, công nhân lắp ráp.\n- **Investigative (Nghiên cứu):** Thích suy nghĩ, tổ chức và thấu hiểu, hợp với nhà sinh học, nhà kinh tế học.\n- **Artistic (Nghệ thuật):** Thích các hoạt động cho phép thể hiện sự sáng tạo, hợp với họa sĩ, nhạc sĩ, nhà văn.\n- **Social (Xã hội):** Thích các hoạt động giúp đỡ và phát triển người khác, hợp với giáo viên, nhân viên xã hội.\n- **Enterprising (Dẫn dắt/Khởi nghiệp):** Thích các hoạt động có cơ hội gây ảnh hưởng đến người khác và đạt được quyền lực, hợp với luật sư, quản lý doanh nghiệp nhỏ.\n- **Conventional (Quy củ):** Thích các hoạt động có quy tắc, trật tự và rõ ràng, hợp với kế toán, quản lý doanh nghiệp, thu ngân."
      },
      {
        id: "5.1.2",
        title: "2. Person–Organization Fit (Sự phù hợp giữa Người và Tổ chức)",
        content: "**Bản chất:** Khác với việc đo lường tính cách cho một công việc cụ thể, lý thuyết này cho rằng con người bị thu hút và được tuyển chọn bởi những tổ chức phù hợp với **hệ giá trị** (*values*) của họ.\n\n**Hệ quả:** Nếu nhân viên làm việc trong một tổ chức mà họ cảm thấy không có sự **tương thích** (*no compatibility*) về mặt giá trị, họ sẽ rời bỏ tổ chức đó.\n\n**Tóm lại:** Nếu như *Person–job fit* trả lời cho câu hỏi *\"Tính cách của bạn có hợp để làm nghề này không?\"*, thì *Person–organization fit* giải quyết vấn đề *\"Giá trị cá nhân của bạn có đồng điệu với giá trị của công ty này để gắn bó lâu dài hay không?\"*."
      }
    ]
  },
  {
    id: "5.2",
    chapter: 5,
    title: "5.2 Describe personality, the way it is measured, and the factors that shape it.",
    content: "Dưới đây là phần giải thích chi tiết cho mục 5.2 về **Tính cách**, cách đo lường và các yếu tố hình thành:",
    subsections: [
      {
        id: "5.2.1",
        title: "1. Định nghĩa Tính cách (Defining Personality)",
        content: "**Bản chất:** Tính cách được định nghĩa là tổng hợp tất cả các cách thức mà một cá nhân phản ứng và tương tác với thế giới xung quanh.\n\n**Đặc điểm tính cách** (*Personality traits*): Khi những hành vi của một người được thể hiện ra một cách ổn định và tồn tại lâu dài (*enduring characteristics*), chúng được gọi là các đặc điểm tính cách."
      },
      {
        id: "5.2.2",
        title: "2. Cách đo lường Tính cách (Measuring Personality)",
        content: "**Mục đích:** Các nhà quản lý cần biết cách đo lường tính cách vì các bài kiểm tra tính cách rất hữu ích trong việc ra quyết định tuyển dụng (*hiring decisions*). Nó giúp họ dự đoán ứng viên nào sẽ là người phù hợp và làm tốt nhất một công việc cụ thể.\n\n**Phương pháp:** Cách thức phổ biến nhất (*most common means*) để đo lường tính cách là thông qua các bài **khảo sát tự đánh giá** (*self-report surveys*).\n\n**Thực tế áp dụng trong OB:** Dựa trên biểu đồ dữ liệu, các công ty có xu hướng sử dụng bài đánh giá tính cách nhiều nhất cho các vị trí quản lý cấp cao và giảm dần ở các cấp bậc thấp hơn. Cụ thể, tỷ lệ sử dụng bài test tính cách trong tuyển dụng đối với vị trí **Giám đốc/Điều hành** (*Executives*) là **32%** và **Quản lý cấp trung** (*Middle Managers*) là **28%**. Tỷ lệ này giảm xuống **20%** đối với nhóm **Nhân viên độc lập** (*Individual Contributors*) và chỉ còn **17%** ở nhóm **Lao động làm theo giờ** (*Hourly Workers*)."
      },
      {
        id: "5.2.3",
        title: "3. Các yếu tố hình thành Tính cách (Factors that shape it)",
        content: "Trong phạm vi các trích đoạn tài liệu, nội dung không đi sâu vào việc liệt kê các yếu tố gốc rễ (ví dụ như yếu tố di truyền hay môi trường) định hình nên tính cách con người.\n\nTài liệu hiện tại chỉ tập trung nhấn mạnh rằng tính cách được định hình và mô tả thông qua các đặc điểm hành vi mang tính chất kéo dài và bền vững (*enduring characteristics*) của mỗi cá nhân."
      }
    ]
  },
  {
    id: "5.3",
    chapter: 5,
    title: "5.3 Describe the strengths and weaknesses of the Myers- Briggs Type Indicator (MBTI) personality framework, the Big Five model, and the Dark Triad.",
    content: "Here is a breakdown of the strengths, weaknesses, and core concepts of the three personality frameworks:",
    subsections: [
      {
        id: "5.3.1",
        title: "1. The Myers-Briggs Type Indicator (MBTI)",
        content: "**Overview:** The MBTI classifies individuals based on four dimensions: **Extroverted (E)** or **Introverted (I)**, **Sensing (S)** or **Intuitive (N)**, **Thinking (T)** or **Feeling (F)**, and **Perceiving (P)** or **Judging (J)**. These classifications combine to form specific types, such as **INTJs** (*visionaries*), **ESTJs** (*organizers*), and **ENTPs** (*conceptualizers*).\n\n**Strengths:** Its primary advantage is its popularity, as it is the most widely used personality framework.\n\n**Weaknesses:** There are striking differences in evidence and empirical support across different personality measures. Because of this lack of strong empirical evidence, managers are cautioned to critically evaluate frameworks like the MBTI before making substantive decisions based on their results."
      },
      {
        id: "5.3.2",
        title: "2. The Big Five Model",
        content: "**Overview:** The Big Five evaluates individuals across five traits: **Conscientiousness**, **Emotional stability**, **Extroversion**, **Openness to experience**, and **Agreeableness**.\n\n**Strengths:** The Big Five is the most widely supported personality framework to date. Its greatest strength is its ability to successfully predict key organizational outcomes: *emotional stability* leads to higher job and life satisfaction, *extroversion* and *conscientiousness* predict higher performance and enhanced leadership, and *openness* enhances training performance.\n\n**Weaknesses:** While the text does not detail specific flaws of the Big Five itself, it notes a general limitation regarding personality frameworks that managers must consider: while some traits are highly suitable for predicting actual job performance, other traits may only predict how well an employee will do during training and onboarding."
      },
      {
        id: "5.3.3",
        title: "3. The Dark Triad",
        content: "**Overview:** The Dark Triad identifies three highly negative personality traits:\n- **Machiavellianism:** Describes an individual who is pragmatic, maintains emotional distance, and believes that the ends can justify the means.\n- **Narcissism:** Describes a tendency to be arrogant, possess a grandiose sense of self-importance, require excessive admiration, and have a strong sense of entitlement.\n- **Psychopathy:** Describes a tendency to lack concern for others and feel a complete lack of guilt or remorse when one's actions cause harm to others.\n\n**Strengths and Weaknesses:** The sources define these traits entirely by their destructive tendencies rather than identifying positive \"strengths\". The presence of these traits represents a severe weakness or risk for an organization, as they describe individuals who manipulate, act arrogantly, or harm others without remorse."
      }
    ]
  },
  {
    id: "5.4",
    chapter: 5,
    title: "5.4 Discuss how the concepts of core self-evaluation (CSE), self-monitoring, and proactive personality contribute to the understanding of personality.",
    content: "Để hiểu toàn diện về tính cách của một người lao động trong môi trường Hành vi Tổ chức (OB), bên cạnh các mô hình lớn như Big Five hay MBTI, chúng ta cần phân tích 3 đặc điểm tính cách (personality traits) bổ sung cực kỳ quan trọng. Ba khái niệm này đóng góp trực tiếp vào việc giải thích cách nhân viên nhìn nhận giá trị của mình, cách họ thích ứng với môi trường và cách họ định hình hành vi hành động.",
    subsections: [
      {
        id: "5.4.1",
        title: "1. Core Self-Evaluation - CSE (Tự đánh giá cốt lõi)",
        content: "Bản chất: Đây là những kết luận sâu thẳm nhất (bottom line conclusions) mà một cá nhân tự đánh giá về năng lực (capabilities), sự tháo vát (competence), và giá trị cốt lõi của họ như một con người (worth as a person).\n\nĐóng góp vào hiểu biết tính cách: Khái niệm này cho chúng ta biết mức độ tự tin và sự vững vàng trong tâm trí của một nhân viên.",
        example: "Ví dụ OB: Khi đối mặt với nguy cơ cắt giảm nhân sự, một nhân viên có CSE cao sẽ tin tưởng sâu sắc vào năng lực và giá trị của bản thân, từ đó giữ thái độ bình tĩnh, tiếp tục làm việc hiệu quả vì họ tin rằng mình có khả năng kiểm soát tình hình. Ngược lại, người có CSE thấp sẽ hoảng loạn và nghi ngờ bản thân."
      },
      {
        id: "5.4.2",
        title: "2. Self-Monitoring (Khả năng tự giám sát/điều chỉnh)",
        content: "Bản chất: Đây là thước đo khả năng của một cá nhân trong việc tự điều chỉnh hành vi của mình (adjust his or her behavior) sao cho phù hợp với các yếu tố tình huống hoặc môi trường bên ngoài (external, situational factors).\n\nĐóng góp vào hiểu biết tính cách: Nó giải thích tính linh hoạt trong hành vi. Nó cho thấy tại sao một số người cực kỳ nhạy bén với các tín hiệu xã hội và có thể \"nhập gia tùy tục\", trong khi những người khác lại luôn bộc lộ đúng một kiểu tính cách bất chấp hoàn cảnh.",
        example: "Ví dụ OB: Một nhân viên kinh doanh có tính cách thường ngày ở công ty rất phóng khoáng và hay nói đùa. Tuy nhiên, khi đi gặp một khách hàng lớn nổi tiếng nguyên tắc, nhân viên này ngay lập tức biết cách tiết chế, cư xử cực kỳ chuẩn mực và chuyên nghiệp. Sự linh hoạt này chính là biểu hiện của self-monitoring cao."
      },
      {
        id: "5.4.3",
        title: "3. Proactive Personality (Tính cách chủ động)",
        content: "Bản chất: Khái niệm này mô tả những người luôn biết cách nhận diện cơ hội (identify opportunities), thể hiện sự chủ động (show initiative), dám hành động (take action), và kiên trì bám đuổi (persevere) cho đến khi tạo ra được một sự thay đổi có ý nghĩa (meaningful change occurs).\n\nĐóng góp vào hiểu biết tính cách: Đặc điểm này giúp các nhà quản lý (managers) xác định được những nhân tố \"hạt giống\" mang lại sự đổi mới, thay vì những người chỉ biết thụ động chờ đợi mệnh lệnh.",
        example: "Ví dụ OB: Khi thấy một quy trình báo cáo hiện tại của phòng ban bị lỗi thời và làm mất thời gian, thay vì cam chịu, một nhân viên có proactive personality sẽ chủ động tìm kiếm giải pháp phần mềm mới, tự thiết lập quy trình làm việc mẫu và kiên trì thuyết phục cấp trên áp dụng cho đến khi hệ thống được thay đổi hoàn toàn."
      }
    ]
  },
  {
    id: "5.5",
    chapter: 5,
    title: "5.5 Describe how the situation affects whether personality predicts behavior.",
    content: "Trong môi trường làm việc, tính cách không phải lúc nào cũng chuyển hóa thành hành vi theo một cách cố định. Mối quan hệ giữa tính cách và hành vi bị chi phối rất mạnh bởi hoàn cảnh/tình huống (the situation).\n\nĐể giải thích việc tình huống tác động đến hành vi của nhân viên như thế nào, Hành vi Tổ chức (OB) sử dụng 2 lý thuyết cốt lõi sau:",
    subsections: [
      {
        id: "5.5.1",
        title: "1. Situation Strength Theory (Lý thuyết Sức mạnh Tình huống)",
        content: "Bản chất: Lý thuyết này chỉ ra rằng cách thức mà tính cách chuyển hóa thành hành vi phụ thuộc vào \"sức mạnh của tình huống\".\n\nSức mạnh tình huống là gì? Là mức độ mà các chuẩn mực (norms), tín hiệu (cues) hoặc tiêu chuẩn (standards) bắt buộc cá nhân phải có cách cư xử phù hợp. Nói một cách dễ hiểu: trong một tình huống \"mạnh\" (nhiều luật lệ khắt khe), tính cách thật sự của nhân viên sẽ bị đè nén để tuân thủ quy định; ngược lại, trong tình huống \"yếu\" (thoải mái, ít quy tắc), tính cách cá nhân mới được tự do bộc lộ thành hành vi.\n\n4 yếu tố cấu thành sức mạnh tình huống bao gồm:\n- Clarity (Sự rõ ràng)\n- Consistency (Sự nhất quán)\n- Constraints (Sự ràng buộc/hạn chế tự do)\n- Consequences (Hệ quả nếu làm sai)"
      },
      {
        id: "5.5.2",
        title: "2. Trait Activation Theory - TAT (Lý thuyết Kích hoạt Đặc điểm)",
        content: "Bản chất: Lý thuyết này dự đoán rằng: Có một số tình huống, sự kiện hoặc sự can thiệp nhất định sẽ \"kích hoạt\" (activate) một đặc điểm tính cách cụ thể trỗi dậy mạnh mẽ hơn so với các tình huống khác.",
        example: "Ví dụ thực tế trong OB: Dựa trên mô hình TAT, các công việc khác nhau sẽ kích hoạt những nét tính cách khác nhau ở nhân viên:\n- Những công việc thường xuyên phải đối phó với người tức giận (Dealing with Angry People) như Tiếp viên hàng không (Flight attendant) hay Nhân viên trực tổng đài (Telemarketer) sẽ \"kích hoạt\" mạnh mẽ các tính cách như Sự hướng ngoại (Extroversion), Sự hòa đồng/Dễ chịu (Agreeableness) và Sự ổn định cảm xúc (Emotional Stability).\n- Những công việc yêu cầu sự chú ý đến chi tiết (Detail Orientation Required) như Kế toán (Accountant) sẽ lập tức kích hoạt tính Tận tâm (Conscientiousness).\n- Những công việc đòi hỏi sự đổi mới (Innovation Required) như Nghề viết quảng cáo (Advertising writer) hay Diễn viên (Actor) sẽ kích hoạt đặc tính Cởi mở với trải nghiệm (Openness)."
      },
      {
        id: "5.5.3",
        title: "Ứng dụng cho Quản lý (Implications for Managers)",
        content: "Từ hai lý thuyết trên, khi làm quản lý, bạn cần rút ra các bài học sau:\n1. Đừng vội phán xét: Luôn phải cân nhắc các yếu tố tình huống (situational factors) khi đánh giá các nét tính cách và hành vi có thể quan sát được của nhân viên.\n2. Chủ động kiến tạo môi trường: Quản lý có thể sử dụng các chính sách, quy trình thực hành hoặc các sự kiện để biến môi trường làm việc thành các \"tình huống mạnh\" hoặc \"tình huống yếu\". Việc điều chỉnh tình huống này nhằm mục đích khuyến khích (elicit) các đặc điểm tính cách/hành vi mong muốn và hạn chế sự xuất hiện của những nét tính cách tồi tệ.\n3. Thận trọng: Dù bạn có thể thay đổi tình huống để khích lệ hoặc ngăn chặn các hành vi nhất định, hãy nhớ rằng việc này đôi khi có thể mang lại những tác dụng phụ không mong muốn (unintended effects) đối với nhân viên."
      }
    ]
  },
  {
    id: "5.6",
    chapter: 5,
    title: "5.6 Sự liên quan của Năng lực Trí tuệ và Thể chất đối với OB",
    content: "Để hiểu vai trò của năng lực trong OB, trước tiên chúng ta cần định nghĩa Năng lực (Ability): Đây là công suất/khả năng hiện tại của một cá nhân để có thể thực hiện các nhiệm vụ khác nhau trong một công việc. Năng lực được chia thành 2 nhóm chính:",
    subsections: [
      {
        id: "5.6.1",
        title: "1. Năng lực trí tuệ (Intellectual abilities)",
        content: "Bản chất: Là những khả năng cần thiết để thực hiện các hoạt động thuộc về trí óc. Các tổ chức thường đo lường loại năng lực này bằng bài kiểm tra Khả năng trí tuệ chung (General mental ability - GMA) hoặc bài test Wonderlic.\n\nNăng lực trí tuệ bao gồm 7 khía cạnh cốt lõi:\n- Number aptitude (Khả năng tính toán): Rất cần cho một kế toán viên để tính toán thuế nhanh và chính xác.\n- Verbal comprehension (Đọc hiểu từ ngữ): Cần cho Quản lý nhà máy để đọc hiểu các chính sách nhân sự của tập đoàn.\n- Perceptual speed (Tốc độ nhận diện): Cần cho Điều tra viên hỏa hoạn để tìm ra các manh mối hình ảnh nhanh chóng.\n- Inductive reasoning (Suy luận quy nạp): Cần cho Người nghiên cứu thị trường để tìm ra quy luật logic nhằm dự báo nhu cầu sản phẩm.\n- Deductive reasoning (Suy luận diễn dịch): Cần cho Quản lý để sử dụng logic khi phải lựa chọn giữa hai đề xuất của nhân viên.\n- Spatial visualization (Tưởng tượng không gian): Rất cần cho một Nhà thiết kế nội thất.\n- Memory (Trí nhớ): Đặc biệt quan trọng với nhân viên Bán hàng để ghi nhớ tên của khách."
      },
      {
        id: "5.6.2",
        title: "2. Năng lực thể chất (Physical abilities)",
        content: "Bản chất: Là khả năng để thực hiện các nhiệm vụ đòi hỏi sức bền (stamina), sự khéo léo (dexterity), sức mạnh cơ bắp và các đặc điểm thể chất tương tự.\n\nCó 9 năng lực thể chất cơ bản được chia làm 3 nhóm:\n- Nhóm sức mạnh (Strength Factors): Sức mạnh động (liên tục), sức mạnh thân mình (cơ bụng/lưng), sức mạnh tĩnh và sức mạnh bùng nổ.\n- Nhóm dẻo dai (Flexibility Factors): Khả năng vươn/uốn người và sự linh hoạt liên tục.\n- Các yếu tố khác (Other Factors): Sự phối hợp cơ thể (Body coordination), giữ thăng bằng (Balance) và sức bền (Stamina)."
      },
      {
        id: "5.6.3",
        title: "Tính ứng dụng và Lời khuyên cho Nhà quản lý (Implications for Managers)",
        content: "Dự đoán hiệu suất: Đánh giá năng lực thường là yếu tố dự đoán tốt nhất về kết quả làm việc (best predictors of job performance) của một nhân viên.\n\nRủi ro pháp lý & Phân biệt đối xử: Việc áp dụng các bài test năng lực có xu hướng vướng phải những rắc rối về sự phân biệt đối xử (disparate impact concerns).\n\nQuy tắc: Do đó, nhà quản lý phải hết sức thận trọng: Chỉ được phép đánh giá ứng viên về năng lực trí tuệ hoặc thể chất NẾU những năng lực đó là điều kiện bắt buộc và thực sự cần thiết cho vị trí công việc đó (necessary and required for the job)."
      }
    ]
  },
  {
    id: "5.7",
    chapter: 5,
    title: "5.7 Phân biệt Giá trị đích đến (Terminal values) và Giá trị công cụ (Instrumental values)",
    content: "Trong lĩnh vực OB, **Giá trị** (*Values*) là những niềm tin cơ bản về việc điều gì là đúng, là tốt, hoặc đáng khao khát. Những giá trị này đặt nền móng quan trọng để nhà quản lý thấu hiểu được thái độ (*attitudes*) và động lực (*motivation*) của nhân viên.\n\nHệ thống giá trị của một người được chia thành 2 loại có tính liên kết chặt chẽ với nhau:",
    subsections: [
      {
        id: "5.7.1",
        title: "1. Giá trị đích đến / Giá trị mục đích (Terminal Values)",
        content: "**Bản chất:** Đây là những \"trạng thái tồn tại mong muốn cuối cùng\" (*desirable end-states of existence*).\n\n**Hiểu đơn giản:** Nó chính là những mục tiêu lớn lao nhất, là cái đích cuối cùng mà một người khao khát đạt được trong suốt cuộc đời hoặc sự nghiệp của họ."
      },
      {
        id: "5.7.2",
        title: "2. Giá trị công cụ / Giá trị phương tiện (Instrumental Values)",
        content: "**Bản chất:** Đây là những phương thức hành vi được ưu tiên (*preferred modes of behavior*) hoặc các phương tiện, cách thức để giúp một cá nhân đạt được những \"giá trị đích đến\" (*terminal values*) kể trên.\n\n**Hiểu đơn giản:** Nó là con đường, là cách thức hành xử hoặc công cụ mà bạn lựa chọn để có thể chạm tới cái đích cuối cùng của mình."
      },
      {
        id: "5.7.3",
        title: "Tóm lại",
        content: "Nếu *Terminal values* là \"Mục tiêu cuối cùng/Đích đến\" (Bạn muốn đi về đâu?), thì *Instrumental values* chính là \"Công cụ/Cách hành xử\" (Bạn sẽ làm gì để đến được đó?).",
        example: "**Ví dụ:** Nếu đích đến (*Terminal value*) của bạn là một cuộc sống tự do tài chính, thì công cụ (*Instrumental value*) của bạn có thể là làm việc chăm chỉ, tiết kiệm và đầu tư."
      }
    ]
  },
  {
    id: "3.1",
    chapter: 3,
    title: "3.1 Contrast the three components of an attitude.",
    content: "Để hiểu rõ bản chất của một **thái độ** (*Attitudes*), chúng ta cần biết rằng thái độ là những **đánh giá, phán xét** (có thể là tích cực hoặc tiêu cực) về một đối tượng, con người hay sự kiện, qua đó phản ánh cảm nhận của chúng ta về điều đó.\n\nTrong lĩnh vực OB, một thái độ được cấu thành từ **3 thành phần** liên kết cực kỳ chặt chẽ với nhau (*closely related*):",
    subsections: [
      {
        id: "3.1.1",
        title: "1. Cognitive component (Thành phần Nhận thức - Ý nghĩ)",
        content: "**Bản chất:** Đây là phần **đánh giá** (*evaluation*) của một thái độ. Nó bao gồm những suy nghĩ, niềm tin hoặc sự nhìn nhận bằng lý trí của cá nhân về một sự thật, hoàn cảnh nào đó.",
        example: "**Ví dụ OB:** Bạn nhìn vào quyết định của công ty và nghĩ rằng: *\"Sếp vừa thăng chức cho một đồng nghiệp không xứng đáng bằng mình. Sếp thật sự không công bằng\"*."
      },
      {
        id: "3.1.2",
        title: "2. Affective component (Thành phần Cảm xúc)",
        content: "**Bản chất:** Đây là phần **cảm giác** (*feeling*) nảy sinh trực tiếp từ sự đánh giá ở phần nhận thức (*Cognitive*). Nó là phản ứng tình cảm của bạn (buồn, vui, tức giận, thất vọng...).",
        example: "**Ví dụ OB:** Dựa trên nhận thức rằng sếp bất công, trong lòng bạn sinh ra cảm giác tiêu cực: *\"Tôi rất ghét sếp của mình!\"*."
      },
      {
        id: "3.1.3",
        title: "3. Behavioral component (Thành phần Hành vi)",
        content: "**Bản chất:** Đây là **ý định hành động** (*action*) theo một hướng nhất định đối với một người hoặc sự việc, được thúc đẩy bởi chính phần cảm xúc (*Affective*) trước đó.",
        example: "**Ví dụ OB:** Vì quá ghét sếp, bạn dẫn đến hành động thực tế: *\"Tôi đang tìm kiếm một công việc khác; và tôi đã đi phàn nàn về sếp với tất cả những ai chịu lắng nghe\"*."
      },
      {
        id: "3.1.4",
        title: "Tóm lại & Ứng dụng Quản trị",
        content: "**Tóm lại:** Ba thành phần này tạo thành một chuỗi phản ứng dây chuyền: **Cognitive (Đánh giá) -> Affective (Cảm nhận) -> Behavioral (Hành động)** để cùng nhau tạo nên một thái độ hoàn chỉnh.\n\n**Ứng dụng:** Khi một manager thấy nhân viên có hành vi tồi tệ (Behavioral), sếp không nên chỉ giải quyết phần ngọn, mà phải đào sâu tìm hiểu cảm xúc (*Affective*) và nguyên nhân từ nhận thức (*Cognitive*) để giải quyết tận gốc rễ vấn đề."
      }
    ]
  },
  {
    id: "3.2",
    chapter: 3,
    title: "3.2 Summarize the relationship between attitudes and behavior.",
    content: "Về cơ bản, những thái độ mà con người có sẽ quyết định những hành động mà họ làm (*behavior*). Con người luôn tìm kiếm **sự nhất quán** (*consistency*) giữa các thái độ với nhau, và giữa thái độ với hành vi thực tế.",
    subsections: [
      {
        id: "3.2.1",
        title: "1. Sự bất hòa nhận thức (Cognitive Dissonance)",
        content: "**Cognitive dissonance** là sự không tương thích hoặc cảm giác khó chịu khi một cá nhân nhận thấy thái độ và hành vi của mình đang \"đánh nhau\".\n\nMức độ khao khát giảm sự bất hòa phụ thuộc vào 3 yếu tố:\n- **Importance:** Tầm quan trọng của thái độ/hành vi.\n- **Degree of individual influence:** Mức độ kiểm soát (quyền quyết định hay bị ép buộc).\n- **Rewards:** Những phần thưởng nhận được (phần thưởng lớn giúp dễ chấp nhận sự bất hòa hơn).",
        example: "**Ví dụ OB:** Nhân viên A ghét làm OT (Attitude). Nhưng sếp yêu cầu và team đều ở lại (Áp lực xã hội cao, kiểm soát thấp). A buộc phải ở lại (Behavior). Để xoa dịu tâm trí, A tự hợp lý hóa: *\"Làm xong vụ này sếp sẽ thưởng rất to\"* (**Rewards**)."
      },
      {
        id: "3.2.2",
        title: "2. Các biến điều tiết (Moderating Variables)",
        content: "Mối quan hệ giữa thái độ và hành vi phụ thuộc vào **5 Moderating variables**:\n1. **Attitude’s importance:** Thái độ càng quan trọng thì tác động càng mạnh.\n2. **Correspondence to behaviour:** Sự trùng khớp giữa thái độ và hành vi càng cao thì mối liên hệ càng mạnh.\n3. **Accessibility:** Thái độ càng hay được bộc lộ thì càng dễ dự đoán hành vi.\n4. **Presence of social pressures:** Áp lực đám đông có thể làm giảm mối liên hệ này (gây ra *Cognitive dissonance*).\n5. **Direct experience:** Mối quan hệ mạnh mẽ hơn nếu cá nhân đã có trải nghiệm trực tiếp."
      }
    ]
  },
  {
    id: "3.3",
    chapter: 3,
    title: "3.3 Compare the major job attitudes.",
    content: "Các thái độ làm việc chính (**Major Job Attitudes**) không hoàn toàn tách biệt mà liên quan mật thiết (*highly related*) và có sự chồng chéo (*overlap*) lớn.",
    subsections: [
      {
        id: "3.3.1",
        title: "1. Job Satisfaction (Sự hài lòng với công việc)",
        content: "**Bản chất:** Là một cảm xúc tích cực về công việc sau khi đánh giá các đặc điểm của nó. Đây là thái độ cơ bản nhất để dự đoán hành vi nhân viên."
      },
      {
        id: "3.3.2",
        title: "2. Job Involvement & Psychological Empowerment",
        content: "- **Job Involvement:** Mức độ một người đồng nhất bản thân với công việc và coi hiệu suất cao là thước đo **giá trị bản thân** (*self-worth*).\n- **Psychological Empowerment:** Niềm tin rằng mình có quyền tự chủ (*autonomy*), có năng lực, có ảnh hưởng và công việc có ý nghĩa."
      },
      {
        id: "3.3.3",
        title: "3. Organizational Commitment (Sự cam kết với tổ chức)",
        content: "**Bản chất:** Sự đồng nhất với tổ chức, đồng tình với mục tiêu và muốn duy trì tư cách thành viên. Mang tính **\"lòng trung thành\"**. Người có cam kết cao dù chán việc (*dissatisfied*) vẫn ít khi bỏ việc (*work withdrawal*)."
      },
      {
        id: "3.3.4",
        title: "4. Perceived Organizational Support (POS)",
        content: "**Bản chất:** Mức độ nhân viên tin rằng công ty trân trọng đóng góp và quan tâm đến phúc lợi (*well-being*) của họ. POS tăng khi thưởng công bằng, được tham gia quyết định và sếp hỗ trợ. Quan trọng ở nơi có **lower power distance**."
      },
      {
        id: "3.3.5",
        title: "5. Employee Engagement (Sự gắn kết)",
        content: "**Bản chất:** Sự tham gia, hài lòng và lòng nhiệt huyết (*enthusiasm/passionate*) đối với công việc. Trái ngược với nhân viên **disengaged** (làm việc kiểu đối phó, \"tồn tại\" qua ngày)."
      },
      {
        id: "3.3.6",
        title: "6. Organizational Identification",
        content: "**Bản chất:** Dùng chính các đặc điểm của tổ chức để định nghĩa bản thân mình. Ngay cả lao động tự do (*gig workers*) cũng có thể có thái độ này tùy tính chất công việc."
      }
    ]
  },
  {
    id: "3.4",
    chapter: 3,
    title: "3.4 Identify the two approaches for measuring job satisfaction.",
    content: "Có 2 phương pháp tiếp cận phổ biến để đo lường **Job satisfaction**:",
    subsections: [
      {
        id: "3.4.1",
        title: "1. The single global rating (Đánh giá tổng thể)",
        content: "**Bản chất:** Vô cùng đơn giản, yêu cầu trả lời một câu hỏi duy nhất (*one question/one answer*).\n**Cách làm:** *\"Xét trên mọi phương diện, bạn hài lòng với công việc ở mức độ nào?\"* (Thang điểm 1-5)."
      },
      {
        id: "3.4.2",
        title: "2. The summation of job facets (Tổng hợp các khía cạnh)",
        content: "**Bản chất:** Phức tạp và tinh vi hơn (*more sophisticated*). Chia công việc thành các yếu tố cốt lõi (**key elements**) như: bản chất công việc, tiền lương, cơ hội thăng tiến, người quản lý, đồng nghiệp.\n**Cách làm:** Trả lời nhiều câu hỏi cho từng khía cạnh rồi tính điểm trung bình (*many questions/one average*)."
      },
      {
        id: "3.4.3",
        title: "So sánh thực tế",
        content: "- **Single global rating:** Biết nhân viên chán nản nhưng **không biết rõ nguyên nhân**.\n- **Summation of job facets:** Giúp nhà quản lý biết chính xác \"căn bệnh\" nằm ở đâu (ví dụ: do Lương thấp chứ không phải do sếp) để đưa ra giải pháp phù hợp."
      }
    ]
  },
  {
    id: "3.5",
    chapter: 3,
    title: "3.5 Summarize the main causes of job satisfaction.",
    content: "Sự hài lòng đến từ 3 nhóm nguyên nhân chính:",
    subsections: [
      {
        id: "3.5.1",
        title: "1. Job Conditions (Điều kiện công việc)",
        content: "**Yếu tố dự đoán quan trọng nhất.** Bao gồm: bản chất thực sự của công việc (*intrinsic nature*), tương tác xã hội (*social interactions*), và chất lượng quản lý (*supervision*)."
      },
      {
        id: "3.5.2",
        title: "2. Personality (Tính cách)",
        content: "Những người có **positive core self-evaluations** (tự đánh giá cốt lõi tích cực) - tin vào giá trị và năng lực bản thân - sẽ dễ hài lòng với công việc hơn."
      },
      {
        id: "3.5.3",
        title: "3. Pay (Tiền lương)",
        content: "Lương có tác động nhưng **không tỷ lệ thuận tuyệt đối**. Khi đã đạt ngưỡng ổn định cuộc sống, việc trả thêm lương thật cao không tự động tạo ra môi trường làm việc hài lòng (*satisfying work environment*)."
      }
    ]
  },
  {
    id: "3.6",
    chapter: 3,
    title: "3.6 Identify four outcomes of job satisfaction.",
    content: "Khi nhân viên hài lòng, tổ chức sẽ nhận được 4 kết quả tích cực:",
    subsections: [
      {
        id: "3.6.1",
        title: "1. Job Performance (Hiệu suất)",
        content: "Nhân viên vui vẻ làm việc năng suất hơn (**productive workers**), tập trung hơn và ít lỗi hơn."
      },
      {
        id: "3.6.2",
        title: "2. Organizational Citizenship Behavior (OCB)",
        content: "Tự nguyện thực hiện các hành vi cống hiến ngoài mô tả công việc (JD) để giúp đỡ tập thể."
      },
      {
        id: "3.6.3",
        title: "3. Customer Satisfaction",
        content: "Thái độ tích cực của nhân viên truyền sang khách hàng, tăng sự hài lòng và lòng trung thành (*loyalty*) của khách."
      },
      {
        id: "3.6.4",
        title: "4. Life Satisfaction",
        content: "Có mối tương quan tích cực (*positively correlated*). Công việc tốt giúp tâm trạng thư thái khi về nhà, nâng cao chất lượng cuộc sống cá nhân."
      }
    ]
  },
  {
    id: "3.7",
    chapter: 3,
    title: "3.7 Identify four employee responses to job dissatisfaction.",
    content: "Phản ứng đối với sự bất mãn được phân loại dựa trên ma trận: **Chủ động/Bị động (Active/Passive)** và **Xây dựng/Phá hoại (Constructive/Destructive)**:",
    subsections: [
      {
        id: "3.7.1",
        title: "1. VOICE (Lên tiếng)",
        content: "**Active & Constructive:** Chủ động cải thiện tình hình bằng cách đề xuất giải pháp, thảo luận với cấp trên."
      },
      {
        id: "3.7.2",
        title: "2. EXIT (Rời đi)",
        content: "**Active & Destructive:** Rời bỏ tổ chức, tìm việc mới. Nguyên nhân trực tiếp gây ra tỷ lệ **Turnover** cao."
      },
      {
        id: "3.7.3",
        title: "3. LOYALTY (Trung thành)",
        content: "**Passive & Constructive:** Cam chịu thụ động, im lặng chờ đợi và tin tưởng ban lãnh đạo sẽ làm điều đúng đắn."
      },
      {
        id: "3.7.4",
        title: "4. NEGLECT (Thờ ơ / Bỏ mặc)",
        content: "**Passive & Destructive:** Buông xuôi, mặc kệ tình hình tồi tệ đi. Biểu hiện qua: mắc lỗi bất cẩn, đi muộn, vắng mặt (*Absenteeism*)."
      },
      {
        id: "3.7.5",
        title: "Lưu ý cho Manager",
        content: "Các phản ứng phá hoại (*Exit, Neglect*) thường đi kèm với **Counterproductive Work Behavior (CWB)** - hành vi chống đối gây thiệt hại trực tiếp (trộm cắp, hung hăng, trốn việc). Cần nhận diện sớm các dấu hiệu bất mãn."
      }
    ]
  },
  {
    id: "4.1",
    chapter: 4,
    title: "4.1 Differentiate between emotions and moods.",
    content: "Để phân biệt rõ ràng giữa **Emotions** (*Cảm xúc*) và **Moods** (*Tâm trạng*), chúng ta cần hiểu rằng cả hai đều là những nhánh nhỏ nằm dưới một khái niệm ô dù rộng hơn gọi là **Affect** (*Xúc cảm* - một phạm vi rộng các cảm giác mà con người trải qua).",
    subsections: [
      {
        id: "4.1.1",
        title: "4 điểm khác biệt cốt lõi",
        content: "1. **Nguyên nhân gây ra (Cause):**\n   - **Emotions:** Bị gây ra bởi một sự kiện hoặc đối tượng vô cùng cụ thể (*specific event*).\n   - **Moods:** Nguyên nhân thường chung chung và không rõ ràng (*general and unclear*). Đôi khi bạn không biết tại sao mình lại mang tâm trạng đó.\n\n2. **Thời gian kéo dài (Duration):**\n   - **Emotions:** Diễn ra trong thời gian rất ngắn (*very brief in duration*), thường chỉ kéo dài vài giây hoặc vài phút.\n   - **Moods:** Kéo dài lâu hơn rất nhiều so với cảm xúc, thường được tính bằng nhiều giờ hoặc nhiều ngày.\n\n3. **Bản chất và Số lượng (Nature):**\n   - **Emotions:** Rất đa dạng, mang tính cụ thể và có nhiều loại khác nhau (*specific and numerous in nature*). Các nhà nghiên cứu thường chỉ ra 6 cảm xúc phổ quát là: tức giận (*anger*), sợ hãi (*fear*), buồn bã (*sadness*), hạnh phúc (*happiness*), kinh tởm (*disgust*) và ngạc nhiên (*surprise*).\n   - **Moods:** Mang tính khái quát hơn, thường được chia thành 2 chiều chính: tâm trạng tích cực (*positive affect*) và tâm trạng tiêu cực (*negative affect*).\n\n4. **Biểu hiện ra bên ngoài (Expressions):**\n   - **Emotions:** Thường đi kèm với những biểu cảm khuôn mặt cực kỳ rõ rệt và dễ nhận biết (*distinct facial expressions*).\n   - **Moods:** Thường không được biểu thị bằng những nét mặt hay biểu cảm rõ ràng."
      },
      {
        id: "4.1.2",
        title: "Ví dụ thực tế trong môi trường OB",
        content: "Giả sử bạn đang trình bày dự án thì bị sếp ngắt lời và phê bình gay gắt trước mặt toàn công ty.",
        example: "- **Emotion:** Ngay tại khoảnh khắc đó, bạn đỏ mặt, nhíu mày và thấy cực kỳ tức giận với sếp. Sự tức giận này bị kích hoạt bởi sự kiện sếp mắng, chỉ kéo dài vài phút và biểu lộ rõ ra mặt. Đây chính là **Emotion**.\n- **Mood:** Đến buổi chiều cùng ngày, sự tức giận ban sáng đã qua đi, mặt bạn không còn nhăn nhó nữa nhưng bạn lại cảm thấy chán nản, uể oải, không có động lực làm việc mà cũng không xác định được rõ ràng là mình đang giận sếp, giận bản thân hay chán công việc. Cảm giác bao trùm kéo dài suốt cả buổi chiều này chính là **Mood**."
      }
    ]
  },
  {
    id: "4.2",
    chapter: 4,
    title: "4.2 Identify the sources of emotions and moods.",
    content: "Dưới đây là các nguồn gốc (*sources*) chính tạo ra cảm xúc (*emotions*) và tâm trạng (*moods*) của nhân viên tại nơi làm việc:",
    subsections: [
      {
        id: "4.2.1",
        title: "1. Personality (Tính cách)",
        content: "**Bản chất:** Cảm xúc và tâm trạng có một phần bắt nguồn từ đặc điểm tính cách bẩm sinh (*trait component*). Trong đó, khái niệm **Affect intensity** (*Cường độ cảm xúc*) chỉ ra rằng một số người có khả năng trải nghiệm vui buồn mãnh liệt hơn hẳn người khác.",
        example: "**Ví dụ OB:** Cùng bị sếp nhắc nhở nhẹ trong cuộc họp, nhân viên A (có *affect intensity* thấp) chỉ thấy bình thường và sửa lỗi. Nhưng nhân viên B (có *affect intensity* cao) lại cảm thấy tổn thương sâu sắc và buồn bã suốt cả tuần."
      },
      {
        id: "4.2.2",
        title: "2. Time of Day & Day of the Week",
        content: "**Bản chất:** Mọi người thường có một quy luật chung: chúng ta vui vẻ nhất vào khoảng thời gian giữa ngày (*midpoint of the daily awake period*). Tương tự, mọi người thường hạnh phúc hơn vào những ngày cuối tuần.",
        example: "**Ví dụ OB:** Hiểu được điều này, một người sếp tinh tế sẽ lên lịch cho những cuộc họp yêu cầu sự sáng tạo hoặc các buổi thông báo tin vui vào giữa trưa hoặc thứ Sáu, thay vì sáng sớm thứ Hai khi nhân viên còn đang uể oải."
      },
      {
        id: "4.2.3",
        title: "3. Weather (Thời tiết)",
        content: "**Bản chất:** Rất nhiều người nghĩ rằng trời mưa thì buồn, trời nắng thì vui. Tuy nhiên, khoa học OB gọi đây là **Illusory correlation** (*Sự tương quan ảo*) - tức là thực chất thời tiết **KHÔNG HỀ** có tác động thực sự đến tâm trạng của chúng ta.",
        example: "**Ví dụ OB:** Sếp không nên đổ lỗi năng suất của team đi xuống là do \"dạo này thời tiết u ám\", vì đó là nhận định cảm tính không có cơ sở khoa học."
      },
      {
        id: "4.2.4",
        title: "4. Stress (Căng thẳng)",
        content: "**Bản chất:** Ngay cả những mức độ căng thẳng thấp nhưng kéo dài liên tục (*constant stress*) cũng có thể làm tâm trạng của con người trở nên tồi tệ đi rất nhiều.",
        example: "**Ví dụ OB:** Việc công ty áp dụng văn hóa làm việc không rõ deadline, nhân viên lúc nào cũng trong trạng thái \"có thể bị gọi bất cứ lúc nào\" sẽ tạo ra stress ngầm, khiến môi trường làm việc lúc nào cũng căng thẳng và dễ cáu gắt."
      },
      {
        id: "4.2.5",
        title: "5. Social Interactions (Tương tác xã hội)",
        content: "**Bản chất:** Những tương tác tiêu cực ở chỗ làm không chỉ dừng lại ở công ty, mà nó có hiệu ứng **\"spill over\"** (*tràn ra/lan sang*) cả cuộc sống gia đình của nhân viên.",
        example: "**Ví dụ OB:** Một nhân viên bị khách hàng mắng oan ở công ty, vì không xả được cảm xúc đó nên khi về nhà, người này đã cáu gắt và to tiếng với vợ/chồng con cái của mình."
      },
      {
        id: "4.2.6",
        title: "6. Sleep & Exercise (Giấc ngủ & Thể dục)",
        content: "**Bản chất:** Chất lượng giấc ngủ kém làm gia tăng các cảm xúc tiêu cực (*negative affect*). Ngược lại, tập thể dục giúp cải thiện đáng kể tâm trạng, đặc biệt tốt cho những người đang bị trầm cảm.",
        example: "**Ví dụ OB:** Nhận thức được nguồn gốc này, các công ty công nghệ lớn (như Google) thường trang bị phòng ngủ trưa (*nap room*) và phòng gym miễn phí ngay tại văn phòng để giúp nhân viên tái tạo năng lượng tích cực."
      },
      {
        id: "4.2.7",
        title: "7. Gender Identity (Bản dạng giới)",
        content: "**Bản chất:** Tại nơi làm việc vẫn tồn tại những định kiến (*Stereotypical perceptions*) về giới tính: người ta thường mặc định phụ nữ thì hay bị \"cảm xúc\" chi phối, trong khi đàn ông thì hay \"tức giận\".",
        example: "**Ví dụ OB:** Khi một nữ quản lý gắt gao trong cuộc họp, nhân viên có thể đánh giá cô ấy là \"quá cảm xúc\". Nhưng cùng hành động đó ở một nam quản lý thì lại được khen là \"quyết đoán\". Là người học OB, bạn phải loại bỏ định kiến này khi đánh giá hành vi con người."
      }
    ]
  },
  {
    id: "4.3",
    chapter: 4,
    title: "4.3 Show the impact emotional labor has on employees.",
    content: "**Emotional labor** là tình trạng một nhân viên bắt buộc phải bộc lộ những cảm xúc mà tổ chức/công ty mong muốn (hoặc quy định) trong quá trình giao tiếp làm việc, bất chấp cảm xúc thật sự của họ lúc đó là gì.",
    subsections: [
      {
        id: "4.3.1",
        title: "1. Bản chất của Emotional Labor",
        content: "Để thực hiện Emotional labor, nhân viên phải làm việc với 2 loại cảm xúc:\n- **Felt emotions:** Cảm xúc thật sự đang diễn ra bên trong cá nhân.\n- **Displayed emotions:** Cảm xúc mà công ty yêu cầu nhân viên phải thể hiện ra bên ngoài cho phù hợp với hoàn cảnh.\n\nNhân viên thường dùng 2 cách để bộc lộ *displayed emotions*:\n- **Surface acting (Diễn bề ngoài):** Giấu đi cảm xúc thật và chỉ \"đeo mặt nạ\" diễn biểu cảm ra bên ngoài (ví dụ: đang buồn nhưng vẫn nhếch mép cười).\n- **Deep acting (Diễn sâu):** Cố gắng thay đổi nội tâm, tự thuyết phục mình cảm nhận đúng cái cảm xúc mà công ty yêu cầu."
      },
      {
        id: "4.3.2",
        title: "2. Tác động của Emotional Labor lên nhân viên (The Impact)",
        content: "Tác động nặng nề nhất xảy ra khi có sự mâu thuẫn giữa cảm xúc thật (*felt*) và cảm xúc phải bộc lộ (*displayed*). Sự không nhất quán này tạo ra một trạng thái tâm lý gọi là **Emotional dissonance** (*Sự bất hòa/bất đồng cảm xúc*).\n\nNếu nhân viên phải chịu đựng *emotional dissonance* trong một thời gian dài (thường do lạm dụng *Surface acting*), nó sẽ tạo ra 3 hậu quả cực kỳ nghiêm trọng:\n1. **Job burnout:** Sự kiệt quệ, \"cháy sạch\" về mặt tâm lý và sức lực.\n2. **Declines in job performance:** Sự suy giảm rõ rệt về hiệu suất và chất lượng công việc.\n3. **Lower job satisfaction:** Mất đi sự hài lòng và niềm vui với công việc hiện tại."
      },
      {
        id: "4.3.3",
        title: "Ví dụ trong môi trường OB",
        content: "Hãy tưởng tượng bạn là một nhân viên Chăm sóc khách hàng (CSKH) qua điện thoại. Hôm nay bạn vừa nhận tin buồn từ gia đình, trong lòng bạn đang rất đau buồn và mệt mỏi (**Felt emotions**).",
        example: "Tuy nhiên, quy tắc của tổng đài là phải luôn chào khách hàng bằng giọng điệu vui vẻ, năng lượng và nhiệt tình (**Displayed emotions** -> Đây chính là yêu cầu của **Emotional labor**). Nếu bạn cố gắng nén nước mắt, gượng cười và gồng mình nói giọng vui vẻ với 100 khách hàng trong ngày hôm đó (**Surface acting**), tâm lý của bạn sẽ bị giằng xé dữ dội (**Emotional dissonance**). Trải qua việc này lặp đi lặp lại nhiều ngày, bạn sẽ nhanh chóng bị vắt kiệt sức lực tâm trí (**Job burnout**), gọi điện cho khách hay bị vấp/quên kịch bản (**Declines in job performance**) và cuối cùng là chán ghét công việc này đến mức muốn nộp đơn xin nghỉ (**Lower job satisfaction**)."
      }
    ]
  },
  {
    id: "4.4",
    chapter: 4,
    title: "4.4 Describe affective events theory.",
    content: "**Thuyết Sự kiện Cảm xúc** (*Affective events theory - AET*) là một lý thuyết cho rằng nhân viên luôn có những phản ứng về mặt cảm xúc đối với những sự việc (*events*) xảy ra với họ tại nơi làm việc. Những cảm xúc nảy sinh từ các sự kiện này sẽ trực tiếp định hình và ảnh hưởng đến hiệu suất làm việc (*job performance*) cũng như sự hài lòng với công việc (*satisfaction*) của họ.",
    subsections: [
      {
        id: "4.4.1",
        title: "Bản chất cốt lõi của AET",
        content: "- Cảm xúc chính là chiếc chìa khóa mang lại những hiểu biết giá trị để ta thấy được các sự kiện tại nơi làm việc đang chi phối năng suất của nhân viên như thế nào.\n- Một điểm cực kỳ quan trọng: Nhân viên và các nhà quản lý (*managers*) tuyệt đối không được phớt lờ những cảm xúc hay các sự kiện sinh ra chúng, ngay cả khi đó chỉ là những chuyện trông có vẻ rất nhỏ nhặt (*minor*). Lý do là vì những cảm xúc tiêu cực từ các sự kiện nhỏ này sẽ không biến mất mà chúng sẽ **accumulate** (*tích tụ dần dần*) theo thời gian."
      },
      {
        id: "4.4.2",
        title: "Ví dụ trong môi trường OB",
        content: "Giả sử bạn là nhân viên và hôm nay bạn đã hoàn thành xuất sắc một báo cáo khó, nhưng sếp lại bận rộn và quên mất không dành cho bạn một lời khen ngợi (đây là một *event* rất nhỏ). Lúc đó, bạn nảy sinh cảm giác hụt hẫng và tủi thân (đây là *emotion*).",
        example: "Nếu sự kiện sếp vô tâm này chỉ xảy ra một lần, bạn có thể dễ dàng bỏ qua. Nhưng nếu ngày nào sếp cũng khắt khe và phớt lờ nỗ lực của bạn, những sự thất vọng nhỏ bé này sẽ **accumulate** (tích tụ lại thành một nỗi uất ức lớn). Hậu quả là theo đúng thuyết AET, bạn bắt đầu làm việc chểnh mảng, để xảy ra sai sót (**job performance** sụt giảm) và cuối cùng là chán ghét môi trường làm việc này (**satisfaction** chạm đáy)."
      }
    ]
  },
  {
    id: "4.5",
    chapter: 4,
    title: "4.5 Describe emotional intelligence.",
    content: "**Trí tuệ cảm xúc** (*Emotional Intelligence - EI*) là khả năng của một người trong việc nhận diện, thấu hiểu và quản lý cảm xúc của chính mình cũng như của những người xung quanh.\n\nTrong lĩnh vực OB, khái niệm này được vận hành dựa trên một mô hình rất nổi tiếng gọi là **Mô hình thác đổ** (*A Cascading Model of Emotional Intelligence*).",
    subsections: [
      {
        id: "4.5.1",
        title: "3 bước của Mô hình thác đổ",
        content: "1. **Perceive Emotions in Self and Others (Nhận biết cảm xúc):**\n   - **Bản chất:** Là khả năng \"đọc vị\" được bản thân và người khác đang có cảm xúc gì.\n   - **Yếu tố hỗ trợ:** Bước này được thúc đẩy bởi **Conscientiousness** (*Sự tận tâm, chu đáo*). Người càng để tâm, chú ý chi tiết thì càng dễ nhận ra các biến đổi cảm xúc nhỏ nhất.\n\n2. **Understand the Meaning of Emotions (Hiểu ý nghĩa của cảm xúc):**\n   - **Bản chất:** Không chỉ nhận ra cảm xúc, bạn còn phải hiểu được tại sao cảm xúc đó lại xuất hiện và nó sẽ dẫn đến hậu quả gì.\n   - **Yếu tố hỗ trợ:** Bước này phụ thuộc vào **Cognitive Ability** (*Năng lực nhận thức/Tư duy logic*). Bạn cần dùng lý trí để phân tích nguyên nhân sâu xa đằng sau cảm xúc đó.\n\n3. **Regulate Emotions (Điều chỉnh cảm xúc):**\n   - **Bản chất:** Đây là bước đỉnh cao nhất. Sau khi nhận ra và hiểu, bạn phải biết cách kiểm soát, xoa dịu hoặc thể hiện phản ứng cảm xúc của mình sao cho phù hợp nhất với hoàn cảnh.\n   - **Yếu tố hỗ trợ:** Bước này đòi hỏi bạn phải có **Emotional Stability** (*Sự ổn định cảm xúc*). Nghĩa là bạn không được để cảm xúc tiêu cực cuốn đi mà phải giữ được cái đầu lạnh."
      },
      {
        id: "4.5.2",
        title: "Ví dụ thực tế trong môi trường OB",
        content: "Giả sử bạn là một Quản lý (*Manager*) và đang họp với một nhân viên cấp dưới. Khi bạn giao thêm một task mới, nhân viên này bỗng nhiên thở dài, nhíu mày và nói cộc lốc: \"Vâng, để em làm\".",
        example: "- Nhờ có tính chu đáo (**Conscientiousness**), bạn quan sát nét mặt, giọng điệu và nhận ra nhân viên này đang cực kỳ bực bội và quá tải (**Perceive Emotions**).\n- Nhờ có năng lực tư duy tốt (**Cognitive Ability**), bạn nhớ lại lịch trình làm việc và hiểu rằng sự bực tức này không phải do nhân viên ghét bạn, mà do tuần vừa rồi họ đã phải làm thêm giờ liên tục nên đang bị kiệt sức (**Understand the Meaning**).\n- Dù lúc đầu bạn cũng hơi tự ái vì thái độ cộc lốc của nhân viên, nhưng nhờ có **Emotional Stability**, bạn không nổi điên mắng lại họ. Bạn điều chỉnh được cơn giận của mình, hạ giọng nhẹ nhàng bảo: \"Anh thấy dạo này em có vẻ mệt. Thôi task này để anh nhờ người khác, em cứ tập trung làm xong việc cũ rồi nghỉ ngơi nhé\" (**Regulate Emotions**)."
      }
    ]
  },
  {
    id: "4.6",
    chapter: 4,
    title: "4.6 Identify strategies for emotion regulation.",
    content: "Để kiểm soát và điều chỉnh cảm xúc của bản thân trong môi trường làm việc, con người sử dụng các chiến lược **điều chỉnh cảm xúc** (*Emotion regulation*). Bản chất của việc này là khả năng nhận diện (*identifying*) và tự thay đổi (*modifying*) những cảm xúc mà bạn đang trải qua.",
    subsections: [
      {
        id: "4.6.1",
        title: "5 chiến lược cốt lõi (Emotion Regulation Techniques)",
        content: "1. **Surface acting (Diễn bề ngoài):**\n   - **Bản chất:** Bạn chỉ đơn thuần che giấu cảm xúc thật của mình và đeo lên một \"chiếc mặt nạ\" với những biểu cảm mà công ty yêu cầu.\n   - **Đánh giá:** Chiến lược này thường kém hiệu quả (*ineffective*) và dễ dẫn đến kiệt sức nếu dùng lâu dài.\n\n2. **Deep acting (Diễn sâu):**\n   - **Bản chất:** Thay vì chỉ diễn nét mặt, bạn cố gắng thuyết phục tâm trí mình thay đổi thực sự những cảm xúc bên trong để phù hợp với hoàn cảnh.\n   - **Đánh giá:** Đây là một chiến lược hiệu quả hơn để quản lý cảm xúc.\n\n3. **Emotional suppression (Kìm nén cảm xúc):**\n   - **Bản chất:** Chủ động đè nén, nuốt cảm xúc tiêu cực vào trong mà không bộc lộ hay giải quyết nó.\n   - **Đánh giá:** Giống như *Surface acting*, việc kìm nén thường không mang lại hiệu quả giải tỏa thực sự (*ineffective*).\n\n4. **Cognitive reappraisal (Tái đánh giá nhận thức):**\n   - **Bản chất:** Đây là một thủ thuật tâm lý cực kỳ mạnh mẽ. Bạn chủ động thay đổi cách suy nghĩ, góc nhìn về tình huống gây ra cảm xúc đó để làm cho nó bớt tiêu cực hơn.\n   - **Đánh giá:** Đây là một trong những chiến lược mang lại hiệu quả tích cực nhất.\n\n5. **Social sharing (Chia sẻ xã hội):**\n   - **Bản chất:** Bạn tìm một người khác (đồng nghiệp, bạn bè) để giãi bày, tâm sự và \"xả rác\" cảm xúc. Việc chia sẻ giúp xoa dịu tâm trí."
      },
      {
        id: "4.6.2",
        title: "Góc nhìn Đạo đức (Ethics) và Lời khuyên cho Manager",
        content: "- **Tranh cãi đạo đức:** Có một số ý kiến cho rằng việc ép bản thân điều chỉnh cảm xúc là phi đạo đức (*unethical*) vì nó bắt bạn phải giả tạo/diễn kịch (*acting*). Tuy nhiên, nhiều người lại cho rằng kiểm soát cảm xúc là bắt buộc để bạn có thể nhìn nhận vấn đề một cách khách quan, lý trí (*dispassionate perspective*).\n- **Lời khuyên từ OB:** Trong vai trò quản lý, hãy hướng dẫn nhân viên từ bỏ thói quen dùng *Surface acting* và *Emotional suppression* vì chúng không giải quyết được gốc rễ. Thay vào đó, hãy đào tạo họ cách sử dụng *Deep acting*, *Cognitive reappraisal* và khuyến khích bộc lộ cảm xúc một cách tự nhiên, chân thực nhất có thể."
      }
    ]
  },
  {
    id: "4.7",
    chapter: 4,
    title: "4.7 Apply concepts about emotions and moods to specific OB issues.",
    content: "Cảm xúc và tâm trạng chi phối trực tiếp đến từng ngóc ngách hoạt động của một công ty. Dưới đây là phân tích chi tiết về cách áp dụng các khái niệm này vào **10 khía cạnh/vấn đề cụ thể** trong OB:",
    subsections: [
      {
        id: "4.7.1",
        title: "1. Selection (Tuyển dụng nhân sự)",
        content: "**Bản chất:** Trí tuệ cảm xúc (*EI*) nên được coi là một tiêu chí tuyển dụng (*hiring factor*) quan trọng, đặc biệt là đối với các công việc đòi hỏi tương tác xã hội nhiều (*social jobs*).",
        example: "**Ví dụ OB:** Khi tuyển dụng vị trí Chuyên viên Chăm sóc Khách hàng, nhân sự (HR) cần cho ứng viên làm bài test EI để xem họ có khả năng giữ bình tĩnh khi bị khách hàng mắng hay không."
      },
      {
        id: "4.7.2",
        title: "2. Decision Making (Ra quyết định)",
        content: "**Bản chất:** Những cảm xúc tích cực (*Positive emotions*) có thể dẫn đến việc đưa ra các quyết định tốt hơn, nhanh nhạy và chính xác hơn.",
        example: "**Ví dụ OB:** Khi một vị sếp đang trong tâm trạng vui vẻ, họ thường xử lý thông tin phức tạp tốt hơn và có xu hướng đưa ra quyết định đầu tư táo bạo, mang lại lợi nhuận cao cho công ty."
      },
      {
        id: "4.7.3",
        title: "3. Creativity (Sự sáng tạo)",
        content: "**Bản chất:** Tâm trạng tích cực (*Positive mood*) làm tăng tính linh hoạt, sự cởi mở và khả năng sáng tạo của nhân viên.",
        example: "**Ví dụ OB:** Trong một buổi brainstorm của phòng Marketing, nếu sếp bắt đầu bằng một câu chuyện vui vẻ và lời khen ngợi, nhân viên sẽ có tâm trạng tốt và dễ nảy ra những ý tưởng quảng cáo \"điên rồ\" và độc đáo hơn."
      },
      {
        id: "4.7.4",
        title: "4. Motivation (Động lực làm việc)",
        content: "**Bản chất:** Tâm trạng tích cực ảnh hưởng trực tiếp đến kỳ vọng thành công của nhân viên. Việc nhận được phản hồi/đánh giá (*feedback*) sẽ càng khuếch đại (*amplifies*) hiệu ứng này.",
        example: "**Ví dụ OB:** Sếp xem qua và đưa ra feedback khen ngợi: \"Em làm phần này rất tốt, cố lên chút nữa là hoàn hảo\". Tâm trạng nhân viên lập tức vui lên, họ tin rằng mình sẽ thành công và có động lực cày cuốc cả đêm."
      },
      {
        id: "4.7.5",
        title: "5. Leadership (Sự lãnh đạo)",
        content: "**Bản chất:** Cảm xúc đóng vai trò rất quan trọng trong việc nhân viên có chấp nhận các thông điệp từ nhà lãnh đạo hay không.",
        example: "**Ví dụ OB:** Khi CEO thông báo công ty đang gặp khó khăn, nếu CEO truyền đạt với thái độ chân thành và đầy nhiệt huyết, nhân viên sẽ dễ bị lay động và đồng lòng hy sinh. Nếu CEO truyền đạt với vẻ mặt vô cảm, nhân viên sẽ sinh ra bất mãn."
      },
      {
        id: "4.7.6",
        title: "6. Negotiation (Đàm phán)",
        content: "**Bản chất:** Cảm xúc có thể ảnh hưởng trực tiếp đến kết quả của các cuộc đàm phán.",
        example: "**Ví dụ OB:** Một nhân viên Sales giỏi biết cách kiểm soát cảm xúc, không để lộ sự lo lắng (*negative emotion*) khi đối tác ép giá, từ đó giữ vững được vị thế đàm phán và chốt được deal có lợi."
      },
      {
        id: "4.7.7",
        title: "7. Customer Service (Dịch vụ khách hàng)",
        content: "**Bản chất:** Cảm xúc của nhân viên ảnh hưởng trực tiếp đến chất lượng dịch vụ và sự hài lòng của khách. Hiện tượng này được giải thích bằng **Emotional contagion** (*Sự lây lan cảm xúc*).",
        example: "**Ví dụ OB:** Bạn bước vào quán cafe, bạn thu ngân cười rất tươi rạng rỡ chào bạn. Theo cơ chế *Emotional contagion*, bạn tự nhiên cũng mỉm cười và thấy vui lây. Lần sau bạn sẽ tiếp tục quay lại quán này."
      },
      {
        id: "4.7.8",
        title: "8. Work-Life Conflict (Xung đột công việc - Cuộc sống)",
        content: "**Bản chất:** Cảm xúc có tính chất \"tràn\" (*spill over*). Một ngày làm việc tồi tệ dễ kéo theo một tâm trạng tồi tệ khi về nhà, và ngược lại. May mắn là những cảm xúc này thường tiêu tan sau một đêm ngủ (**dissipates overnight**).",
        example: "**Ví dụ OB:** Sếp xả giận lên bạn ở công ty. Bạn mang cục tức đó về nhà và vô cớ gắt gỏng với vợ/chồng mình. Tuy nhiên, sáng hôm sau ngủ dậy, tâm trạng của bạn thường sẽ trở lại mức cân bằng bình thường."
      },
      {
        id: "4.7.9",
        title: "9. Unethical Workplace Behaviors",
        content: "**Bản chất:** Những cảm xúc tiêu cực (*Negative emotions*) dễ dẫn đến các hành vi sai lệch (**deviant behaviors**) - tức là những hành động vi phạm chuẩn mực và đe dọa đến tổ chức.",
        example: "**Ví dụ OB:** Một nhân viên cảm thấy cay cú (*emotion: anger*) vì không được thăng chức. Cảm xúc tiêu cực này xúi giục anh ta có hành vi trả đũa bằng cách cố tình làm rò rỉ dữ liệu mật của công ty cho đối thủ."
      },
      {
        id: "4.7.10",
        title: "10. Safety and Injury at Work (An toàn và Tai nạn lao động)",
        content: "**Bản chất:** Khuyến cáo được đưa ra là: Không làm công việc nguy hiểm khi đang có tâm trạng tồi tệ (*bad mood*).",
        example: "**Ví dụ OB:** Một công nhân xây dựng vừa cãi nhau to với vợ. Tâm trạng bực tức, buồn bã khiến anh ta mất tập trung. Kết quả là anh ta dễ bị trượt ngã hoặc gây ra tai nạn máy móc tại công trường."
      }
    ]
  },
  {
    id: "6.1",
    chapter: 6,
    title: "6.1 Explain the factors that influence perception.",
    content: "Nhận thức (**perception**) là quá trình mà mỗi cá nhân sắp xếp và diễn dịch những ấn tượng từ giác quan của mình để mang lại ý nghĩa cho môi trường xung quanh. Hành vi của con người được thúc đẩy dựa trên những gì họ \"nhận thức\" là thực tại, chứ không phải bản thân thực tại khách quan.",
    subsections: [
      {
        id: "6.1.1",
        title: "1. Yếu tố từ chính người nhận thức (Factors in the perceiver)",
        content: "Góc nhìn và cách đánh giá bị chi phối bởi thế giới nội tâm: thái độ, động cơ, sở thích, kinh nghiệm trong quá khứ và những kỳ vọng riêng."
      },
      {
        id: "6.1.2",
        title: "2. Yếu tố từ đối tượng được quan sát (Factors in the target)",
        content: "Đặc điểm của sự vật/con người thu hút và định hình nhận thức: sự mới lạ, chuyển động, âm thanh, kích thước, bối cảnh nền, khoảng cách (sự gần gũi) và sự tương đồng."
      },
      {
        id: "6.1.3",
        title: "3. Yếu tố từ tình huống (Factors in the situation)",
        content: "Bối cảnh diễn ra sự việc làm thay đổi cách nhìn nhận: thời gian, môi trường làm việc hoặc bối cảnh xã hội."
      }
    ]
  },
  {
    id: "6.2",
    chapter: 6,
    title: "6.2 Describe attribution theory.",
    content: "**Thuyết quy gán** (*Attribution Theory*) giải thích cách chúng ta xác định hành vi là do nguyên nhân **bên trong** (*chủ quan*) hay **bên ngoài** (*khách quan*).",
    subsections: [
      {
        id: "6.2.1",
        title: "3 lăng kính quy gán",
        content: "- **Consistency (Sự nhất quán):** Hành vi có tính chu kỳ không? (Thường xuyên trễ -> Bên trong; Lần đầu trễ -> Bên ngoài).\n- **Consensus (Sự đồng thuận):** Những người khác có hành xử tương tự trong cùng tình huống không? (Ai cũng trễ -> Bên ngoài; Chỉ mình mình trễ -> Bên trong).\n- **Distinctiveness (Sự khác biệt):** Cá nhân có hành xử khác nhau trong các tình huống khác nhau không? (Làm gì cũng trễ -> Bên trong; Chỉ trễ họp này -> Bên ngoài)."
      },
      {
        id: "6.2.2",
        title: "Các lỗi quy gán phổ biến",
        content: "- **Fundamental attribution error (Lỗi quy gán cơ bản):** Khi đánh giá người khác, ta thường đánh giá quá cao yếu tố bên trong (lười, kém) và đánh giá thấp yếu tố bên ngoài (thị trường đi xuống).\n- **Self-serving bias (Thiên kiến tự đề cao):** Khi đánh giá bản thân, ta gán thành công cho yếu tố bên trong (giỏi) và đổ lỗi thất bại cho yếu tố bên ngoài (khách hàng khó tính)."
      }
    ]
  },
  {
    id: "6.3",
    chapter: 6,
    title: "6.3 Explain the link between perception and decision making.",
    content: "Mọi quyết định là phản ứng trước một \"vấn đề\" (sự chênh lệch giữa trạng thái hiện tại và mong muốn). Nhận thức của cá nhân quyết định cách họ \"thấy\" vấn đề đó.",
    subsections: [
      {
        id: "6.3.1",
        title: "Các thiên kiến trong quyết định",
        content: "- **Confirmation Bias (Thiên kiến xác nhận):** Chỉ tìm kiếm thông tin củng cố niềm tin có sẵn và phớt lờ thông tin trái chiều.\n- **Availability Bias (Thiên kiến tính sẵn có):** Đưa ra phán quyết dựa trên thông tin dễ nhớ, mới xảy ra hoặc giật gân thay vì dữ liệu toàn diện.\n- **Escalation of Commitment (Leo thang cam kết):** Tiếp tục đổ thêm nguồn lực vào một quyết định sai lầm dù đã có bằng chứng rõ ràng là nó thất bại."
      }
    ]
  },
  {
    id: "6.4",
    chapter: 6,
    title: "6.4 Contrast the rational model of decision making with bounded rationality and intuition.",
    content: "Có 3 trường phái ra quyết định chính:",
    subsections: [
      {
        id: "6.4.1",
        title: "1. Rational Model (Mô hình hợp lý)",
        content: "Tìm lựa chọn **tối ưu nhất**. Giả định có thông tin hoàn hảo, không thành kiến và tính toán được tiện ích cao nhất. Hiếm khi xảy ra trong thực tế."
      },
      {
        id: "6.4.2",
        title: "2. Bounded Rationality (Tính hợp lý bị giới hạn)",
        content: "Tìm lựa chọn **đủ tốt** (*satisfice*). Con người đơn giản hóa vấn đề vì não bộ có giới hạn xử lý thông tin."
      },
      {
        id: "6.4.3",
        title: "3. Intuition (Trực giác)",
        content: "Dựa trên **cảm giác và kinh nghiệm**. Diễn ra vô thức, nhanh chóng, liên kết các mảnh thông tin rời rạc và bị chi phối mạnh bởi cảm xúc."
      }
    ]
  },
  {
    id: "6.5",
    chapter: 6,
    title: "6.5 Explain how individual differences and organizational constraints affect decision making.",
    content: "Quyết định thực tế bị \"bẻ cong\" bởi sự khác biệt cá nhân và luật chơi của tổ chức.",
    subsections: [
      {
        id: "6.5.1",
        title: "1. Sự khác biệt cá nhân (Individual Differences)",
        content: "- **Personality (Tính cách):** Lòng tự trọng cao dễ đổ lỗi cho ngoại cảnh; mức độ tin vào trực giác khác nhau.\n- **Gender (Giới tính):** Khác biệt trong cách suy nghĩ quá mức (*rumination*) hoặc tiếp cận rủi ro.\n- **Mental Ability (Năng lực trí tuệ):** Người thông minh xử lý nhanh nhưng vẫn dễ mắc lỗi \"quá tự tin\".\n- **Cultural Differences (Sự khác biệt văn hóa):** Văn hóa tập thể ưu tiên hòa hợp nhóm; văn hóa cá nhân ưu tiên thành tích."
      },
      {
        id: "6.5.2",
        title: "2. Những ràng buộc từ tổ chức (Organizational Constraints)",
        content: "- **Performance Evaluation Systems:** Nhân viên quyết định dựa trên tiêu chí bị đánh giá.\n- **Reward Systems:** Công ty thưởng gì, nhân viên làm nấy.\n- **Formal Regulations:** Quy định khắt khe tước đi sự tự do sáng tạo.\n- **Time Constraints:** Áp lực deadline buộc phải dùng trực giác hoặc chọn phương án \"đủ tốt\".\n- **Historical Precedents:** Quyết định bị đóng khung bởi những gì đã làm trong quá khứ."
      }
    ]
  },
  {
    id: "6.6",
    chapter: 6,
    title: "6.6 Contrast the three ethical decision criteria.",
    content: "Khi đối mặt với tình huống đạo đức, con người dựa vào 3 lăng kính:",
    subsections: [
      {
        id: "6.6.1",
        title: "1. Utilitarianism (Chủ nghĩa vị lợi)",
        content: "Quyết định dựa trên **hệ quả**. Mục tiêu mang lại lợi ích lớn nhất cho số đông người nhất."
      },
      {
        id: "6.6.2",
        title: "2. Focus on Rights (Tập trung vào Quyền)",
        content: "Tôn trọng và bảo vệ các quyền tự do cơ bản (riêng tư, ngôn luận). Bảo vệ những người tố cáo sai phạm (*whistleblowers*)."
      },
      {
        id: "6.6.3",
        title: "3. Justice (Sự công bằng)",
        content: "Thực thi các quy tắc một cách công bằng, vô tư và không thiên vị. Đảm bảo phân phối công bằng lợi ích và chi phí."
      }
    ]
  },
  {
    id: "6.7",
    chapter: 6,
    title: "6.7 Describe the three-stage model of creativity.",
    content: "Sáng tạo là khả năng tạo ra ý tưởng mới mẻ và hữu ích.",
    subsections: [
      {
        id: "6.7.1",
        title: "Giai đoạn 1: Causes (Nguyên nhân)",
        content: "- **Creative potential:** Tiềm năng cá nhân.\n- **Creative environment:** Môi trường khuyến khích và khen thưởng đổi mới."
      },
      {
        id: "6.7.2",
        title: "Giai đoạn 2: Creative behavior (Hành vi)",
        content: "Gồm 4 bước: Định hình vấn đề -> Thu thập thông tin -> Tạo ra ý tưởng -> Đánh giá ý tưởng."
      },
      {
        id: "6.7.3",
        title: "Giai đoạn 3: Creative outcomes (Kết quả)",
        content: "Ý tưởng phải đáp ứng 2 tiêu chí: **Novelty** (Mới mẻ) và **Usefulness** (Hữu ích)."
      }
    ]
  },
  {
    id: "6.8",
    chapter: 6,
    title: "Implications for Managers (Ứng dụng cho Quản lý)",
    content: "Những hàm ý quan trọng nhất dành cho các nhà quản lý:",
    subsections: [
      {
        id: "6.8.1",
        title: "1. Behavior follows perception",
        content: "Để điều chỉnh hành vi, cần đánh giá cách nhân viên nhìn nhận công việc và môi trường."
      },
      {
        id: "6.8.2",
        title: "2. Judging others' behavior",
        content: "Đừng vội vã đưa ra kết luận; hãy nhớ lỗi quy gán rất dễ xảy ra."
      },
      {
        id: "6.8.3",
        title: "3. Constraints on decision making",
        content: "Hiểu rõ các rào cản vô hình (tính cách, tổ chức) làm lệch hướng nhìn nhận."
      },
      {
        id: "6.8.4",
        title: "4. Ethical dilemmas",
        content: "Sử dụng lăng kính hậu quả, trách nhiệm và quyền lợi để giải quyết các tình huống khó khăn."
      }
    ]
  }
];
