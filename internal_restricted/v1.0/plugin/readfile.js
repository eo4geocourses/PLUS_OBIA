
var text={
	//Capitel 1: Introduction& Welcome
	f0_0:"Let us start!",
	f1_0:"Welcome to the world of object-based image analysis! We are happy that you’re here – to share some exciting ideas with us! You already noticed that this course is designed in such a way that you can study the material on your own. All relevant documents, papers, and other external sources are provided. Plus the content is conveyed through interactive sessions, meaning that chapters as well as exercises use multi-media content to best convey the matter presented.The course has been growing over the last years and today you’ll benefit from a series of preceding discussions and problems addressed. Still, we happily receive your feedback, whether related to content or organisational issues. Explore and enjoy!",
	//1.1 Introduction
	f2_0:"First, there are some organizational and informative aspects. Please study the following slides on your own. They will provide more information about course objectives, structure, and copyright.  When you reach the chapter on course objectives, I will guide you again through the course by pressing the play button at the bottom-right corner.",
		//1.1.1 Forword
		f1_1:"",
	// 1.2 Front Matter
	f3_0:"",
		// 1.2.1 Front Matter
		f3_1:"",
		
		//1.2.2 Disclaimer
		f3_2:"",
		
		//1.2.3 Objectives:
		f3_3:"",
		
		//1.2.4 Course Structure:
		f3_4:"",
		
	// 1.3 Course Content
	f4_0:"Lets look at the course content.",
		// 1.3.1 Course Content
		f4_1:"The course comprises eight chapters: The introduction in chapter 1 opens the stage for the field of object-based image analysis. It briefly reflects on how we deal with objects in both our daily and professional life. It then sets the broader frame for the reasons why we actually need such a technology, including to address (and also cope with) global challenges. After we try to clarify what is – or maybe better: what does OBIA, we will look at a very critical – nut not exclusive – ingredient we are using, the recent generation of high-resolution satellite data.  The first thematic chapter, chapter 2, Image interpretation and perception, discusses some of the specificities of how human perception, not digging too much into cognitive psychology, but just covering as much as we need  to better understand the challenges to OBIA. When we move into hierarchy theory in chapter 3, we briefly explore one of the crucial ordering principles of reality  or lets say of our conceptualization of reality. We are interested in hierarchy principles because they are manifested in space and time, in different-sized objects, detectable on images. The last theoretical chapter, chapter 4, before we actually start with OBIA, is about knowledge representation. We know there is a difference between knowledge we simply collect by reading a book or newspaper and   experience. Knowledge can be externalized and easily shared with others, experience not so easy. However, in OBIA we need to make both explicit and encapsulated in rules. Chapter 5 addresses a methodological key element of OBIA, image segmentation. The creation of image objects has great  importance in practical context and is often seen as the asset against manual interpretation. Strongly linked with the production of boundaries is object classification – chapter 6. This often goes far beyond a mere labelling of image objects according to one single spectral feature. In fact, image classification within OBIA is not as linear as in a classical approach; rather it is a cyclic, a more modelling-like process that employs segmentation and classification routines in a repeated, intermingled, manner.  As we will see in chapter 7, thematic accuracy assessment goes beyond the traditional  site-specific accuracy measures, which were point-, not object-based. We will look at means to explore this, by discussing the concept of object-fate analysis, and also, and more general, object validity.",

		f4_1_f:" Finally, in chapter 8, we are brave enough to go beyond image analysis in a stricter sense, by integrating and analyzing other kinds of continuous data sets. We start with the obvious, digital elevation models and the related landform analysis,     and move further to exploring socio-economic   data in multi-dimensional problem spaces, towards creating spatial meta-indicators.",
		//1.3.2 Assignments
		
	// 1.4 Objects in our life
	f5_0:"At first we have to take a look at how we percieve objects in our life.",
		//1.4.1 Objects in our life
		f5_1:"In our daily lives we deal with objects. We see objects, we handle with objects, we sense objects – and yes we even think objects.But what are objects? Are objects ‘things’? Many people would consider things as equal to objects, especially in our daily lives. But things are just a subset of objects. ",
		f5_1_f:"‘Objects’: where does it come from? The word is originating from Latin ‘obicere’, meaning literally ‘to throw against’, and then more figuratively ‘to offer’, ‘to reply’, and of course the expression ‘to object to’. So an object is something we can touch, handle, think and tell of.",
		f5_1_f_1:"Thus it implies that it is something which is a conceptual whole, an entity. Of course, our world is much more and much richer than a simple collection of objects, but you may ask yourself how much of your daily life is determined by objects.And so is in professional life: Analyzing, planning, designing, managing our environment requires objects, too.",
		f5_1_f_2:"Professionals dealing with space, such as spatial planners, geographers, landscape ecologist, have their particular (and often very much specialized) sets of objects which they are interested in.  Otherwise this, our environment cannot be handled, it would be too complex …",
		f5_1_f_3:"In fact, using objects reduces complexity. At this very point, some of us may tend to move into a philosophical debate. “Is that what we see and what we consider as objects, the real world – or is just our conceptualisation of it?” Questions like these are ok, and in fact quite important for digesting the matter, but for our purposes it is sufficient to accept the fact, that even if only conceptualised, this constitutes our reality and the world we live and work in.",
		f5_1_f_4:"Spatial reasoning has found different categories of objects, or more precise, object boundaries, to address the gradual transition from ‘real’ objects to more conceptual ones. We will explore this later on, but anyway – the challenge, or maybe better: the adventure, in OBIA is to deal with both! Sometimes not that obvious, but in the example given below we shall see that there is plenty of conceptual aspects flowing into the cognition of objects.",
		
		// 1.4.2 Objects in our life- Forest structure
		f5_2:"Consider managing a forest: foresters or ecologists have specific object classes they are looking at. In other words, a specific set of target classes. Forest stands, forest types, etc are used, because hardy one can handle all individual plants occurring there.",
		
		// 1.4.3 Objects in our life -Forest stands
		f5_3:"Starting with individual trees, and then moving over groups of trees, to stands, to entire forests, we are readily grouping fine scale objects to higher order ones. This – while implying a high degree of practicability – not only mirrors a human attitude of organising the world, but also reflects the (hierarchical) organisation of any (natural) system.",
	
	// 1.5 Landscape and objects
	f6_0:"So isn’t it only natural that on images, air photos or a satellite images we are looking for objects too? ",
		// 1.5.1 Landscape and objects part 1
		f6_1:"Definitely, in geographical image analysis, objects are representations of real-world units significant in a certain application context. This image shows landscape objects as viewed from an aircraft window. What objects can be seen on this image? Some objects are kind of obvious",
		//1.5.2 Landscape and objects part 2
		f6_2:"Roads, settlements",
		//1.5.3 Landscape and objects part3
		f6_3:" woodland",
		//1.5.4 Landscape and objects part 4
		f6_4:"agricultural fields and so on..But is an interpretation of this image as straight forward as that? In other words, are the objects on this image unique and undisputable? We need to be more specific in answering this question",
		// Landscape and objects part 5
		f6_5:"If we would talk to colleagues they might have a different focus, and we would figure out they are using a different ‘set of objects’ just as a set of words someone is using in their own language.",
		f6_5_f_1:"Suppose you are a spatial planner and you are interest in how to better concentrate the settlements. You want to optimize infrastructure measures and thus avoid uncontrolled sprawl. So you are interested in types and distribution of settlements. Others may have a different focus when they look at the image.",
		f6_5_f_2:"A landscape ecologist might look at the functional connectivity of the (remnant) forest patches or the naturalness of that meandering river landscape.	An energy expert might investigate the average size of fields for bio fuel production.",
		f6_5_f_3:"A tourism promoter might be interested in the arrangement of natural and cultural sites and their respective distances etc. On a ‘higher level’ of abstraction the landscape ecologist may differentiate between more ‘natural’ and more ‘anthropogenic’ areas. Both these areas have some specific properties which experience matches against what we would see on the image. Or, in the example of the spatial planner we could aggregate even more and we would treat the entire scene as one single object: it’s altogether a rural area!",
		// Landscape and objects part 6
		f6_6:"So first thing we observe is, we are looking for specific objects, and in order to find these objects we have object templates in mind. Once these templates or object hypotheses are met by certain object, we ‘detect’ it. In other words, we find an instance of an object category or object class. Second, we have a particular set of objects at our disposal that depends on our field of interest, but also on experience. This is the pool of classes that we are using. Thirdly we have seen that we may apply different levels of aggregation. Leaving out in this example the level of single houses or trees you may realize that – again depending on the context of use – we can represent an imaged scene on different levels of aggregation.Before proceeding to the next chapter let’s, for a moment, think of the mechanisms that make up object detection. We will explore these later on, so for the time being we should only try to reflect on the following questions:",
		f6_6_f_1:"What actually makes up a settlement? Is it the size of the area covered? Is it the specific arrangement of houses? And is the dominance of small houses the critical point to consider this area as rural, or is it rather the arrangement of settlements?",
		f6_6_f_2:"What determines a natural river system? What are the particularities of it?",
		f6_6_f_3:"What defines an intensively used agricultural area? Do we look for an exclusive coverage of crop fields or is it rather a gradual transition from less intensive to more intensive areas? In how far do we ignore other structures that would not hint to an intensively used area?",
		
	// 1.6 OBIA -information update
	f7_0:"Before we try to clarify what OBIA actually is, we want to set a bit the broader scene of its great potential",
		//1.6.1 OBIA information update part 1
		f7_1:" (1) in providing updated information in a way that meets the particular needs",
		f7_1_f_1:", and (2) in integrating various methods of geospatial information processing. As the examples used in this course will illustrate, there is a broad range of applications where OBIA can address ambitious needs for information update.",
		f7_1_f_2:"What we mainly discuss here is OBIA as used in geographical context, some therefore call it GEOBIA. But it is not necessarily confined to geographic scales. Likewise, as we will see in the last chapter, the approach is not confined to image data. Through its high potential to integrate all kinds of spatial data OBIA helps cope with the challenges of providing updated information, even in more complex situations.",
		f7_1_f_3:"There are several reasons accounting for that: Object-based image analysis is flexible enough to utilize different target geometries. These can be derived from image information itself or can be obtained from existing delineations, reaching from a given land use classification to a set of administrative boundaries. OBIA is capable to statistically integrate spatially related information into to the objects used. By this we can, for example, easily perform map algebra zonal operators. By the same approach, OBIA can integrate different sensor information. For example, different spatial resolutions from optical sensors or optical data with laser scanning and so forth. With OBIA we are able to model object categories, which reflect composite classes. They are very much tuned to a specific purpose or ambitious technical goal. For example biotope complexes.",
		// 1.6.2 OBIA information update part 2
		f7_2:"This can be illustrated when we move from the intermediate stage of a modelled composite object to an object which is fully ‘valid’. As we will see later, object validity does not only look at the correct label but also at its fitness to existing workflows and spatial data infrastructures. ",
		// 1.6.3 OBIA information update part 3
		f7_3:"But it is not only about providing ‘nicely looking’ and ‘appealing’ geo-objects. It is more general about supporting the urgent need for updated information, in various application domains. As we move forward in better and better understanding the complex interrelationships of global problems and challenges, we also need the means to tackle these. Providing imagery with increasing spatial resolution and higher frequencies is one thing and we all know that images alone are only part of the game. To turn image data into useful information, we need either capable (human) interpreters or sophisticated image analysis tools.  Soon we’ll realize we need both, depending on the setting and the task to be fulfilled. Now the exiting thing is: OBIA has got the capacity to integrate both worlds and to combine the advantages of either, the algorithm-based automated analysis, and the experience-based visual interpretation. ",
		// Quotation
		f7_4:"There is an ever increasing demand for [regularly] updated geo-spatial information combined with techniques for rapid extraction and targeted provision of relevant information. The need for timely and accurate geo-spatial information is steadily increasing, trying to keep pace with the changing requirements of the society at a global dimension. New earth observation (EO) techniques and concepts from GIScience have led to the emerging field of OBIA. The main purpose of OBIA in the context of remote sensing applications is to provide adequate and automated methods for the analysis of very high spatial resolution (VHSR) imagery. Therefore, OBIA describes the imaged reality using spectral, textural, spatial and topological characteristics. OBIA offers a methodological framework for machine-based interpretation of complex classes, defined by spectral, spatial and structural as well as hierarchical properties. The upcoming paradigm of object-based image analysis (OBIA) has high potential to integrate different techniques of processing, retrieval and analyzing multi-resolution data from various sensors. By bridging technical and sector-oriented domains from remote sensing and geoinformatics we may significantly enhance the efficiency of data provision for policy making and decision support.",
		
	// 1.7 What is/ What does OBIA
	f8_0:"So it’s all about a new paradigm? Now is the time to argue on what OBIA actually is",
		// 1.7.1 What is/ What does OBIA
		f8_1:"Some in fact say it is a new paradigm in image analysis. Why this? When in 2006 the First International Conference on object-based image analysis took place in Salzburg, it turned out that – at least in Geographic image analysis, OBIA may provide a turning point. Not so much with a complete change in direction, but in the way how research questions are more efficiently addressed. The bridging of remote sensing techniques and methods from spatial analysis and GIS, has shown great potential and triggered also great expectations, in more intelligently tackling the challenge of geo-information provision. Is that enough for a change in paradigm? ",
		// Quotation
		f8_1_q:"Recent years’ advances in sensor technology and digital imaging techniques, along with ever increasing spatial detail, have challenged the remote sensing community to strive for new methods of exploiting imaged information more intelligently. The word ‘intelligence’ in this context has several facets: (1) an advanced way of supervised delineation and categorization of spatial units, (2) the way of how implicit knowledge or experience is integrated, and (3) the degree, in which the output (results) are contributing to an increase of knowledge and better understanding of complex scene contents. ",
		f8_1_f:"There are aspects to support this idea, but we will not exclusively reach to an answer here. For example, one of the characteristics of a paradigm shift, as stated by Kuhn, 1962, is the “scarcity of data”. This does not apply to OBIA; rather the opposite is the case. On the other hand, we realize that with traditional methods we cannot cope with all the potential which resides in these new data, and we need new – or at least – adapted ways to utilize it. So whether it is a new paradigm or not, we need to underline that OBIA is definitely more than a mere collection of tools. ",
		//Quotation
		f8_1_q_1:"the need for highly accurate and regularly updated geo-spatial information cannot be met by advancements of sensor technology alone. New sensors and new kinds of data may do provide a wealth of information, but this ‘information overload’ needs to be conditioned, in order to fit the communication channels of the addressees.  Thus, advanced methods are required to integrate single information packages. It is necessary to both synchronize technologies and harmonize approaches. The first related to the acquisition, pre-processing, and retrieval of multi-sensor, multi-spectral, multi-resolution data from various sensors, the second dealing with the particular potential of integration spatial analysis techniques into image processing procedures for addressing complex classes in a transparent, transferable and flexible manner",		
		f8_1_f_1:"What is the guiding principle of OBIA",
		// Quotation
		f8_1_q_2:"The guiding principle of OBIA is likewise clear as it is ambitious: to represent complex scene content in such a way that the imaged reality is best described and a maximum of the respective content is understood, extracted and conveyed to users or researchers. The realization, therefore, is not trivial, as the ultimate benchmark of OBIA is the human perception. [Thus], our visual sense of the environment is a common experience, easy to share yet difficult to express in words or even rule sets. Indeed, the challenge is to make explicit the way how we deal with imaged information in various scales, how we manage to relate recognized objects to each other with ease, how we understand complex scene contents readily. To this end, OBIA utilizes concepts from spatial thinking, which again is influenced by cognitive psychology",
		f8_1_f_2:"To distillate this comprehensive declaration into a more condensed statement, we could more pragmatically say:OBIA combines spatial concepts with signal processing for (semi-)automated image analysis, that works on objects, rather than on pixels.",
	//1.8 Two related pillars
	f9_0:"OBIA rests on two, interrelated pillars, image segmentation and image classification. ",
		// 1.8.1 two related pillars... part 1
		f9_1:" Both of them use certain algorithms, which require parameterization, to (semi-)automatically perform specific processing tasks.",
		f9_1_f_1:"The first, image segmentation, is used to provide the units, we call them image objects, which can be labelled, assigned to classes or used for further class modelling.",
		f9_1_f_2:"The idea of segmentation is to group neighbouring pixels to larger wholes, according to their similarity, in the sense of regionalization. Here one of the profound principles in Geography applies, the so-called “First Law of Geography” by American-Swiss geographer Waldo Tobler. In easy words it says: everything is related to everything, but near things are more related to each other than distant ones. As we will see later this notion is also captured in the concept of spatial auto-correlation.",
		f9_1_f_3:"One of the key challenges with image segmentation is to provide image objects which match the scale of operation (large ones, small ones) and – ultimately – the way how we would delineate those on our own. ",
		// 1.8.2 two related pillars... part 2
		f9_2:"The second pillar is image classification. Strictly speaking we are not classifying the image, but the image objects which were produced by segmentation.",
		f9_2_f_1:"So for example we could be interested in extracting individual trees for an urban tree cadastre, then we would not speak of image classification, but rather use the term feature extraction, in this case of trees. But ideally – and most often – we aim at a full representation of image scene content, a wall-to-wall classification, where every single portion of an image is assigned to a certain class or category.",
		f9_2_f_2:"This is also the ultimate aim of image understanding. Now, image segmentation and classification – this sounds quite sequentially. In fact, yes, we need image objects to classify them. And more, we can only exploit all possible parameters for classification (like shape parameters such as area or form), if we have spatial objects. But on the other hand, we often realize that the process has its limitations when be treated as linear sequence.",
		// 1.8.3 Segmentation/ Classification
		f9_3:"When it comes to class modelling we need a more cyclic approach. So sometimes we can only perform a subsequent segmentation, if an initial classification has been performed. The analogy of Yin and Yang is used to illustrate the mutual interrelationship of both methodological realms.",
		f9_3_f:"Going back to the example of modelled biotope complexes shown above, we can imagine that this does not work with a linear procedure, which is based on spectral similarity of neighbouring pixels or objects. The boundary of the complex as such, needs to be modelled and cannot be drawn straight away, without prior knowledge of its consisting elements. We will later on come back to this issue looking at the example of an orchard. We will deeper explore image segmentation, the related techniques, but also its limitations in chapter 5. In chapter 6 we shall have a closer look on image classification and class modelling. ",
	
	// 1.9 Very High Resolution Data
	f10_0:"The boost, let’s say, of object-based image analysis, has been triggered by the advent of very-high spatial resolution satellite data, around the year 2000.",
		// 1.9.1 very high resolution part 1
		f10_1:" Now with for example WorldView-II by DigitalGlobe available we reach a spatial ground resolution of half a meter. But more than this, WorldView images have also a high spectral and radiometric resolution, all optimized for high quality representation of real world space.",
		f10_1_f:"While our human eye is optimized for spatial (not so much for radiometric or spectral resolution), we need higher radiometric sensibility to fully exploit the increased spatial detail by the machine. The term ‘very high spatial resolution’, or short VHSR, is a relative one, moving along with ongoing technological achievements. However, these days advances in spatial resolution are not that dramatic any more (they are, from a technical point of view but not in terms of application), so since a couple of years, the term very high resolution is constantly used for images with a sub-meter pixel size. Often, simply the acronym VHR is used, because usually, talking about resolution in this context is about spatial resolution. ",
		// 1.9.2 very high resolution part 2
		f10_2:"This is what we call a very high-resolution image. It is a Quickbird scene recorded in early summer, 2005. This allows for a representation which is amenable for most of the human-scale purposes, including urban planning, traffic management, monitoring of urban green, cadastre update, etc. We can recognize all relevant structures and features required for most geographical applications one may think of. ",
		// 1.9.3 very high resolution part 3
		f10_3:"This one is a Worldview-II scene. What has changed here? The spatial resolution is even higher moving from 60 to 50 cm, so there is even more detail visible. You may also realize that colour intensity and the high radiometric resolution of VHR images, here 11bit, which means 2096 possible grey levels. What we not readily see is the high spectral resolution of this WorldView image. This one is a band combination slightly different from standard false-colour combination. The so-called ‘coastal band’ is sensitive for shallow water areas but also for vegetation in general. In terms of spatial resolution, we have already noted that there might be a ‘natural limit’, at least for geographical applications. It is the limit when we reach the human scale of action. ",
		// 1.9.4 very high resolution part 4
		f10_4:" There is also an issue in providing ‘too much’ detail, not only in terms of reaching down to privacy, but also in leaving the scale domain of human activity. Some argue, depending on the point of view, that there is a ‘continuum of scale’; on the other hand, there is the concept of ‘domains-of-scale’. The latter reflects the notion that there are gaps in the scale continuum that corresponds to the level hierarchical organisation. We will come back to this later one, for the time being let’s assume there is a certain limit in resolution required for geographical purposes (including planning, environmental management, but also policy implementation), and there is a ‘gap of scale’ before we reach to medical or even chemical scales. And within the human scale, is it always necessary to have the highest possible resolution? Can there be too much spatial detail? It depends on the application. Often the observer has an intuitive understanding of the proper relation between scale and resolution. If you are investigating bark beetle attacks in an otherwise homogenous forest stand, a resolution of 5 metres may be sufficient. Too much detail might be even hampering the analysis process. Sometimes, however, the scale of the scene displayed is not that obvious, and thus the ideal resolution is not easy to be determined. ",
		// 1.9.5 very high resolution:Bush encroachment
		f10_5:"What can you see on the following example? What is it, what’s going on here? It’s a small scale dynamic in a bog area, where single bushes encroach over the open area, due to drainage. ",
		// 1.9.6 very high resolution:camp
		f10_6:"Sometimes, a slight increase in resolution makes a big difference. If you want to extract as many possible relevant features from an image showing a refugee camp, the step from 0.6 to 0.5 meters may be critical, because only the latter would reveal small shadows that underline the impression of dwelling structures. So like in field mapping we have to think of a commensurate scale of observation. This example also illustrates the superiority of our human eye. If there is a shadow next to an object our human vision tells us, this structure must be somehow elevated. Within OBIA this relationship between small, compact white objects and surrounding shadow cannot be seen such instantly, instead, it needs to be modelled. So our eyes are always doing better? Not necessarily! Think of an analysis task where you would have to extract literally thousands of similar features such as tents or little huts in a huge refugee camp or single distinct trees in an otherwise open area. Your eyes would tire after a certain time and with decreasing attention you may end up losing one or the other structure. And it’s simply not economic! On the other hand, don’t forget: OBIA does not see more than we do. ",
		// 1.9.7 Quotation
		f10_7:"The advancement of feature recognition and advanced image analysis techniques facilitates the extraction of thematic information, for policy making support and informed decisions. As a strong driver, the availability of VHSR data and the ever increasing use of geo-information for all kinds of spatially relevant management issues have catalyzed the development of new methods to exploit image information more ‘intelligently’.[And] embarking on another class of problem: with the advent of digital data from airborne and satellite-borne sensors we return to the very challenge of air-photo interpretation: how do we deal with the enormous detail? Looking back to several decades of computer technology we trust in automated methods for analysis and interpretation, even of complex imaged contents. While a series of problems remain a challenge, a range of tangible solutions have been developed by successfully combining GIS and remote sensing techniques for reaching closer at a visual interpreter’s capacity",
		

	
	

	//Capitel 2: Image Interpretation and Perception
	f11_0:"'Welcome to Lesson 2 - Image Interpretation and Perception. Here we will introduce the concept of OBIA and how humans percieve images. This is the content of lesson 2 – we have 5 subchapters: (1) Visual Perception; (2) Early Vision; (3) Role of Experience; (4) Pixel-scape and Object-scape; (5) Visual Delineation vs. machine-based segementation'",
	
	

	//2.1 Visual Perception
	
	
	f12_0:'In this lesson we will have a closer look at the way how human beings perceive imaged information and which role experience plays in image interpretation. In this context, the advantages of object-based image interpretation compared to a pixel-based approach will be pointed out.',
	
		// 2.1.1 what is/ does OBIA
		f12_1:'What is and what does OBIA? It somehow resides between the two poles provision of units and classification or interpretation. Throughout this course we will realize that a lot of methodological building blocks are employed by the approach of OBIA. Ranging from image segmentation to knowledge representation, from data integration up to pattern recognition. We want to start with a closer look on what we can learn from cognitive psychology and the heritage of visual image interpretation.	When using a computer for classifying an image we want the machine to imitate certain characteristics of the human way of image interpretation. In other words, we want to transfer our knowledge and experience to the machine. As we will see, we are using many cues for interpreting what we see on an image, much more than only different colours. As soon as we go beyond spectral properties of geographical features, it gets tricky, working pixel-by-pixel, so treating single pixels individually. An object-based approach does support addressing spectral and spatial characteristics of geographical features. Moreover, form-related aspects as well as hierarchical, this is scale-related, characteristics can be addressed. We are at the interface between remote sensing and GIS techniques. However, as we will see later, also the object-based approach has its limitations. Whatever we try to automated, our human perception remains the ultimate benchmark, undefeated in analyzing complex scene contents with ease. ',
		
		
		//2.1.2 Visual Perception- part 1
		
		f12_2:'This chapter starts with a short discussion how we perceive what’s on an image. An example is given that shows that a series of numbers can be recognized as a picture if the data are coded in the right way.',
		
		f12_2_f:'Numbers alone can hardly be interpreted beyond their immediate meaning. We can only see variations in the values, but transforming rows of number into a ‘picture’ is nearly impossible for the human brain. ',
		
		//2.1.2 Visual Perception- part 2
		f12_3:'Even if coded into arbitrary colours, as shown in the following slide, it does not make much difference.',
		f12_3_f:'Only if there is proper link between coding and colour scheme, information is conveyed successfully. Only then we perceive patterns of colour, forms, and relevant structures throughout the image.',
		
		//2.1.2 Visual Perception- part 3
		f12_4:'If we do it right, it is striking to see how little information is actually required for recognizing a face. The difference between human perception and the way how image data are organized as pixels becomes obvious. The human eye (and brain) sees much more than just different shades of grey, it also perceives shapes, texture and the spatial arrangement of certain elements.',
		f12_4_f:'In this case it is even more striking. The recognized face can be assigned to a specific person which none of us never me. We may have seen their picture maybe one or two times in some history books. How would you ever manage to encode such capability in rules?',
				
		//2.1.3 Image Context
		f12_5:'The next example illustrates the role of image context and, in addition, the power of a given predominating spatial arrangement.',
		f12_5_f_1:'Here we see a feature which can be interpreted as a piece of a black line on a white background.',
		f12_5_f_2:'We already have some ideas what this could be.',
		f12_5_f_3:'As soon as more contextual hints are provided, we can see that the black area is indeed a small section of a line which belongs to a striped pattern that we recognize as part of a zebra.',
		f12_5_f_4:'Oops, really?',
		f12_5_f_5:'Sorry, the last picture makes us rejecting all our previous ideas and there is no way in ignoring that there is a chair with a zebra-like cap.',
		
			
	// 2.2 Early vision
		
	f13_0:'We can hardly describe exactly what happens if we look at an image and suddenly ‘see’ something. But indeed, we notice that we do any kind of pattern recognition without major effort. Human perception is a complex matter of filtering relevant signals from noise, a selective processing of detailed information and, of course, experience. While enormous advances have been made in computer vision, the power of human vision has still not been achieved. So, what’s so special about human vision?',
		
		// 2.2.1 Early Vision
		f13_1:'Whereas the retinal structure and its functioning is fairly well known from the biophysical side, and the extraction of information as a cerebral reaction is deeply explored. It is still not understood, what exactly makes up human perception as such. We understand in an analytical way most parts of the processes. But, as so often, we lack of seeing the entire picture. From cognitive psychology we may learn what mechanism we use in perception of patterns and spatial arrangements. Dealing with visual perception in general, David Marr in 1982 has provided a conceptual framework. Which describes a three-level structure of visual information processing.',
		f13_1_f:'According to Marr’s paradigm we can distinguish between the following explanatory levels: 1.) the computational level, which is related to the purpose, logic and strategy of perception; 2.) the algorithmic level dealing with issues of implementation and the details of a proper transfer between input and output; and 3.) the hardware level being concerned with the physical realisation of the representation identified at first. and its processing algorithms derived in the second point',
		
		// 2.2.2 Marr's Paradigm
		f13_2:'The computational level within visual processing is characterized according to Marr by several stages of the visual representation of an image’s content. These stages (or “sketches”) are considered to proceed in a subsequent manner providing more and more detailed information about the scene being viewed.',
		f13_2_f_1:'The primal sketch involves a 2D description of the radiometric behaviour of pixels, pixel aggregates and their geometrical properties. The pure spectral differentiation of grey shades and colour tones makes up the basic level (raw primal sketch). ',
		f13_2_f_2:'The grouping of spectrally like pixels into geometrical units represents the full primal sketch. The latter is built upon quasi-homogenous regions (blobs) or bounding areas of high contrast (contours or edges). The raw primal sketch marks the stage where image primitives such as blobs, edge segments and their low-level descriptions are produced. They are then ordered and organized into higher level place tokens or perceptual “chunks”. This is performed within the process of perceptual organization that aims at logically grouping a perceived pattern and to transfer it to meaningful symbolic representation. Touching the issue of scale we can consider relatively small place tokens to cause a certain granularity. A visual effect of a regular distribution of small enough elements.',
		f13_2_f_3:'In the algorithmic level we can include advanced processing steps like scale-space analysis and multi-scale segmentation, as well as class modelling.',
		
		// 2.2.3 Recognizing Objects -part 1
		
		f13_3:'Lets get back from the theorie to recognizing objects in real life.',
		f13_3_f_1: 'Now - what makes a baby recognize different instances of strawberries? They are quite different … so only because they’re all red – some kind of red -, or because they have a particular shape, then which shape ?',
		f13_3_f_2:'What makes us recognize a geometric shape which has never been drawn? There are all kinds of shapes, but they are rather disturbing – the one which is predominantly perceived – a white triangle – was never put there by the artist. ',
		
		// 2.2.4 Recognizing Objects -part 2
		f13_4:'A central element in this discussion is the gestalt approach established by Max Wertheimer in 1925. The gestalt approach tries to grasp the way of perception through the description of several phenomena that can be observed when certain patterns or figures are examined. It is built upon a set of ‘laws’ that provide interpretation schemes for certain patterns being perceived. These laws are not made to explain why something is perceived, so not providing insight into the process as such, but rather to explain how something is perceived.',
		f13_4_f_1:'If we try to understand how image interpretation works and how it can be potentially captured in a set of rules, we need to understand some of these laws. Before we have a closer look at three of them we go briefly through some related ‘rules’ found in recent visual intelligence research. Before we have a closer look at three of them we go briefly through some related ‘rules’ found in recent visual intelligence research.',
		f13_4_f_2:' There are rules concerning the way how lines in 2D are interpreted in 3D (straight lines, coinciding lines, collinear lines). But when dealing with satellite image data or air-photos these rules are less important, since the perspective is usually vertical and requires abstraction, anyway. There are rules that help to select constellations likely to exist, from theoretical, unlikely ones. This implies a certain ‘world view’, e.g. the rule of regular views, which excludes some constellations to be very unlikely, is based on the concept of regularity; and this again is a matter of experience. The rule of convex peaks applies, if there are such. ',
		f13_4_f_3:'The rule of non-coincidental relationships from Witkin and Tenenbaum in 1983 states that occurring lines, which otherwise would be coincidentally with a very low probability, belong to the same object, in other words have the same origin. As soon as lines or boundaries are attached to (constructed) objects they cannot be re-used again. All such rules are responsible for our ability to group image objects to larger ones, to delineate complex subjective structures, and finally to construct conceptual boundaries.',
		
		
		//2.2.5 Expert Filter
		
		f13_5:'Let’s do one round before moving to the gestalt laws. Let’s for a moment stick with the expert filter that is applied in image analysis.',
		f13_5_f:'Images are mapped against or filtered by the personal experiences of the interpreter, including perception and delineation capacity and the acquaintance with classification keys and mapping schemes. While there may be different delineations resulting from different interpreters doing the job, there is always a reasonable decision leading to that. That also applies for automated delineation. In the end, it is up to us to select and evaluate the appropriate result, which is also part of the objectification process.   Air-photo interpretation in its long tradition has yielded a number of advanced classification keys for various fields of application designed for skilled interpreters. Yet an automated interpretation of an entire scene according to such an advanced interpretation scheme is far from being operational. The intrinsic and intuitive knowledge of a skilled interpreter is hard to capture or to force into rule systems. In fact, to transfer existing experience effectively into procedural and structural knowledge is one of the major challenges of artificial intelligence research. The delineation of units relies to a high degree on the concept of homogeneity. The criteria of being ‘relatively homogeneous’ directs any partitioning of reality, manual interpretation or image analysis, whereas it remains a relative measure and a matter of disposition depending on the target scale dimension. All this goes into the expert filter that guides the delineation of objects in both visual and machine-based analysis.',
		
		//2.2.6 Objects and Gestalt
		f13_6:'Advocates of the Gestalt approach have established several ‘laws’ or factors of perceptual organisation. According to the Ehrenfels criterion a gestalt shows emergent properties. It is different to structuralism, which follows an analytical approach focussing on a description of the elements per se.',
		f13_6_f_1:'Based on the factor of proximity single elements within a scene will be grouped together if they are close enough to each other. This is a scale-depending issue, only being valid for a certain scale of observation.',
		f13_6_f_2:'Note that there may be a transition to what we have called granularity above. The factor of good Gestalt assumes that simple, well-shaped geometric figures are more readily to be perceived than more complex ones.',
		f13_6_f_3:'Both factors predict that a manual interpreter tends to group similar elements together and to close lines straight over a gap. Something which is also reflected by the factor of good continuation.',
		f13_6_f_4:'If these factors are applied to automated image analysis we may quickly realize that it is difficult to automate what we manage with ease. ',
		
		//2.2.7 Orchard Problem
		f13_7:'Consider an orchard.',
		f13_7_f_1: 'There is a group of trees which, according to the factor of proximity, we recognize as a whole.  Following the factor of good gestalt and good continuation we draw an outline around this group, even if this is not directly visible on the image.',
		f13_7_f_2:'In fact it would cut an otherwise homogenous area, the meadow which flows into the group of tree as a background matrix. ',
		f13_7_f_3:'Similar cases we have if we delineate linear features according to the law of good continuation. There we neglect certain transition areas or obscuring items along the path such as trees',
		
		
	//2.3 Role of experience
	
	f14_0:'In this chapter we will take a closer look at the role of experience, illustrated by a simple example.',
	
		//2.3.1 Role of Experience - part 1
		f14_1:'When looking at an image we perceive features which can be described by specific colour-related and spatial properties. For example, this river has specific spectral values and by its form we can distinguish it from other features like lakes that have similar spectral values. Another example is a park in a city. Although spectrally similar to grassland we can identify them as parks because they are placed inside urban areas. So it’s all about experience. Had we never seen a river with its typical length-to-width ratio or had we never been in a park surrounded by other urban structures we may not apply such rules so easily. But even then we could apply knowledge gained from learning, in this case: from a book.  To point out: here we have one of the crucial principles of visual interpretation: a simultaneous and spontaneous recognition of boundaries and labels. The way how something is delineated goes along with the way how it is classified. So the What    goes with the Where  , in fact we cannot tell what is first.',
		
		// 2.3.2 Quotation
		f14_2:'Three issues distinguish interpretation of remotely sensed imagery from interpretation conducted in everyday experience. First, remotely sensed images usually portray an overhead view – an unfamiliar perspective. Second, many remote sensing images use radiation outside the visible portion of the spectrum. Finally, remote sensing images often portray the earth’s surface at unfamiliar scales and resolutions . Students cannot expect to become proficient in image analysis simply by reading about image interpretation. Experience forms the only sure preparation for skillful interpretation. ',
		
		// 2.3.3 Role of Experience- part 2
		f14_3:'Our own experience influences image interpretation and we perceive image content in a specific context. The context we apply depends on our acquaintance with satellite imagery or aerial photographs. For example the unfamiliar top-view or the different band combinations. Our experience increases in terms of how various features may look on such images.',
		f14_3_f_1:'Like always, gaining experience is a basic prerequisite for skilful image interpretation. When starting with manual air-photo or satellite image interpretation we notice that a lot of experience is required. It needs training to match the imaged false colour schemes with natural phenomena and to understand certain texture or structures and the imaged features. ',
		f14_3_f_2:'Unfortunately, even long time learning cannot prevent us from facing ambiguity when features are very similar in structure or colour. According to recent findings in brain research signal processing by any of our senses is based on vector coding of the signals in a high-dimensional feature space. Once a certain hypothesis is met (like  ‘four wooden legs’ means ‘a chair’, while much else would hint to a zebra …), this region of the feature space is allocated. Meaning it is ‘occupied’ and ‘defended’ against competing hypotheses.  It remains a challenge to find out more about the vector axes being used when we interpret signals through our senses.',
		f14_3_f_3:'In any way, ‘experience’ means a tighter and tighter allocation in this multidimensional feature space. ',
		
		// 2.3.4 Role of Exprience -part 3
		f14_4:'Experience often changes the perception. Makeing them personal. ',
		
		// 2.3.5 Role of Experience - part 4
		f14_5:'As in professional life. Note that the domain of interest of a skilled interpreter may differ from that of a simple user; the experience of the former makes him specifically look for certain features, which are ‘invisible’ to the latter. ',
		
		// 2.3.6 Role of Experience - part 5
		f14_6:'If we want to represent spatial continua such as elevation and temperature, we need to tessellate space.Unfortunately, the binary principle of digital processing does not support to fully represent real continua.',
		f14_6_f_1:'That means we need break down the entire surface into fairly small units, to at the same time maintain the variability of the phenomenon and to keep it manageable.',		
		f14_6_f_2:'Usually, regular grid cells are used for this purpose, and we are using the raster data model to store them. Each of those grid cells carries a specific value, such as the elevation, averaged for this particular cell.',
		f14_6_f_3:'Using a gridded approach always means to average. The same applies for spectral reflectance which is also changes continuously over space. When using images, we speak of pixels, as picture elements, instead of cells. But the idea behind is the same. The other reason why in fact we are using pixels is the technical design of a digital scanner, which generates this surface representation. ',
		
		//2.3.6 Quantisation
		f14_7:'Converting the continuous phenomenon ‘reflectance’ into digital values is realized by the process of quantisation. Quantisation is a form of discretisation, in this case: of continuous reflection values into digital numbers. Two parameters are critical here: the spatial sampling distance and the radiometric resolution, which is indicated by the number of bits, 8 bit, 11bit etc. The charged coupled devices (CCD), array- or line-based, include photo-sensors per one image unit, per pixel.',
		
	// 2.4 Pixel-Scape & Object-shaped
	
	f15_0:'In the follwing chapter we will look at Pixel scape and object shape',
		
		// 2.4.1 Pixel-scape - part 1
		f15_1:'The so-called ground sample distance (GSD), which we commonly call ‘spatial resolution’, corresponds to the respective area segment on the ground. For Landsat-7 imagery, this pixel resolution is 30 by 30 meters on the ground, which is 900 m². All reflection occurring on this 900 m² area is averaged when recorded on this pixel, so we need to be aware that we are dealing with the mixed pixel effect. No matter which resolution, a pixel is always an integrated signal of reflection emitted by the observed underlying features.',
		f15_1_f_1:'When looking at a Landsat scene close enough, we realize that such pixilation is quite disturbing to our capability of capturing simultaneously colours and shapes. The landscape of pixels, the pixel-scape, is not made for our human eye; it is made for digital signal processing. In image processing we handle each pixel and its value individually, but in human vision we refuse to do so. There are many reasons for that, one being that it is simply not economic.  The first Law of Tobler (that we have touched upon in the introduction), tells us that neighbouring features are likely to be the same! So why to treat neighbouring pixels individually? With an integrated 900 m² pixel we could still argue: because there might be some differences between pixels next to each other. But what if we are interested in a broad-scale issue such as the coniferous forest cover in Canada? Isn’t it likely that thousands of neighbouring pixels are quite similar?',
		f15_1_f_2:'And now, for a pan-sharpened Worldview-II scene, this pixels size is only a quarter of a square meter, which is more than 3000 times smaller than a Landsat pixel. Here, the pixilation is much less disturbing, not because there are no pixels, but the resolution is fine enough that our human eye immediately recognizes objects rather than different pixel values only. We are looking at an object-scape, rather than a pixel-scape. This object-scape appears whatever image we are using, as we naturally prefer to look at pictures in an appropriate scale. ',
		
		// 2.4.2 Pixel-scape - part 2
		f15_2:'The pixel-based classification process assigns pixel values to regions in a multi-dimensional feature space. This space is built by the number of spectral bands of an image. By this, the phenomenon reflectance is finally converted to reflectance classes. These are then matched to the information classes we are interested in.',
		f15_2_f:'You may realize that there is no space for space in this process. As pixels are artificial spatial units, the result of a pixel-based classification is usually, full of ‘artefacts’. These are abrupt transitions between classes, which are known as the salt-and-pepper effect. So, the limitations of a pixel-based approach are clear: here we only use half of the story, the spectral behaviour alone. At the same time neglecting any kind of spatial characteristics of the features to be addressed. ',
		
		// 2.4.3 Pixel-scape - part 3
		f15_3:'In a certain way, ‘space’ is included in pixel-based approaches as well, when performing a focal operator – so looking at the pixel neighbourhood, rather than the pixel alone. But again, this is an artificial setting which expands the classification power to a certain degree but does not include true spatial properties. Later, in lesson 6, we will explore how spatial properties, including scale-related can be utilized for object-based image classification. Here we need to reflect a bit more on the issue of target classes. The specific set of classes, detectable in an image, is not only depending on the interpreter or the application domain, but also a function of the spatial resolution and the approach being used. If single buildings in an urban setting cannot be detected on Landsat imagery, we do not have to bother about their categorization. If not using spatial properties, we cannot differentiate a city park from a meadow. ',
		
		// 2.4.4 Object-scape part 1 
		f15_4:'Some target classes are composite classes; that means they consist of elementary units. A cropland is an area where crop is dominating, but first features other than agricultural fields may also occur and second even crop can be spectrally very heterogeneous. We will learn that such classes are a challenging type within OBIA, because occasionally they must be modelled. Sometimes, as the example shows, internal heterogeneity can be overcome by segmentation. However, if this heterogeneity goes beyond a mere statistical pattern, it may reach to the point, that simple region-based segmentation is not capable to produce boundaries as we would expect it.',
		
		// 2.4.4 Quotation
		
		f15_5:'For example, in a 1 meter resolution image of a forest canopy, where each tree crown exhibits a 10-m diameter, each crown image object will be composed of many pixels.',
		f15_5_f_1:'In this situation, each 1.0 m pixel is part of an individual crown;',
		f15_5_f_2:'As a result, an image object tends to be composed of spatially clustered pixels that exhibit high spectral autocorrelation because they are all part of the same object. Consequently, they have similar gray values. These characteristics correspond to Tobler‘s first law of Geography where ‘objects are related to all other objects, but proximal objects are more likely to be related to each other‘ (Tobler, 1970). In an image object, this relationship is both spatial and spectral. ',
		
		//2.4.5 Qutation
		f15_6:'Remotely sensed data are crucial source for GIS users. From the GIS users‘ perspective, a polygonal structured image representation is like mother tongue.', 
		f15_6_f:'Making use of the objects attributes and spatial relations bring geographical concepts that are basic to GIS into the field of remote sensing. We argue for a somewhat different handling of our entities introducing the concepts of neighborhood, distance and location. All these concepts are not new. In fact, entire disciplines like Geography are based on these concepts. The question therefore is: why are remote sensing and digital image processing still so much focused on the statistical analysis of single pixels rather than on the spatial patterns they buildup?',
		// 2.4.6 Object-scape part 2
		f15_7:'If we use objects instead of pixels, single pixel values are aggregated statistically. This has several advantages: First, neighbouring objects, as groups of pixels, are more different to each other than neighbouring pixels. Second, the boundary is clearer. Third, within objects, statistics can be used to characterise them.',
		
	// 2.3 Visual Delineation VS Machine-based Segmentation
	
	f16_0:'We stated in the introduction: the machine won’t see more than we do. In fact, if we compare a human interpreter with a machine-based analysis, we see particular strengths and weaknesses.',
	
		// 2.3.1 Visual Delineation VS Machine-based Segmentation part 1
		f16_1: 'So here, we see the difference between visual interpretation, visual delineation and the machine- based segmentation. If we do visual analysis we intrinsically apply generalization. ',
		f16_1_f_1:'So this is a visual interpretation on false-color infrared air photograph with 25 centimeters resolution. This can be seen on the lines of this object. They are generalized, according to the scale of application and the scale of digitization. ',
		f16_1_f_2: 'This one is the machine-based segmentation. It is a Quick Bird imagery pansharpened with a 60 centimeters resolution.The segementation can be optimized. But usually, it is scaled adaptive instead of scale specific. We will come to that, later on.',
		
		//2.3.2 Quotation
		f16_2: 'The interpreter must often delineate or outline regions as they are observed on remotely sensed imagery. The interpreter must be able to separate distinct areal units that are characterized by specific tones and textures, and to identify edges or boundaries between separate areas. Typical examples include delineation of separate classes of forest or of land use – both occur only as areal entities (rather than as discrete objects). Typical problems include: (1) selection of appropriate levels of generalization (e.g., when boundaries are intricate, or when many tiny but distinct parcels are present); and (2) placement of boundaries when there is a gradation (rather than a sharp edge) between two units.',
		
		//2.3.3 Visual Delineation VS Machine-based Segmentation part 2
		f16_3:' Coming back to the GeoEye examples we have from the refugee camp in the beginning. This is an automated delineation and we could see that we are quite happy with it. If we particularly, look at the white tents. We see that these are fairly well delineated.',
		
		//2.3.4 Visual Delineation VS Machine-based Segmentation part 3
		f16_4: 'OK,lets have a look at the original image again. So, if you could look at it and trying to visually delineate  tent structures. ',
		f16_4_f_1:' First you will identify the brighter tent structures. And of course we would see these ones. ',
		f16_4_f_2:'But what is this? Is that a tent,a white spot or something else? What is the difference between this feature and the others?',
		f16_4_f_3:'Lets identify other features. We see huts, tents and trees. ',
		f16_4_f_4:' And this? Is it a tent or a white spot? When taking a closer look, it is  missing a shadow. So, it doesnt seem to be elevated and hence cannot be a building structure.',
		
		//2.3.5 Visual Delineation VS Machine-based Segmentation part 4
		f16_5:'According to the computer it is a tent. For us it is a white spot.',
		
		//Visual Delineation VS Machine-based Segmentation part 5
		f16_6:'In the last part we will repeat some of the strength and weaknesses between visual interpretation and automated delineation. In reality, the strength of one are the weaknesses of the other and vice versa. First, envision visual interpretation. We are aggregating units with ease and our interpretation can be improve by learning. This process cannot be automated and is  a tendinous job, limiting the fields of applications and the interpretation speed. We can be a little bit faster through experience, but not really significant. It is more a linear process.',
		
		//2.3.5 Visual Delineation VS Machine-based Segmentation part 6
		f16_7:'Whereas in automated analysis we can define rules including specifics characteristics and relationships to improve the automated delineation. Especially of clearly visible homogenous features which can be easily delineated. The limitations again are the strength of the visual interpretation. Which are aggregated objects and objects with conceptual boundaries. Like the orchard problem.',
		
	
// Capitel 3: Basic concepts of hierarchy theory
	
	f17_0:'Welcome to Lesson 3 - Basic concepts of hierarchy theory. Here we will take a closer look on the concept of scale, and dig a bit into the secrets of hierarchy theory. We will see how this can be used for multi-scale image analysis. This is the content of lesson 3 – again 5 subchapters: (1) Relevance of multi-scale representation; (2) Scales and scaled representation; (3) Decomposition and holarchy; (4) Multi-scale approach with remote sensing; (5) Hierarchical patch dynamics paradigm (HPDP)',
	
	// 3.1 Multi-Scale Representation
	f18_0:'At first we want to start with closer explaining multi-scale representation.',
		//3.1.1 Multi-scale representation- part 1
		f18_1:'This lesson is framed with some principal assumptions. These are:',
		f18_1_f_1:'The word in its complexity is hierarchically structured.',
		f18_1_f_2:'This complexity can be decomposed and structured in scaled representations.',
		f18_1_f_3:' Objects are interlinked and on different scales requiring spatial concepts.',
		f18_1_f_4:'Multi-scale segmentation mimics our way of perception.', 
		
		//3.1.12 Multi-scale representation- part 2
		f18_2:'Objects have an inherent scale. We perceive our outside world in several scales instantly and simultaneously. Just think when you drive a car, what your eyes would perceive on various levels.',
		
		// 3.1.3 Multi-scale representation.- part 3
		f18_3:'An image can be represented in different scales sequentially, depending on the respective scale domain of target objects. We call this multi-scale representation. ',
		
		// 3.1.4 Multi-scale representation -part 4
		f18_4:'When representing ecological complexity in hierarchical levels, for instance a landscape, this does not happen independently from any human conception.  Allen and Starr (1982) point out that “discrete levels need to be recognised as convenience, not truth”. The statement “levels emerging as device of the observer” tells us that instead of questioning the ontological truth, we should rather focus on epistemological relevance of examinable target objects. ',
		
		
		
	
	// 3.2 Scale
	f19_0:' After looking at multi-scale representation we have to closer exaime the term scale.',
	
		// 3.2.1 Scales part- 1
		f19_1:' We come back to the example of Abraham Lincoln. We realize that the content of an image appears in several scales. We are not going into deeper into face recognition, but we realize that hierarchical levels do appear. When looking at an image of bad resolution as this one, we refuse to perceive the single pixel and to suppress this disturbance (by twinkling our eyes or moving backwards).',
		f19_1_f_1:'Usually we perceive a complex pattern of colour and form, structured in various levels throughout the image.',
		f19_1_f_2:'Fine structured features appear but we simultaneously aggregate them into larger ones. ',
		f19_1_f_3:'That means that the content of a scene appears in several scales at the same time. All in all, exactly two scale domains are visible, namely the one of the face, and the one of its constituting parts (like eyes, nose, beard, hair, forehead). ',
		
		// 3.2.2 Scales part- 2 // text nochmal überarbeiten!!
		f19_2:'What about scale? In a very generic definition Allan and Star in 1982 stated: ‘Scale is the period of time or space over which signals are integrated to give a message.’ In our case, it refers more or less to the average size of objects in the real world or in a representation of it.',
		f19_2_f:'The different objects have different inherent scale. They only appear in a certain region. But it is not only about the point of elevation  but it also depends on how we scale our entire environment and specific behaviors. As it is illustrated with these three animals.',
		
		// 3.2.3 Grain and extent
		f19_3:'In landscape ecology the terms like grain and extent are used to consider scale in a raster representation.',
		f19_3_f_1:'Grain is the minimum area at which an Organism response. It is somehow comparable to resolution in an image.',
		f19_3_f_2:'Extent is the course scale of spatial heterogeneity in an extant of the whole scene, total area or any related measures.',
		f19_3_f_3:'So, we have two representations of the same landscape. It is the same landscape, the same extent, but its a different grain size. Its different grain sizes again corresponds to the way how, for example certain Organism perceive the landscape.',
		
	// 3.3 Hierarchy theory
	f20_0:'Multi-scale segmentation has often been linked with hierarchy theory. This is an appealing concept, and the comparison seems obvious as both hierarchy theory and multi-scale segmentation deal with hierarchical organization.',
		// 3.3.1 Holons
		f20_1:'Still, we need to be careful: hierarchy theory proposes the decomposability of complex (living) systems, but imagery is just a representation of such systems. An imaged representation is in several aspects’ reductionism: it is a plane picture only revealing reflection values. So, hierarchy theory forms a strong conceptual anchor, rather than a methodological term for multiple segmentation cycles.We should be aware that hierarchical segmentation at first hand produces regions of increasing average size (or number of pixels, respectively). But hierarchy theory is not about size, it deals with increasing degree of organization. What makes a strong link to hierarchy theory is not multi-segmentation alone, but the way we approach complexity, how we model and decompose it, and how we integrate our knowledge about it.',
		f20_1_f:'In hierarchy theory fundamental parts interacting in a complex system are called holons. Separating and ordering the system components according to their scale can be done by means of multi-scale analysis. From a remote sensing perspective, image objects are at the same time aggregates of smaller objects, as well as parts of larger objects. Koestler (1967) has elaborated on the idea that a system on any level can be considered as both self-assertive and integrative, and suggested the term ‘holon’ (from Greek holos and –on) to emphasize this dialectic property. Whereas the first underlines the independent and singular character of a system, the latter emphasizes the part-being of a constituting element.',
		
	// 3.4 HPDP
	f21_0:'Drawing on this theory, the Hierarchical Patch Dynamics Paradigm (HPDP) has been introduced in landscape ecology.',
		
		//3.4.1 Decomposability,holarchy- part 1
		f21_1:'The term holarchy from hierarchy theory has been applied to the hierarchical organization of landscapes (hierarchically structured patches of increasing average size). Note that applying a coarser scale does not necessarily mean reaching a higher hierarchical level. In fact, hierarchy theory is talking about the level of organization, which is not restricted to average size or extent alone.',
		f21_1_f:'The strategy provided by HPDP combines the idea of hierarchically organized patches, their interactions within the ecological system, and the relation between the observed patterns and underlying processes that change with scale. Systems structure can be characterized in terms of hierarchical interaction. A system is nearly decomposable into constituting sub-systems and hierarchical organization is an overarching principle in all living systems.',
		
		//Quotation
		f21_2:'Ecological systems are hierarchical patch mosaics. On different scales, a patch may be a continent surrounded by oceans, a tract of forest surrounded by agricultural lands and urban areas, a tree gap within a forest, a fire-burned area of bare ground in a plant community, or a plankton aggregate in an aquatic system. Patches can be characterized by their size, shape, content, duration, structural complexity, and boundary characteristics. The theory of patch dynamics indicates that the structure, function, and dynamics of such patches are important to understanding the systems they comprise, be they populations, communities, ecosystems, or landscapes.',
		f21_2_f:'The existence of vertical and horizontal loose couplings is exactly the basis of the decomposability of complex systems. While the word “loose” suggests “decomposable”, the word “coupling” implies resistance to decomposition. Strictly speaking, complete decomposability only occurs when coupling between components becomes zero, which seems a trivial case because, by definition, a system is composed of interacting parts. Thus, hierarchical complex systems are only nearly completely decomposable or nearly decomposable.',
		
		// 3.4.2 Decomposability,holarchy- part 2
		f21_3:'The metaphor of a ‘scaling ladder’ marks adjacent scale domains in a continuous scale spectrum. According to hierarchy theory it is assumed that a series of scales is inherent in any portion of land (landscape) no matter what the actual size is. O’Neill et al. (1986) have proposed to consider at least three nested scales in any study: the level of interest (‘focal level’ or ‘reporting level’) is constrained by controlling conditions of the level above, which provides significance; lower-level components supply explanations (Turner, et al., 2001). Burnett & Blaschke (2003) use the term ‘candidate discretisation’s’ to illustrate the formation of scaled representations when working on image data with several inherent scale levels. ',
		
		// 3.4.3 Decomposability,holarchy- part 3
		f21_4:'This means that constituent elements of a larger system operate in a rather independent way with self-assertive and self-integrative tendencies. The single levels interact with each other by lose coupling. To highlight the dynamic character of a hierarchy of nested holons, Koestler proposed the term ‘holarchy’.',
		
	// 3.5 Multi-scale imagery
	f22_0:'One image cannot have only one scale, but can be a multi-scale image due to the different hierarchical levels.',
	
		
		//3.5.1 Multi-Scale imagery
		f22_1:'Anthropogenic features usually cover a narrow scale window. They demand a shallow hierarchy. Natural objects demand a multi-scale representation, reflecting several scales which are corresponding to functional hierarchies. A ‘shallow’ hierarchical representation is faced with a ‘deep’ or flexible one, the bottom of which is not clearly defined.',
		f22_1_f_1:'This also leads to the question whether one pan-hierarchical representation would be enough and sufficient for representing the entire scale variability in an image. ',
		f22_1_f_2:'In this case we have three characteristic landscape types: pastured, meadows and forest. They all have different scale patterns. So, the question comes up whether we need here regionalized representation, sometimes called class specific segmentation.',
		
	// 3.6 Scale-Space Analysis
	f23_0:'Another approach to investigate objects analytically in  an image is linear scale space analysis.',
		
		//3.6.1 Scale-Space Analysis- part 1
		f23_1:' Mathematically, it is a kind of repetitive application of a smoothing filter.In this case specifically the Gauss filter, which is a unidirectional filter. If you apply a filter many, many times to an image and then stack the results on top of each other. From the finest scale, the original data, to the courses scale, the smoothest data. You will observe that there are certain objects emerging and disappearing. So, you can kind of simulate a multiscale representation. ',
		
		//3.6.2 Scale-Space Analysis- part 2
		f23_2:'This is what leads to blobs. Blobs are dynamic image objects. These are growing and shrinking if you move through space. We have four categories of dynamic movement.',
		f23_2_f_1:'The start of the filtering, the point where some object is emerging. This is C, the Creation point.',
		f23_2_f_2:'And then it goes through the different scales until it would disappear again.',
		f23_2_f_3:'This is A, the annihilation.',
		f23_2_f_4:'Then there is something in between. It could be that two objects which come closer emerge at Point M and they also would split again and grow further in apart. All these things you can observe here in this kind of hyper blob- diagram.',
		f23_2_f_5:'Application would be for example to detect tree crowns in a laser point cloud or other similar features.',
		
// Capitel 4 Knowledge Representation
	f24_0:'This is lesson 4. Knowledge representation is one of the crucial prerequisites to work with intelligent image analysis systems. While there are many ways to reach a higher intelligent level in image analysis, we are focusing on rule-based systems, which we believe foster transparency and transferability utmost. This is the content of lesson 4, with 5 subchapters: (1) Why knowledge representation? (2) Experience and learning (3) Rule-based production systems; (4) Crisp vs. fuzzy rulesets; (5) Image understanding and OBIA; (6) Object categories.',
	
	//4.1 Knowledge Representation
	f25_0:'First we want to take a closer look at the knowledge presentation.',
	
		//4.1.1 Preamble
		f25_1:' We have an intuitive , yet experience and culture driven concept of how our geographical environment is organised. Trees, meadows, roads, bushes, hills and mountians are perceived and categorized instantly, and likewise the entire image is ‘understood’.When looking at an image like this, we are not just observing singular features (unless we are under threat or otherwise urged to focus). We are capturing the whole sceneand assign meaning, emotion, to it. To achieve such level in image analysis (at least approximately), we need to make implicit knowledge explicit!',					
		
		//4.1.2 Knowledge Representation?
		f25_2:'Knowledge plays a key role in the interpretation-oriented parts of the remote sensing processing chain. We have a huge storage of implicit knowledge at our disposal, and a significant part of it is used in our daily tasks in image interpretation of various kinds.',
		f25_2_f_1:'We illustrated this phenomenon by using the example of a chair with a zebra-like coverage. Remember, even if only a little portion of that scene was provided, colour and contrast already made one think of a line on a white background. As soon as more context-related information was offered about the specific form and arrangement of the black lines, humans would instantly ‘see’ the typical pattern of a zebra. In the end, however, the revealed shape of the recognised object would reject all previous hypotheses. So colour, form and arrangement evoke certain parts of our knowledge and experience.',
		f25_2_f_2:'Object hypotheses are constantly tested and verified against what we see. Or recall, again, the example of President Lincoln. Once something resides in our brain (and this especially applies for visual impressions), we do not have any difficulties in matching ‘similar’ stored information to this. Thus, visual impression and knowledge and experience work closely together!',
		
	//4.2 Experience and Learning
	f26_0:'',
	
		//4.2.1 Experience and Learning-part 1
		f26_1:'By training (i.e. some kind of formalized learning) we subsequently supplement our implicit knowledge with explicit knowledge. In image analysis this comprises all subject-related knowledge obtained from formal learning situations and practical experience, for example how to utilize the spectral behaviour to differentiate between healthy and stressed vegetation. ',
		f26_1_f_1:'Within artificial intelligence (AI)',
		f26_1_f_2:', we distinguish procedural from structural knowledge. Procedural knowledge is concerned with the specific computational functions and can be represented by a set of rules. Structural knowledge is domain-related and implies how concepts of a domain are interrelated. Within OBIA, we need both: structural knowledge for establishing the links between image objects and ‘real world’ geographical features and procedural knowledge for preparing the rule-bases. ',
		f26_1_f_3:'Structural knowledge is characterised by high semantic contents; thus it needs to be organised in knowledge organizing systems (KOSs). Such KOS are realised by graphic notations such as semantic networks and more mathematical theories like the formal concept analysis (FCA). ',
		f26_1_f_4:'Within image analysis, semantic nets or frames offer a formal framework for semantic knowledge representation using an inheritance concept (is part of, is more specific than, is instance of).. Although a semantic net needs to be created manually, they allow for controlling each and every existing connection once being established. With increasing complexity the transparency and operability will reach a limit. Bayesian networks are manually built, but the weighting of the connections can be trained, though it has to be trained for every connection. When starting with manual air-photo or satellite image interpretation we notice that a lot of experience is required. It mostly needs training to match the imaged false colour schemes with natural phenomena and to understand certain texture or structures and the imaged features. Unfortunately, even long time learning cannot prevent us from facing ambiguity when features are very like in structure or colour. In Lesson 2 we’ve heard in that brain research explains signal processing done by our senses as an act of vector coding in a high-dimensional feature space. It remains a challenge to find out more about the vector axes being used when we interpret signals through our senses. In any way, ‘experience’ means a tighter allocation in that feature space. ',
		f26_1_f_5:'Skills of a trained interpreter and his or her experienced perception may be mimicked by an Artificial Neural Network (ANN). ',
		f26_1_f_6:'ANNs are designed as neuron-like machines, which optimize themselves through adaptive vector coding. In a perfect ANN, the system of weights and synapses is tuned to correctly classify images.',
		f26_1_f_7:'But even optimized neural net classifiers remain a black box system. In other words, once the system of weights and synapses is established in an artificial network, the underlying concepts can hardly be restructured any more. Such learnt experiences cannot be reconstructed. So-called ‘hidden layers’ as carriers of information have the disadvantage of low transparency. In this respect the strengths of ANN techniques are sacrificed by the problem of a very low transparency.A different approach, which in terms of the level of controlling, resides between ANNs and rule-based production systems is case-based reasoning (CBR). CBR utilizes specific knowledge related to an interpretation task. As a problem-solving paradigm (Ibrahim, 2000) it reuses learnt cases of previously experienced concrete problem situations (so-called exemplars) stored in a case-base. New problems are solved by comparing these to known cases, which leads to an ongoing learning process. The system permanently reuses stored knowledge in an instrumental mode and at the same time improves its knowledge by retaining and learning. ',
		
		//4.2.2 Experience and Learning-part 2
		f26_2:'Binnig et al. (2002) use the term “natural computing” to stress the parallel nature of natural thinking and computing and, at the same time, to oppose it against the incoherency of AI and natural thinking.',
		f26_2_f_1:'According to them, expert systems do not sufficiently focus on the net-like character of our thinking, i.e. knowledge is usually represented in a too static manner. ANNs, as noticed above, are intrinsically limited as they try to imitate the functions of the brain. They do well in face recognition etc., but fail in really complex tasks, and one would have to ‘re-invent’ the mind to optimize those.',
		f26_2_f_2:'Combining individual strengths from various approaches Binnig et al. (2002) have proposed a “self-organizing, semantic, and self-similar network”, Such a Triple-S, would represent scene-related procedural knowledge in a hierarchical form. The classification process itself is controlled by excitements and thresholds. The state of activation depends on the activation state of former connections and so on.',
		f26_2_f_3:'The entire construct makes up a “fractal machine”, where sub-networks are self-similar to super-networks. An inheritance concept is used to connect properties and procedures. Activation depends on neighbourhood like in a cellular automata machine. By an optimally hierarchically structured network the classifications and segmentation in an alternating manner or cyclic process. By this, the unstructured input (the single pixels) evolves to a logical structural arrangement of objects according to the cognition network: Binnig says: “the creation of objects and their relations on and across different hierarchical levels is equivalent to transform information into knowledge”.',
		
	//4.3 Production Systems
	f27_0:'In the next chapter we have a look at the prodcution system in OBIA',
	
		//4.3.1 Rule-based production system
		f27_1:'Future development may offer combined solutions of learning and self-organizing knowledge systems at an operational stage. At the current stage, even in hierarchical classification systems as being used in OBIA we still work on rule-based production system, where knowledge needs to be encoded in rules. But in fact, this is also assumed a great advantage in the communication with experienced manual interpretations and users of the information product. Whereas we can train our perception to better interpret an image scene, we cannot easily transform this knowledge into a rule-based system.',
		f27_1_f_1:'The transfer of experienced knowledge into a consistent set of rules is neither a trivial nor an unambiguous task. And although rules may be readily implemented once they are formulated, we need guidelines which object describing feature(s) we use and how we combine these. Plus, we need control mechanisms that controls the integrity of the rule set, as Winston 1984 already pointed out, we need “a set of conventions about how to describe a class of things”. ',
		f27_1_f_2:'Like generally in knowledge representation there is a syntactical (that means procedural) and a semantic dimension. The syntactical dimension provides a set of symbols that can be used or combined, while the semantic dimension specifies what meaning those symbols and combinations have. Within such production systems, rules are incorporated in a knowledge engineer to classify image objects through logical inference.',
		f27_1_f_3:'As expert knowledge is often intuitive and not directly transferable into crisp decisions, this uncertainty can be expressed through fuzzification. This allows statements about real-world phenomena with some degree of uncertainty. It converts a binary membership into a graduated degree of certainty. Thus, every image object is not classified in a strict and binary manner, but rather obtains a degree of membership to a certain class.',
		
	//4.4 Fuzzy Sets
	f28_0:'What are fuzzy rule sets?',
	
		//4.4.1 Fuzzy Rule Sets- part 1
		f28_1:'Concepts like “warm” or “cold” use fuzzy boundaries. We would all consider water in our teacup as hot if it is freshly brewed, so around 100 degrees Celsius. ',
		f28_1_f_1:'Depending on the time the tea remains in our cup, we would eventually consider at as “still hot”, or “warm”, “still warm” or “nearly cold” or “already cold”. What does that show?',
		f28_1_f_2:'We all have a concept of “hot”, “warm” or “cold” (which may slightly differ from person to person due to a individual sense of heat)',
		f28_1_f_3:'We simplify a gradual phenomenon (such as temperature) and categorize it.',
		f28_1_f_4:'The boundaries between these categories are not crisp, so there is no specific threshold, but',
		f28_1_f_5:'With increasing distance from these boundaries, the assignment of a certain category is undisputable. The same applies to “tall persons”, “high mountains”, but also “green meadows” or “grey cities”.Whenever our conceptual understanding of the real world implies vagueness, we use fuzzy terms. In the above-mentioned example, it is even more emphasized by the fact that we add further vagueness by using terms like “nearly” or “still”. Despite this vagueness we usually do not have difficulties in judging whether something is still warm or already cold. We can live with the fact that usually things are clear, but there might be some rare situations of gradual transition where decisions are hard to be made.',
		
		//4.4.2 Fuzzy Rule Sets- part 2
		f28_2:'Within image analysis, vagueness in class assignment does exist as well. When applying a standard rule-based classificator, we could establish a rule to distinguish between vegetated and non-vegetated objects when the average NDVI is positive or negative. The boundary between these two classes would be an NDVI value of 0. But can we be sure that an object with an NDVI of -0.02 is non-vegetated? Probably not: if feels more appropriate when we consider a certain gradual limit between these two binary classes. And with the Normalized Difference Vegetation Index we are still in a comfortable situation as the NDVI formula at least theoretically implies that this boundary is quite distinct. If we apply a crisp rule only looking at spectral values of the Infrared channel and setting the class limit between deciduous and coniferous forest at 65, we run the risk of introducing pseudo precision where there is none.',
		f28_2_f_1:'Speaking more generally, fuzzy set theory, according to Jensen 2005, is “better suited for dealing with real-world problems than traditional logic because most human reasoning is imprecise.“. Within image analysis we are facing the following challenges that may cause vagueness in the interpretation and the assignment of classes (Tsatsoulis, 1993): First, vague (linguistic) class descriptions.',
		f28_2_f_2:'Second, uncertainty in sensor measurements.Third, parameter variations due to limited sensor calibration',
		f28_2_f_3:'Fourth,class mixtures due to resolution;',
		f28_2_f_4:'Working with fuzzy sets also implies that objects can be assigned to multiple classes.',
		f28_2_f_5:'A cup of tea with a measured temperature of 76 Degree Celsius may still be considered hot by one person and only warm by another one. The probability of a class assignment is higher with higher distance to the transition zone. If our tea has 85 Degree Celsius, most people will consider it hot (or undrinkable).',
		f28_2_f_6:'Within OBIA, we work with objects instead of single pixels. Therefore, we also work on aggregated values (e.g., the mean spectral value within an object). We will explore this more in the next lesson, but for fuzzy sets that means we have usually a more stable assignment that with pixels. Again, sticking with the cups of tea that means we are grouping those cups with the higher temperature and those with the lower ones. We would then compare lets say 85 degree with 65 degree and the judgement is much clearer.',
		
		//4.4.3 Fuzzy Rule Sets- part 3
		f28_3:'The following sequence shows how Boolean values, binary values, are turned into a fuzzy value system. This process we call fuzzification. The sequence also shows how fuzzy membership functions work and degree of memberships or class assignment probabilities. Please stop the speaking here and study the slide on your own.',
		f28_3_f_1:'So how does the transition from a crisp to a fuzzy system work? We have a fuzzy set A, Which is a certain subset of values of the whole range of object features. For example, the value range in the near band. It also represents an object feature class, for example forest within one object feature.',
		f28_3_f_2:'We can replace the Boolean logic false or true of the membership value Mü by a continuous range of zero to one. Then we define a membership function Mü.',
		f28_3_f_3:'We assume that beginning from a certain value, in this case 50, the  probability increases that the object or the pixel will be a forest. ',
		f28_3_f_4:'We assume that beginning from a certain value, in this case 50, the  probability increases that the object or the pixel will be a forest. And if we have 85. Then we are pretty sure that this is a forest. ',
		f28_3_f_5:'If we have decreasing digital values in this case at 175. The probability decreases again. After 230, the probability is actually 0',
		f28_3_f_6:'Whenever the MÜ membership function is increasing and higher than zero. X belongs to the fuzzy set A. So, the red rectangle is the fuzzy set A.',
		
		
		//4.4.4 Fuzzy Rule Sets- part 4
		f28_4:'We can also have the case that certain features may have multiple class assignments. Please stop again the speaking and take a closer look at the slide.',
		
		//4.4.5 Fuzzy Rule Sets- part 5
		f28_5:'Ultimately, the fuzzy results have to be translated back into crisp values we call this defuzzification. We can control how this process works. For example, we could decide that no class assignment should be done if membership wages are too small. In other words, the probability that an object belongs reliably to a certain class is too low. For a better understanding please take yur time to study the current slide.',
		
	// 4.5 Image understanding
	f29_0:'Major advances have been made in AI including feature detection algorithms. Yet image understanding is more than just feature extraction on a specified scene (Ibrahim, 2000). For example, when interpreting a scene that represents an ecological system, we are dealing with a high variety of instances of different target classes. ',
	
		// 4.5.1 Image understanding
		f29_1:'Image understanding (IU), according to Axel Pinz 1994, is commonly regarded as a process, by which we arrive at a complete description of the image content, i.e. the reconstruction of an imaged scene. Document image understanding employing optical character recognition is often taken as a striking example of successful AI implementation. While in this domain the target symbology is rather clear and well defined, it remains a challenge to correctly identify poor handwriting. Usually today’s image understanding process does not end up with a mere listing and labelling of image primitives. Within image interpretation of EO data the target scheme is usually much less defined and rather ambiguous, especially when dealing with scenes representing natural features. Image understanding aims at providing highly aggregated and application-related information in a well-defined domain of interest. Thereby it aims at a ‘full’ scene description to reach from signals to a symbolic representation of the scene content. One focus is on the description of real-world objects and their relationships in the specific scene. ',
		f29_1_f_1:'Describing a scene always depends on a conceptual framework constructed by components like (a) the underlying research question within (b) a specific field of application and (c) pre-existing knowledge and experience of the operator.',
		f29_1_f_2:'Gaining insight into the content of a scene requires familiarity with the potential content and personal acquaintance with the imaged area and general experience. The field of image understanding is interlinked with image processing, pattern recognition, and AI. Image processing provides the sources in a pre-processed way. Pattern recognition has incorporated methods for knowledge representation and expert systems. AI covers a major field of computer-based image understanding, yet a certain portion is left uncovered that is related of unsolved challenges of knowledge transfer to an automated system (Ibrahim, 2000).' ,
		
		//4.5.2 IU and OBIA- part 1
		f29_2:'By forming the conceptual link to human perception image segmentation is considered an essential prerequisite for image understanding (Gorte, 1998). OBIA offers valuable methodological assets in breaking down scene complexity into meaningful image primitives. By providing “candidate discretization of space” (Burnett and Blaschke, 2003) a scene can be modelled in adaptive scales according to the domain of interest. A profound prerequisite of image object modelling is the provision of a clear underlying concept regarding the domain of interest. This comprises an understanding of the target scale, the target object set, and the target class scheme. Note that the domain of interest of a skilled interpreter may differ from that of a simple user; the experience of the former makes her specifically look for certain features or specific updated information, whereas the latter may be more interested in general information or a general impression he wants to obtain. ',
		
		//4.5.3 IU and OBIA- part 2
		f29_3:'From image domain to application domain: Starting from a real-world scene subset captured by an image of high complex content the first step comprises the provision of scaled representations by aggregation information and reducing complexity. The multi-scale segmentation should be steered by a clear picture in mind of how target objects are structured by sub-level primitives (or super-level aggregates). The critical choice of an appropriate segmentation levels makes up the 1st match of a scene-centred view with conceptual reality. ',
		
		//4.5.4 IU and OBIA- part 3
		f29_4:'Having object hypotheses in mind (Bruce and Green, 1990, see also chapter 1) the modelling can be realized by encoding expert knowledge into a rule system. Modelling aims at categorizing the image objects by their spectral and spatial properties and their mutual relationships. We will explore this deeper when talking about class modelling in chapter 6. We will see that we use spectral, structural, and semantic features in modelling classes. This is the 2nd match and the shift to an object-centred view is accomplished.',
		
		//4.5.5 IU and OBIA- part 4
		f29_5:'In the final stage of image understanding when arriving at a scene description a full set of categorized target objects is achieved. This representation of the image content should meet the conceptual reality of the interpreter or user. The entire process is characterized by the utilization and transformation of knowledge. A body plan is established for the relevant features through class descriptions, modelling, rules, and labelling. The procedure makes expert knowledge explicit. Knowledge is stepwise adapted and improved through progressive interpretation and modelling. Experience grows, as knowledge will be enriched by analysing unknown scenes and the transfer of knowledge may incorporate or stimulate new rules.',
		
	// 4.5 Object Categories	
	f30_0:'In the last part of the fourth lession we want to have a closer look at objct categories.',
		
		//4.5.1 Object Categories -part 1
		f30_1:'The following article, which is on ‘object validity’, contains an introductory section on the notion of bona fide and fiat objects. I highly recommend to read it!',
		
		// 4.5.2 Object categories -part 2
		f30_2:'We need this distinction because within OBIA, new domains of geographical realities can be modelled which are otherwise hardly addressable. And, when going beyond the ‘classical’ bona fide objects (for example single patches of forest, settlements, grassland), we shall also apply different concepts of validation.  If the delineation of composite objects (like a crop/grassland mixed arable land), is expert-based, we can hardly decide whether the delineation is right or wrong. The more we come into the domain of conditioned, policy-oriented information with a specific user group or application domain in mind, the more we need to leave classical accuracy measures behind. That means that the more complex knowledge driven rule systems are, the more advanced the validation process of the results will be. ',
		
		// 4.5.3 Object categories -part 3
		f30_3:'In this last slide you can see some examples for the differen object categories.',
		
		
// Capitel 5 Image Segmentation
f31_0:'Welcome to lesson 5! Here we will explore one of the two crucial pillars of OBIA, image segmentation. Some may say image segmentation is the key methodological element of OBIA. Hard to judge, as advanced classification routines are likewise important, but in fact the delineation and provision of image objects is made possible by employing segmentation routines of the various kinds. Lesson 5 discusses segmentation algorithms that can be used to generate geospatial objects from image data. This is the content of lesson 5, organized in 6 subchapters: (1) Brief history; (2) Image segmentation in remote sensing; (3) Groups of segmentation algorithms; (4) Multi-resolution segmentation; (5) Object features – overview; (6) Adaptive, parcel-based segmentation. Despite the relevance of the topic, the lesson on segmentation will be still comprehensive. The reason for that is twofold: (1) there is a range of theoretical and conceptual literature to broaden and deepen a critical understanding of image segmentation and its usefulness. And at the same time, (2) we will provide exercises with the software to get a feeling what that means.', 

	
	// 5.1 Brief History
	f32_0:'We start with a brief history on image segmentation.',
		
		//5.1.1 Brief History
		f32_1:'Image segmentation is not new and already existed when OBIA came into play. When in the 1980ies the first developments of image segmentation took place, while the major driver was industrial computer vision. Robert Haralick and Linda Shapiro’s essay on “Image segmentation techniques” from 1985 has set a benchmark in the development with a first consolidated overview of then existing approaches. Within remote sensing, though, image segmentation was rarely used until the late 1990ies. The reasons were that most algorithms were developed for single-band, unreferenced, B&W imagery. With the advent of very high-resolution data, image segmentation became more prominent in Earth observation image analysis. Commercial software became available, as likewise several free software routines were developed for the open scientific community. ',
		
	// 5.2 What is Segmentation?
	f33_0:'We now proceed with describing the concept of image segmentation with a focus on remote sensing applications. ',
	
		//5.2.1 What is Segmentation?- part 1
		f33_1:'Usually, when using the term ‘segments’ we would think of the portions of a linear feature, such as the limbs of a chain or a wooden snake. We also know the term segmentation from GIS analysis of linear features such as roads or tracks performing 1-dimensional continuous geo-referencing. ',
		
		// 5.2.2 What is Segmentation?- part 2
		f33_2:'Now, in image segmentation we move from 1-dimensional to (at least) 2-dimensional geographical space.',
		f33_2_f_1:'But the principle is the same. As we dissect both wooden snakes and roads into sections, we can do this accordingly with 2-dimensional space. We would do this in a way that the entire space is cut into smaller pieces, by taking care that (1) the pieces are of fairly the same size, and (2) the entire space is considered and there are no gaps or overlaps between the pieces.',
		f33_2_f_2:'A nice example for such a strict segmentation is the hierarchical system of administrative units. A state is composed by several federal states or provinces. Note that the word “several” implies that the number of segments is larger than 1, while there is no strict lower or upper limit. The number of federal states in Austria is 9, in Germany 16, in India 28, in the USA 55. There are great differences, when looking at the overall size of the states and their internal structure but imagine there would be overlapping regions or gaps in the territory. In fact, there are some special cases, but the general pattern is clear. This is the top-down view.',
		
		// 5.2.3 What is Segmentation?- part 3
		f33_3:'But we can also go the other way round. Imagine a few high-level politicians have agreed that coping with the Euro challenge requires a complete political re-organisation of Europe. The politicians after a few banquet dinners decide that it would be the easiest to completely forget the existing structure and start from a new. ',
		f33_3_f_1:'The European Union should become the United Regions of Europe (URE). They would like to see URE being composed by some 30 regions.',
		f33_3_f_2:'Such regions should not be too small in size, relatively homogenous in terms of their internal structure, but quite distinct to each other. The criterion to build such regions should be objective and transparent. ',
		f33_3_f_3:'Finally, the ministers for family affairs succeed with the following proposal: why not use the natural language spoken by children in primary schools for this purpose and merge all neighbouring villages with primary schools with the same dominating natural language. Since this process could lead to very small regions (‘language islands’), the initial regions should be merged further according to language relationships, which are to be decided by linguists. So, for example, in a case where a German is the pre-dominating natural language in a school surrounded by otherwise Flemish or French speaking schools, merging follows a strategy of similarity.',
		f33_3_f_4:'Now we better stop here – but we realize that this approach is quite different to the previous one.  It is a bottom-up approach where similar phenomena in space are grouped or merged. We use the term regionalisation to pay tribute to the fact that we use two aspects for grouping, similarity in attribute and similarity in space.',
		
		// 5.2.4 What is Segmentation?- part 4
		f33_4:'Or let us illustrate this strategy in another thought experiment: While practicing a fire alarm, 500 high school students reconvene in the gym. ',
		f33_4_f_1:'They had left their classrooms, class by class and two-by-two, and enter straight into the gym where they are placed according to their sequence of arrival, a cluster for each class',
		f33_4_f_2:'In the end, the gym is really packed with students, and there is hardly any free space in between. Now, once they’ve spent a few minutes gathering in the gym they realized that this was just an exercise. So the strict spatial separation into classes gets loosened a bit with some students intermingling with each other. Still, when the teachers had to organize the return to the classrooms they would not ask each individual student to which class he or she belongs to. Instead, they trust that the majority of students would still be around in their initial cluster.',
		f33_4_f_3:'So, they go there, simply calling the name of the class, trusting that most of them will be around and others would follow once the cluster starts moving.',
		
	//5.3 Image Segmentation in RS
	f34_0:'In the nex chapter we will highlight the role of homogeneity as a key criterion when extracting image regions.',
		
		//5.3.1 Image Segmentation in RS- part 1
		f34_1:'These two examples show that it is possible to cluster phenomena in space according to similar properties, as usually spatially related things have something in common. And so is image segmentation: following the 1st Law of Geography by Waldo Tobler and the principle of spatial auto-correlation that image data adhere to, we can trust in the fact that there will be homogeneous regions belonging to specific classes with a reasonable number of similar pixels.So how does image segmentation work?',
		f34_1_f:'Satellite images are composed by an array of pixels. To recall, in a multi-spectral digital image each pixel, has specific spectral value in each spectral band. Depending on the radiometric resolution, this value is in the range of 256 values in the case of 8 bit, or 2048 in the case of 11 bit. But where are the regions? These pixels have the same tendency as the neighbouring schools or the classmates have, they are similar in a certain spatial surrounding. The criterion we are looking at, at least initially, is similarity in spectral reflectance. We know the value of a pixel is the degree of reflectance in a certain spectral band width, a pseudo-continuous digital coding. While there are numerous possible values (namely 256 different ones in an 8-bit coding), still neighbouring pixels tend to have similar values.',
		
		//5.3.2 Image Segmentation in RS- part 2
		f34_2:'Let’s consider the simple case of an image of two darker objects lying on a bright table: If we lay a spectral profile over this table, also covering the two objects, and then looking at the brightness values, we will see that over a certain distance along this profile, the values are changing. Here we speak of an image event. Since these events have a certain a spatial extent, we use the term token or constellation token.',
		
		//5.3.3 Image Segmentation in RS- part 3
		f34_3:'This figure shows a random choice of a portion of an image array. We realize that pixel values are quite similar at neighbouring pixels. That’s why these pixels can be grouped. Of course, we also realize that not all pixels have similar values and there are gradual changes. This is likewise quite important, because otherwise we could not apply the top-down view mentioned above, and dissect the geographical reality in smaller, distinct units. It is time to consider what is depicted on such images. Consider a rural area with larger areas covered by grassland, forests, and water bodies such as lakes. Hovering with such a magnifier over the image, we’ll find numerous neighbouring pixels representing grassland and then, gradually, they change to forest pixels. While pixel values are not the same, they tend to range around a certain average value, which represents forest, and eventually change to water pixels, again with different values, but relatively homogenous.',
		
		// 5.3.4 Image Segmentation in RS- part 4
		f34_4:'Speaking more general, within remote sensing imagery we use segmentation techniques to group neighbouring pixels which represent specific geographic features, be it an entire forest, a group of trees or a single tree. That means that actually we perform regionalization under two aspects, regionalization in feature space (similarity in feature), and in space (similarity in location). We will return to this later.',
		f34_4_f:'The level of detail of the features we can reach depends on the image resolution, while – as rule of thumb – pixel size needs to be by a factor of 3 to 4 smaller than the objects to be represented. As pixels are the elements which are grouped into objects clearly, we need a certain amount of such building blocks. There is no exact figure how many pixels we need to compose a particular type of object, as it also depends on context, a priori knowledge, experience, etc. The small illustration shows that a few pixels are enough to represent a car on the street with a walking person (or bicycle rider?) next to it, at least if we know the context.',
		
		//5.3.5 Image Segmentation in RS- part 5
		f34_5:'This example shows the result of a region-based image segmentation of a multi-spectral Quickbird image. The created objects are clearly visible. The human eye will instantly start to judge the quality of the automated object generation. There are good matches, as for example the trees along the alley or the pathway stretching from the upper right corner towards the centre. And some of the houses or let’s say better: the roof of the houses. Some geographical objects are composed of smaller (sub-)objects, but as the example of the little pond on the left-hand side shows, the total of the sub-objects form the object of interest. Some object delineations, however, are not satisfying at all. For example, it is not clear, which objects are represented in the lower left corner. Is this one building and a parking space around or several buildings – or rather trees? We would have to go back to the original data and check our own object hypotheses.',
		
		//5.3.6 Image Segmentation in RS- part 6
		f34_6:'This slide shows a sequence of attempts to mimic visual delineation that was done on a false colour orthophoto, by performing image segmentation on Quickbird imagery of similar resolution. While intuitively we would think a visual delineation is more correct, it is not easy to judge the quality of the segmentation against the manual drawing. In none of the examples we could clearly state the automated product would be wrong, we could maybe say it seems not to be adequate. One common difference is that human delineations are scaled while the segmentation results are not. In this case a particular target mapping scale has been specified that is readily translated by human interpreters into an average density of vertices and simplicity of lines.',
		
		//5.3.7 Image Segmentation in RS- part 7
		f34_7:'We may ask: Is there a deterministic way to find regions or image objects? Coming back to the figure of ‘objectification’ that we discussed under the term ‘expert filter’ in lesson 2: There are numerous ways to produce segments, following different segmentation strategies and routines, but also different parameterizations within the routines. As some segmentation algorithms follow heuristic approaches, even the result of two segmentation runs with the same parameterizations may differ. Ultimately, segmentation results may only be judged by comparing them to visual perception of the human eye. This again depends on the types of objects we are looking at, the scale domain we are working in, and our specific expert knowledge in the area. ',
		f34_7_f_1:'The attempt to match segmentation results against what human perception would delineate, often leads to ‘problems’.  This may be attributed to bad performance of the algorithm due to poor parameterization, a bad choice of the proper algorithm, or – as the worst but maybe most often case – the inherent limitations of segmentation algorithms as such. Some ‘boundaries’ can simply not be seen by a region-based segmentation algorithm, as the example of the white triangle shows. This applies to many boundaries, which we would consider ‘conceptual’ ones, as they are perceived as ‘logical boundaries’ by a human interpreter but can hardly be introduced by algorithms. Remember, we have used the term ‘orchard problem’ in lesson 2 to illustrate this effect. We may now better understand why segmentation routines that work on the above-mentioned criteria reach their limitations. Why is it difficult to delineate conceptual boundaries, as the outline of an orchard? If we try to group neighbouring pixels with similar behaviour, we face difficulties in ‘jumping the gap’ between the pixels representing the trees. And if there is no way to group pixels, we cannot draw a boundary …,',
		
		//5.3.8 Quotation
		f34_8:'In object-based image analysis, the ‘image object’ is the central methodological element and as an object of investigation, it resides somewhere between application-driven plausibility and technology-driven detectability. To this end, we can join image segmentation with knowledge-based classification. Image segmentation decreases the level of detail, reduces image complexity, and makes image content graspable. Segmentation produces image regions, and these regions, once they are considered ‘meaningful’, become image objects; in other words, an image object is a ‘peer reviewed’ image region; refereed by a human expert. A pixel as a technically defined unit can be interpreted in terms of its spectral behaviour, in terms of the aggregation of spectral endmembers, or in terms of its neighbourhood. A pixel cannot be assigned a valid corresponding real-world object, but an image object can. Overcoming the pixel view and providing image objects that ‘make sense’ opens a new dimension in rule-based automated image analysis; image objects can be labelled directly using a range of characteristics, including spatial ones, or they can be used for modelling complex classes based on their spatial relationships. Coupled with e.g., a rule-based production system we can make expert knowledge explicit by the use of rules.',
		
	
	// 5.4 Groups of Segmentation
	f35_0:'In the folowwing we explore groups of segmentation',
	
		//5.4.1 Groups of Segmentation
		f35_1:'The practical aim of image segmentation is to find an optimum match between image objects and geographical features, so ultimately the real world objects to be addressed. While there are literally hundreds of different segmentation algorithms, we may broadly distinguish between three groups, i.e. histogram-based, edge-based, and region-based segmentation algorithms.',
		f35_1_f:'A special case are segmentation techniques that segment images into regular tiles, according to some geometric principle. This could be squares in the case of a chessboard segmentation or hexagons in the case of honeycomb segmentation. Believe it or not, a pixel-sized chessboard segmentation is a kind of segmentation! But what is it for? You may find the answer in one of the exercises. Please note that this kind of segmentation techniques do not obey what we have said about similarity in features. Here, regions are defined without any relation to the image content, just like a road is being segmented by every kilometre. Within OBIA we may call this ‘pseudo-segmentation’. ',
		
		//5.4.2 Histogram segementation
		f35_2:'Histogram-based approaches perform segmentation within the feature space. These clustering approaches differ from other approaches mainly by ignoring the spatial dimension in real space. It is a form of unsupervised classification, leading to classes but not to spatially contiguous regions. So this may be also called a ’pseudo-segmentation’. ',
		
		//5.4.3 Edge-based segementation- part 1
		f35_3:'Edge-based algorithms are searching for edges that occur between homogeneous areas. This process usually includes filtering (e.g. Li Sigma filter)and enhancement of the image prior to the detection of the edges. The detected edges (groups of pixels) need to be combined in order to form a boundary.',
		
		//5.4.4 Edge-based segementation- part 2
		f35_4:'This is a typical workflow for edge-based segmentation. Please study it on your own.',
		
		//5.4.5 Region-based segementation
		f35_5:'Region-based segmentation algorithms, as the name indicates, deliver regions. They can be differentiated into region growth, region merging and splitting techniques and various derivations or combinations. Region growth starts with a set of seed pixels from which regions grow by adding neighbouring pixels as long as a homogeneity criterion applies. Region merging starts with initial regions and merges them together until a scale-dependent threshold in size is reached.',
		
		//5.4.6 Watershed segmentation
		
		f35_6:'Watershed segmentation introduced by Haris et al, 1998 is a segmentation method that is highly intuitive and transparent. Spectral reflectance is modelled as height values and segments are built at gradient magnitudes along similar elevation levels, just as water flowing into valleys between watersheds. Region growing stops when neighbouring flooded areas meet each other. Higher scale segmentation is achieved by decreasing the number of local minima. One problem of watershed segmentation is that in an initial stage the algorithm leads to over-segmentation. In addition, to separate adjacent objects, it must be actively controlled by markers. It only depends on spectral similarity, so objects may vary significantly in size.',
		f35_6_f:'The split-and-merge algorithm divides an image into regular sub-regions (e.g. squares), which again will be divided until a certain level of homogeneity is reached. The combination of split and merge is realized in the split-and-merge algorithm. Here, the image is subdivided into squares of a fixed size. Heterogeneous squares are subdivided again, and homogeneous squares can be merged together. ',
	// 5.5 Multi-Scale Segmentation
	f36_0:'No we will go deeper into multi-resolution segmentation, as this is the most powerful and flexible tool we have at our hand, both mimicking the simultaneous (human) multi-scale perception and reflecting the multi-scale organization of geographical reality.',
	
		// 5.5.1 Multi-scale Segmentation- part 1
		f36_1:'',
		
		
		//5.5.2 Multi-scale Segmentation- part 2
		f36_2:'',
		
		//5.5.3 Multi-scale Segmentation- part 3
		f36_3:'',
		
		//5.5.4 Multi-scale Segmentation- part 4
		f36_4:'',
				
		//5.5.5 Multi-scale Segmentation- part 5
		f36_5:'',
				
		//5.5.6 Multi-scale Segmentation- part 6
		f36_6:'',
		
		// 5.5.7 Multi-scale Segmentation- part 7
		f36_7:'',
		
		// 5.5.8 Multi-scale Segmentation- part 8
		f36_8:'',
		
		// 5.5.9 Multi-scale Segmentation- part 9
		f36_9:'',
		
		// 5.5.10 Multi-scale Segmentation- part 10
		f36_10:'',
		
		// 5.5.11 Multi-scale Segmentation- part 11
		f36_11:'',
		
		// 5.5.12 Multi-scale Segmentation- part 12
		f36_12:'',
		
		//5.5.13 Multi-scale Segmentation- part 13
		f36_13:'',
	
	
	
	
	//5.6 Object Features
	f37_0:'We will now  have a quick look at the object features that we have at our disposal after performing multi-scale segmentation. ',
	
		// 5.6.1 Object Features Overview
		f37_1:'',
	
	// 5.7 Adaptive parcel-based Segmentation
	f38_0:'We conclude this lesson with some practical aspects when using existing boundaries in the segmentation process.',
	
		//5.7.1 Adaptive parcel-based Segmentation -part 1
		f38_1:'',
		
		//5.7.2 Adaptive parcel-based Segmentation -part 2
		f38_2:'',
		
		
		
		
	
		
		
	
		
		
		
		
		
	
	
	
	
	
	
	
	
}

