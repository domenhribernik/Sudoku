const easySudoku = [
  [["600230000","035016002","000890005","790100068","000000000","510008027","500021000","200680150","000059006"],["649235817","835716942","172894635","792154368","468327591","513968427","586421973","279683154","341759286"]],
  [["030000072","600030019","009500003","900008006","000391000","100600004","500001200","270040008","840000050"],["135894672","684732519","729516483","957428316","426391857","138675294","569781243","273945168","841362957"]],
  [["200060500","300051200","010200000","189002000","040895010","000400978","000008010","008930006","009050007"],["294867531","387451269","615293784","189672345","743895612","562431978","456728913","178934526","329156847"]],
  [["006417020","007020006","000500000","600090100","310000092","005020003","000003000","900080200","010942600"],["536417829","147829536","289536174","672394185","318765492","495821763","268753941","954681273","317942658"]],
  [["000405200","014003009","350000061","300002590","006000200","029600004","750000021","100700930","003206000"],["967415283","814623579","352978461","378142596","456397281","129685734","754839621","162745938","893216547"]],
  [["040600009","000008607","300971000","007400050","080309010","030007600","000571003","102800000","700004010"],["745632189","921548637","368971542","917426358","286359714","435187629","864571293","192863475","753294816"]],
  [["130820560","006047008","070006000","000015000","700000009","000460000","000600040","900530600","023048095"],["134829567","256147398","879356214","486915273","715823469","932467581","751692348","984531672","623748195"]],
  [["000490008","048001600","501000000","386000007","500000006","900000382","000000705","002300860","100079000"],["672493158","948251637","531768294","386921547","524783196","917645382","839264715","472315869","156879423"]],
  [["060080000","002700035","005240090","306000040","108020509","050000803","030017400","940003200","000020030"],["769583124","482791635","315246798","396875241","178324569","452169873","632917458","947853216","581624937"]],
  [["030000000","098021500","002064700","947600000","000000000","000007293","001860500","004950170","000000040"],["436759218","798321546","512864739","947623185","235819467","186457293","371864592","684952173","925371648"]],
  [["158000030","620090050","000000100","801600900","200904008","009005607","004000000","030040082","070000546"],["158762439","623491857","794358162","871623945","265974318","439815627","284516397","536749182","971283546"]],
  [["090074200","037000008","000020001","302800019","000020000","150007206","400020000","100000850","009410060"],["198674253","237915468","645823971","362845719","789621543","154397286","486527931","172396854","539418762"]],
  [["000010500","000004019","010509603","009006300","000532000","004100200","104608090","860200000","005040000"],["967813542","358624719","412579683","729486351","186532947","354197268","174638295","863295471","925741836"]],
  [["001000080","090006342","068009000","023800000","709060105","000001820","000400590","973600020","050000100"],["341752689","597816342","268439715","123875964","789264135","546391827","218437596","973651428","654982173"]],
  [["500020839","004030500","000050021","000450000","800020007","000068000","290060000","001040900","547090002"],["571624839","294138576","386759421","312457986","865329417","974168235","293165748","681742953","547893612"]],
  [["005340000","010002800","309000060","834269700","600301009","002875643","010000502","003400090","000016400"],["625348197","714962835","389751264","834269751","657341289","192875643","416973582","573428196","928516437"]],
  [["500002987","920000003","704000002","860104000","005030100","000607059","300000201","800000067","976500008"],["516432987","928671453","734895162","869154723","745239186","213687459","345678291","812394567","976521348"]],
  [["058200900","000900825","000010000","507402109","209506704","406107302","000090000","648002000","005003620"],["658274913","471963825","239518764","537482169","219536784","486197352","321796845","648152397","975843621"]],
  [["000305062","736082000","500000070","940006750","300507009","057900024","080000007","000870964","730405000"],["198375462","736482195","542196378","941826753","328547619","657913824","684219537","251873964","739465281"]],
  [["207060501","403002000","065000030","600000030","315609728","040000006","050000170","000500806","901070403"],["297463581","483152967","165897234","628715934","315649728","749328516","356849172","274531896","981672453"]],
  [["020700800","030180506","810405200","092040080","003000600","040070350","001609058","309045070","004001060"],["925763814","437182596","816495237","592346187","713958624","648172359","271639458","369845271","584721963"]],
  [["002060001","631008050","400009600","390040050","005906800","040070061","009700004","080500362","300010700"],["972465831","631278459","485139627","396148257","715926843","842573961","629783514","187594362","354216798"]],
  [["601040070","487000639","000003000","402009007","975000814","100400205","000500000","548000391","020010504"],["631948275","487152639","952763841","482159367","975263814","136487295","713594826","548726391","629318574"]],
  [["800537001","507001400","000090700","004070018","052000970","380010600","002050000","005700608","400238001"],["849537621","537261489","126894753","964375218","152846973","387912645","782156493","315794628","469238571"]],
  [["020403000","008009731","009710000","200608031","006070200","950104006","000012700","347800900","000407080"],["127453869","458629731","639718542","274698531","186573294","953124876","985312746","347865912","261497385"]]
]

