const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const welcomeMsg = document.getElementById('welcome-message');
const questBox = document.getElementById('question-container');
const currentDiv = document.getElementById('current');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score-display');
const questionNumberDisplay = document.getElementById('question-number');
const quizHeader = document.getElementsByTagName('h1')[0];
const congMsg = document.getElementById('congMsg');
const controlButtons = document.getElementById('restart-control');
const score = document.getElementById('score');
const percentage = document.getElementById('percentage');
const restartBtn = document.getElementById('restart-btn');
nextButton.disabled = true;


const questions = [
    {
    question: "مَنْ رَافَقَ النَّبِيَّ ﷺ دَاخِلَ غَارِ ثَوْرٍ أَثْنَاءَ الْهِجْرَةِ؟",
    choices: [
      "عُمَرُ بْنُ الْخَطَّابِ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَلِيُّ بْنُ أَبِي طَالِبٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو بَكْرٍ الصِّدِّيقُ (رَضِيَ اللَّهُ عَنْهُ)",
      "الزُّبَيْرُ بْنُ الْعَوَّامِ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "أَبُو بَكْرٍ الصِّدِّيقُ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ نَامَ فِي فِرَاشِ النَّبِيِّ ﷺ لَيْلَةَ الْهِجْرَةِ؟",
    choices: [
      "عُثْمَانُ بْنُ عَفَّانَ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَلِيُّ بْنُ أَبِي طَالِبٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "طَلْحَةُ بْنُ عُبَيْدِ اللَّهِ (رَضِيَ اللَّهُ عَنْهُ)",
      "سَعْدُ بْنُ أَبِي وَقَّاصٍ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "عَلِيُّ بْنُ أَبِي طَالِبٍ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ كَانَ يُلَقَّبُ بِذُو النُّورَيْنِ؟",
    choices: [
      "عَلِيُّ بْنُ أَبِي طَالِبٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عُثْمَانُ بْنُ عَفَّانَ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "عُثْمَانُ بْنُ عَفَّانَ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ جَمَعَ الْقُرْآنَ فِي مُصْحَفٍ وَاحِدٍ فِي خِلَافَةِ أَبِي بَكْرٍ؟",
    choices: [
      "زَيْدُ بْنُ ثَابِتٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "ابْنُ عَبَّاسٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "أُبَيُّ بْنُ كَعْبٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "مُعَاذُ بْنُ جَبَلٍ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "زَيْدُ بْنُ ثَابِتٍ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَا أَوَّلُ مَعْرَكَةٍ كَبِيرَةٍ انْتَصَرَ فِيهَا الْمُسْلِمُونَ؟",
    choices: [
      "مَعْرَكَةُ أُحُدٍ",
      "مَعْرَكَةُ الْخَنْدَقِ",
      "مَعْرَكَةُ بَدْرٍ",
      "مَعْرَكَةُ حُنَيْنٍ"
    ],
    answer: "مَعْرَكَةُ بَدْرٍ"
  },
  {
    question: "مَنْ لُقِّبَ بِسَيْفِ اللَّهِ؟",
    choices: [
      "عَلِيُّ بْنُ أَبِي طَالِبٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "خَالِدُ بْنُ الْوَلِيدِ (رَضِيَ اللَّهُ عَنْهُ)",
      "حَمْزَةُ بْنُ عَبْدِ الْمُطَّلِبِ (رَضِيَ اللَّهُ عَنْهُ)",
      "الزُّبَيْرُ بْنُ الْعَوَّامِ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "خَالِدُ بْنُ الْوَلِيدِ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ أَوَّلُ شَهِيدٍ فِي الْإِسْلَامِ؟",
    choices: [
      "بِلَالُ بْنُ رَبَاحٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "سُمَيَّةُ بِنْتُ خَيَّاطٍ (رَضِيَ اللَّهُ عَنْهَا)",
      "يَاسِرُ بْنُ عَامِرٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "حَمْزَةُ بْنُ عَبْدِ الْمُطَّلِبِ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "سُمَيَّةُ بِنْتُ خَيَّاطٍ (رَضِيَ اللَّهُ عَنْهَا)"
  },
  {
    question: "مَنْ كَانَ أَكْثَرَ الصَّحَابَةِ رِوَايَةً لِلْحَدِيثِ؟",
    choices: [
      "ابْنُ عَبَّاسٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَائِشَةُ (رَضِيَ اللَّهُ عَنْهَا)",
      "أَبُو هُرَيْرَةَ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَبْدُ اللَّهِ بْنُ عُمَرَ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "أَبُو هُرَيْرَةَ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "كَمْ عَدَدُ الْمُسْلِمِينَ فِي مَعْرَكَةِ بَدْرٍ؟",
    choices: ["١٠٠", "٣١٣", "٧٠٠", "١٠٠٠"],
    answer: "٣١٣"
  },
  {
    question: "مَا اسْمُ الْمَرْضِعَةِ الَّتِي أَرْضَعَتِ النَّبِيَّ ﷺ فِي الْبَادِيَةِ؟",
    choices: [
      "حَلِيمَةُ السَّعْدِيَّةُ",
      "جُوَيْرِيَةُ بِنْتُ الْحَارِثِ",
      "أُمُّ سُلَيْمٍ",
      "آمِنَةُ بِنْتُ وَهْبٍ"
    ],
    answer: "حَلِيمَةُ السَّعْدِيَّةُ"
  },
  {
    question: "مَنْ اسْمُ الْخَادِمِ الَّذِي أَرْسَلَتْهُ خَدِيجَةُ مَعَ النَّبِيِّ ﷺ فِي التِّجَارَةِ؟",
    choices: [
      "رَبِيعَةُ",
      "نَفِيسَةُ",
      "سُمَيَّةُ",
      "مَيْسَرَةُ"
    ],
    answer: "مَيْسَرَةُ"
  },
  {
    question: "مَنْ كَانَ أَوَّلُ مَنْ صَلَّى الصُّبْحَ مَعَ النَّبِيِّ ﷺ فِي الْمَسْجِدِ؟",
    choices: [
      "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عُمَرُ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو هُرَيْرَةَ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ كَانَ أَكْثَرَ الصَّحَابَةِ رَوِيَةً فِي مَعْرَكَةِ أُحُدٍ؟",
    choices: [
      "عُمَرُ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "حَمْزَةُ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "حَمْزَةُ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ أَرْسَلَ النَّبِيُّ ﷺ لِيُعَلِّمَ النَّاسَ فِي الْمَدِينَةِ قَبْلَ الهِجْرَةِ؟",
    choices: [
      "مُعَاذُ بْنُ جَبَلٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو هُرَيْرَةَ (رَضِيَ اللَّهُ عَنْهُ)",
      "ابْنُ عَبَّاسٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "مُعَاذُ بْنُ جَبَلٍ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ قَاتَلَ فِي مَعْرَكَةِ أُحُدٍ وَتَحَمَّلَ أَشَدَّ الضُّرُوبِ؟",
    choices: [
      "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)",
      "حَمْزَةُ (رَضِيَ اللَّهُ عَنْهُ)",
      "خَالِدُ بْنُ الْوَلِيدِ (رَضِيَ اللَّهُ عَنْهُ)",
      "الزُّبَيْرُ بْنُ الْعَوَّامِ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "حَمْزَةُ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ أَكْثَرُ صَدَقَةً فِي الْغَزَوَاتِ؟",
    choices: [
      "عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عُمَرُ (رَضِيَ اللَّهُ عَنْهُ)",
      "خَالِدُ بْنُ الْوَلِيدِ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ كَانَ أَوَّلُ مَنْ أَعْطَى الزَّكَاةَ فِي الْمَدِينَةِ؟",
    choices: [
      "عُمَرُ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ أَخْذَلَ أَهْلَهُ وَأَبَى أَنْ يَنْصُرَ الْمُسْلِمِينَ فِي بَدْرٍ؟",
    choices: [
      "أَبُو جَهْلٍ",
      "عُمَرُ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "خَالِدُ بْنُ الْوَلِيدِ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "أَبُو جَهْلٍ"
  },
  {
    question: "مَنْ كَانَ أَشَدَّ أَهْلِ الْمَدِينَةِ حِفَاظًا عَلَى الْقُرْآنِ؟",
    choices: [
      "ابْنُ عَبَّاسٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "زَيْدُ بْنُ ثَابِتٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو هُرَيْرَةَ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "زَيْدُ بْنُ ثَابِتٍ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ كَانَ أَوَّلُ مَنْ قَاتَلَ فِي سَبِيلِ اللَّهِ وَتَحَمَّلَ الشَّدَائِدِ؟",
    choices: [
      "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عُمَرُ (رَضِيَ اللَّهُ عَنْهُ)",
      "حَمْزَةُ (رَضِيَ اللَّهُ عَنْهُ)",
      "الزُّبَيْرُ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "حَمْزَةُ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ أَكْثَرُ الصَّحَابَةِ تَبَنِّيًا لِلْأَطْفَالِ فِي الْمَدِينَةِ؟",
    choices: [
      "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عُمَرُ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو هُرَيْرَةَ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ كَانَ أَكْثَرُ الصَّحَابَةِ حِفَاظًا لِلسُّنَّةِ؟",
    choices: [
      "أَبُو هُرَيْرَةَ (رَضِيَ اللَّهُ عَنْهُ)",
      "ابْنُ عَبَّاسٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)",
      "عُمَرُ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "أَبُو هُرَيْرَةَ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ قَادَ فِي غَزْوَةِ تَبُوكَ وَتَصَدَّقَ بِأَكْثَرِ الْمَالِ؟",
    choices: [
      "عُمَرُ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عُثْمَانُ بْنُ عَفَّانَ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "عُثْمَانُ بْنُ عَفَّانَ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ كَانَ أَوَّلُ مُسْلِمٍ مِنَ الصَّحَابَةِ يُسَاعِدُ الْفُقَرَاءَ؟",
    choices: [
      "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عُمَرُ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ كَانَ أَكْثَرُ الصَّحَابَةِ صَدَاقَةً لِلْفُقَرَاءِ فِي الْمَدِينَةِ؟",
    choices: [
      "عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عُمَرُ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ أَكْثَرُ الصَّحَابَةِ جُهْدًا فِي تَعْلِيمِ النَّاسِ الْقُرْآنَ؟",
    choices: [
      "زَيْدُ بْنُ ثَابِتٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "ابْنُ عَبَّاسٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "مُعَاذُ بْنُ جَبَلٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو هُرَيْرَةَ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "مُعَاذُ بْنُ جَبَلٍ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ كَانَ أَكْثَرُ الصَّحَابَةِ صَبْرًا فِي السَّبِيْ؟",
    choices: [
      "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
      "عُمَرُ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)",
      "أَبُو هُرَيْرَةَ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
    question: "مَنْ كَانَ أَكْثَرُ الصَّحَابَةِ شَهَامَةً وَشَجَاعَةً فِي الْغَزَوَاتِ؟",
    choices: [
      "حَمْزَةُ (رَضِيَ اللَّهُ عَنْهُ)",
      "خَالِدُ بْنُ الْوَلِيدِ (رَضِيَ اللَّهُ عَنْهُ)",
      "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)",
      "عُمَرُ (رَضِيَ اللَّهُ عَنْهُ)"
    ],
    answer: "حَمْزَةُ (رَضِيَ اللَّهُ عَنْهُ)"
  },
  {
  question: "مَنْ كَانَ الْحَامِلَ لِلْعَلَمِ فِي مَعْرَكَةِ أُحُدٍ وَاسْتُشْهِدَ؟",
  choices: [
    "حَمْزَةُ (رَضِيَ اللَّهُ عَنْهُ)",
    "مُعْسَبُ بْنُ عُمَيْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
    "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)",
    "سَعْدُ (رَضِيَ اللَّهُ عَنْهُ)"
  ],
  answer: "مُعْسَبُ بْنُ عُمَيْرٍ (رَضِيَ اللَّهُ عَنْهُ)"
},
{
  question: "مَنْ كَانَ مَعْرُوفًا بِالدُّعَاءِ أَنْ يُثَبِّتَ اللَّهُ بِهِ الْإِسْلَامَ بِوَاحِدٍ مِنَ الْعُمَرَيْنِ؟",
  choices: [
    "أَبُو بَكْرٍ (رَضِيَ اللَّهُ عَنْهُ)",
    "النَّبِيُّ ﷺ",
    "حَمْزَةُ (رَضِيَ اللَّهُ عَنْهُ)",
    "عَلِيّ (رَضِيَ اللَّهُ عَنْهُ)"
  ],
  answer: "النَّبِيُّ ﷺ"
}
];

const correctSound = new Audio('sounds/sahih.mp3');
const wrongSound = new Audio('sounds/qata.mp3');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function toArabicNumbers(num) {
  return num.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
}

function showQuiz() {
  welcomeMsg.classList.add('hide');
  questBox.classList.remove('hide');
  currentDiv.classList.remove('hide');
  startButton.classList.add('hide');
  scoreDisplay.textContent = `${toArabicNumbers(0)} / ${toArabicNumbers(questions.length)}`;
  questionNumberDisplay.textContent = 
`${toArabicNumbers(currentIndex + 1)} من ${toArabicNumbers(questions.length)}`;

};

let currentIndex = 0;
let totalScore = 0;

function getQuestions() {
  nextButton.disabled = true;
  answerButtonsElement.innerHTML = "";
  questionElement.innerHTML = questions[currentIndex].question;
  shuffleArray(questions[currentIndex].choices);
  questions[currentIndex].choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerHTML = choice;
    button.value = choice;
    button.classList.add('btn');
    answerButtonsElement.appendChild(button);
    button.addEventListener("click", () => {
      Array.from(answerButtonsElement.children).forEach(btn => btn.disabled = true);
      nextButton.disabled = false;
      Array.from(answerButtonsElement.children).forEach(btn => {
  btn.classList.add("disabled");
});
      if (button.value === questions[currentIndex].answer) {
        button.classList.add('green');
        button.innerHTML = `${button.value} <span>&#10004;</span> `;
        correctSound.play();
        totalScore++;
        scoreDisplay.textContent = `${toArabicNumbers(totalScore)} / ${toArabicNumbers(questions.length)}`;
      }
      else if (button.value !== questions[currentIndex].answer) {
        button.classList.add('red');
        button.innerHTML = `${button.value} <span>&#10008;</span> `;
        wrongSound.play();
        Array.from(answerButtonsElement.children).forEach(btn => {
          if (btn.value === questions[currentIndex].answer) {
            btn.classList.add('green');
            btn.innerHTML = `${btn.value} <span>&#10004;</span> `;
          }
        });
      }
      nextButton.classList.remove('hide');
      if (currentIndex === questions.length - 1) {
    nextButton.textContent = "عرض النتيجة";
  } else {
    nextButton.textContent = "السؤال التالي";
  }
    })
  });
};

function getResult() {
  currentIndex++;
  if (currentIndex < questions.length) {
    questionNumberDisplay.textContent = `${toArabicNumbers(currentIndex + 1)} من ${toArabicNumbers(questions.length)}`;
    getQuestions();
  }
  else if (currentIndex === questions.length) {
    quizHeader.innerHTML = "انتهى الاختبار!";
    questBox.classList.add('hide');
    nextButton.classList.remove('hide');
    scoreContainer.classList.remove('hide');
    congMsg.classList.remove('hide');
    controlButtons.classList.remove('hide');
    nextButton.classList.add('hide');
    currentDiv.classList.add('hide');

    let percent = Math.floor((totalScore / questions.length) * 100);
    score.textContent = `${toArabicNumbers(totalScore)} / ${toArabicNumbers(questions.length)} \u00A0\u00A0صحيح`;
    percentage.textContent = `${toArabicNumbers(percent)}٪ درجة`;

    // Show/hide English link based on score
    var englishLink = document.getElementById('to-english-link');
    if (percent < 40) {
      englishLink.classList.remove('hide');
    } else {
      englishLink.classList.add('hide');
    }

    if (percent >= 80) {
      congMsg.innerHTML = "<span style='color: var(--biology-green);'>مبروك!</span> &#127881 أنت عبقري!";
    } else if (percent >= 60) {
      congMsg.innerHTML = "<span style='color: var(--biology-green);'>جيد!</span> &#128293 تقوم بعمل جيد!";
    } else {
      congMsg.innerHTML = "واصل التدريب! ستتحسن مع الوقت!&#128170;";
    }
  }
};

function reset() {
  currentIndex = 0;
  totalScore = 0;
  scoreDisplay.textContent = `${toArabicNumbers(0)} / ${toArabicNumbers(questions.length)}`;
  questionNumberDisplay.textContent = `${toArabicNumbers(1)} of ${toArabicNumbers(questions.length)}`;
  scoreContainer.classList.add('hide');
  congMsg.classList.add('hide');
  controlButtons.classList.add('hide');
  quizHeader.innerHTML = 'اختبار السيرة النبوية ﷺ';
  shuffleArray(questions);
  showQuiz();
  getQuestions();
};

startButton.addEventListener('click', () => {
  shuffleArray(questions);
  showQuiz();
  getQuestions();
});
nextButton.addEventListener('click', getResult);
restartBtn.addEventListener('click', reset);