const mediumSudoku = [
  [["000005890","070200056","000000130","048000023","700000001","290000540","037000000","610007090","082300000"],["364175892","179283456","825469137","648951723","735842961","291673548","537489216","614527398","982316754"]],
  [["000092500","000005020","050000704","040100006","507000908","100005030","801000020","060800000","009210000"],["614792583","793485621","852361794","948137256","537246918","126985437","871465329","362879154","549213678"]],
  [["800090004","000000001","900050700","035700000","014809750","000002130","008060003","200000000","300040005"],["812697354","547328961","693451728","235741986","614839752","879562134","478569123","295183476","316247985"]],
  [["060500100","070603200","500009000","040070009","060090020","700080030","000800005","002706030","007002040"],["463582197","978613245","521479863","248371659","361594827","795286134","916834725","482756139","357912648"]],
  [["000700000","000012840","700058020","500907060","003000400","060504002","020810009","051290000","000003000"],["284796351","569312847","731458926","542937168","983126475","167584392","623815479","751294638","849673215"]],
  [["000000000","020305000","000069430","005004610","074106250","012900800","087940000","000802040","000000000"],["356478192","429315768","781269435","835724619","974186253","612953847","587941263","691832547","324576198"]],
  [["058900001","030400007","000000008","170000045","500000008","830000076","800000000","300005010","900003240"],["758936421","239481657","461752398","172689345","564173928","839524176","867214593","342795816","915683247"]],
  [["006030000","058700000","100408090","000380020","200000001","070016000","060908005","000004920","000030800"],["796132854","458796132","123458697","641389527","289547361","375216984","263918475","815674923","749532861"]],
  [["010203000","062100005","097000060","000400079","000010000","250003000","030000920","800009740","000801030"],["815263794","462197385","397485162","186452379","973618254","254973618","531647928","826539741","749821536"]],
  [["400000001","203067009","050000700","007504900","006000700","004602100","008000040","600870902","300000008"],["479835621","213467589","856291743","287514963","156398724","934672185","198352746","645871932","327469518"]]
]

const hardSudoku = [
  [["000890000","700000014","040001060","602100000","300000001","000005302","030200070","680000002","000096000"],["561894327","793256814","248731569","682143759","375928461","914675382","435218976","689537142","127496853"]],
  [["050907000","000030004","020004007","000000023","003758900","670000000","400600080","600040000","000209010"],["854967231","167832594","923154867","598146723","423758916","671392548","412675389","689341275","735289416"]],
  [["290053007","006000090","000609000","001000080","000347000","030000500","000405000","070000900","300920046"],["298153647","756824193","413679852","761529384","589347261","234168597","916475832","472638915","385921746"]],
  [["300020080","007000090","059000000","402005000","301060502","000700604","000000190","030000600","020040007"],["316729584","847153296","259468173","462835971","371469582","895712634","648257193","735918624","921346587"]],
  [["064070000","020008061","003600000","800006900","000010000","009800004","000002600","730100050","000050120"],["164275389","527398461","983641572","823746951","645219873","719835264","518492637","732186954","496357128"]],
  [["070902005","800470002","040300000","000004600","000209000","006100000","000001050","500034008","800205060"],["376912845","851476392","942358671","198534627","743269185","526187439","469781253","527634918","813295764"]],
  [["000079200","000100004","300860010","000004500","506000907","009500000","040067003","300001000","008950000"],["651479238","782153694","394862715","712394586","536218947","489576231","145867923","379421865","628953147"]],
  [["005004000","370100002","000090018","000600508","700000003","905004000","120050000","600001097","000200300"],["915284367","378165942","462793518","431672598","726589413","985134627","123759846","654831297","879246351"]],
  [["000000072","300500804","200703000","040008100","000060000","009500020","000409005","903002001","680000000"],["954816372","376529814","218743956","547298163","238167495","169534827","721489635","943652781","685371492"]],
  [["090008000","010900050","000730806","800007002","003000500","100600007","405026000","030008060","000300070"],["793568214","816924357","524731896","849157632","673492581","152683947","475926381","139748265","268315479"]]
]

const newMedium = [
  [["500000006","000000000","080740901","018300000","360749021","000005390","809054070","000000000","400000008"],["527193486","914586237","683742951","918362745","365749821","274815396","839254671","152678493","467139528"]],
  [["620000040","805400690","400070000","100008005","000070000","700200009","000080003","023009508","050000027"],["627359841","835412697","491876532","196438275","254971386","783265149","764582913","123769548","958314627"]],
  [["060914002","904800000","000000040","007090080","400080007","090060100","070000000","000009205","600285070"],["768914352","954823671","312756948","527491683","416382597","893567124","275146839","148739265","639285471"]],
  [["000000000","700012540","031008706","870000000","001030200","000000047","107900350","065170008","000000000"],["465793218","789612543","231458796","879624531","451837296","623519847","147982356","365174928","982365174"]],
  [["170300024","005000000","030600091","000002000","803000106","000100000","910008040","000000900","780004053"],["179385624","465219378","832647591","561832497","823794156","479165328","913258746","542637981","786914253"]],
  [["000000030","400830007","008020600","000600214","062000980","184009000","001050700","600049001","070000000"],["527146839","496835217","318927645","973685214","562174983","184239756","491352768","628749351","573861492"]],
  [["003000400","000100605","000820007","060200001","014000580","200001040","900085000","706003000","008000900"],["193576428","278149635","564823197","869254731","314967582","275381649","912685347","756493821","438712956"]],
  [["506008032","004007801","000200006","200000040","000090000","070000002","100004000","309600400","620700503"],["596418732","234967851","187235946","261853947","543792186","879461352","185324679","379615428","624798513"]],
  [["009080700","001000206","000002109","000090100","850602097","007040000","906400000","708000300","005070600"],["329681745","581974236","764352189","264597138","853612497","917843526","916453872","728169345","435278691"]],
  [["030005060","400902300","009006870","004000070","000809000","010000300","023500700","005207008","090400050"],["137485269","486972351","529136874","654312978","723869514","918745362","823596741","145237698","697481253"]],
  [["800000000","000001590","005420003","307004080","062000130","090800507","700023900","025400000","000000001"],["831695472","246371598","975428613","357164289","862957134","194832567","718523946","625419783","349786251"]],
  [["000300000","010490005","020006401","008701400","003000900","004908600","804600070","500071020","000002000"],["546317289","318492765","729586431","968731452","153246987","274958613","824695173","539871624","167342895"]],
  [["000005000","091002006","070008200","360500007","004903100","900006024","009100030","200300640","000700000"],["283615974","491732586","675498231","361542897","824973165","957186324","459126738","217358649","863749512"]],
  [["407000100","200000406","009200000","003060200","100729008","002040700","000001300","302000004","001000507"],["437689152","281573496","659214378","973568214","145729638","862143795","745821396","362957814","981436527"]],
  [["000700000","000009517","007430200","900000803","020050070","304000005","009026500","486100000","000009000"],["192758634","348269517","567431298","965247813","821953674","374816925","379426581","486135792","152789643"]]
]

const newHard = [
  [["408320000","300008006","005700000","000000200","654000781","007000000","000004600","400800007","000063901"],["418326759","372598146","695714832","891547263","654923781","327186459","132974685","469815237","578263941"]],
  [["080000010","076100000","400009200","700001650","500000007","092300004","005400007","000005830","040000060"],["589276314","276143958","431589276","743891652","581462397","692357814","135468927","629715834","748923165"]],
  [["000000000","007800490","030049100","034006050","100000008","050700290","005380010","082005900","000000000"],["941673528","567821493","832549167","234896157","179254638","658713294","465389712","382715946","971426385"]],
  [["002040360","004070010","900800000","816009000","000000000","000300168","000008004","020060300","074030200"],["782941365","654273918","913856742","816459237","732186549","495327168","593128674","821467395","674539281"]],
  [["900730650","400800300","200000000","003047200","000000000","009150700","000000009","002003001","014082007"],["918734652","467825319","235691478","163847295","754296138","829153746","386571429","972643581","514982367"]],
  [["120903000","005800007","700002000","000000800","958000742","006000000","000400008","200001500","000507061"],["126973584","495816327","783452619","347259861","958163742","126874935","615432798","279681534","348597261"]],
  [["057020080","100700009","000600050","014008000","070000080","000200960","040006000","200005003","030090470"],["457329681","168754329","329678754","214968573","976531482","583247961","145736892","297845613","836192475"]],
  [["000006500","000210003","012000080","053000000","002405800","000000490","020000390","500027000","006500000"],["837946512","954218763","612753984","453689271","192475836","867321495","724168395","589327641","136549278"]],
  [["000070300","036200005","007400080","002004100","070000060","008100200","090005600","800004510","005010000"],["248576319","136289745","597431682","962834157","471952368","358176249","491725683","823694517","765813294"]],
  [["000000756","050406008","000802000","002900070","500000001","060008900","000203000","100807090","437000000"],["428391756","953476218","671852349","132964875","589732641","764518923","689243517","125867394","437195286"]],
  [["000000450","400050000","520006807","007000800","000617000","003000900","502700041","000060005","018000000"],["173928456","486753129","529146837","217394865","598617342","463285971","532789641","974261835","618354792"]],
  [["060000070","010005300","309008000","384000050","000060000","020000871","000200501","002400070","090000030"],["862413975","714925386","359768412","384127659","197568243","625943871","738296541","652431879","194587236"]],
  [["203000007","005000009","600400003","030000010","500103007","070000080","500008009","801000300","200000806"],["243951687","715638249","698427153","836792415","524183967","971564382","564328179","871496352","239715846"]],
  [["010004305","002700000","050001090","400006000","200000003","000100008","080900030","000007600","305200010"],["718294365","392756814","654831792","453826179","281975463","967143528","682941537","149537628","375286419"]],
  [["000054060","005080940","039000000","090500602","000000000","507008040","000000420","057090600","020180000"],["178954263","265783941","549612875","391547682","824136579","567298341","816735429","357492618","924186753"]]
]




const extremeSudoku = [
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]],
  [["","","","","","","","",""],["","","","","","","","",""]]
]