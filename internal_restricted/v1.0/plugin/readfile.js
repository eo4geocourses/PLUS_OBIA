
var text={
	//Chapter 1: Introduction and Welcome
	f0_0:"Let's get started!",
	f1_0:"Welcome to the world of object-based image analysis! We are happy that you are here! We will share some exciting ideas with you. You've already noticed that this course is designed in such a way that you can study the material on your own. All relevant documents, papers, and other external sources are provided. The content is conveyed through interactive sessions, meaning that chapters as well as exercises use multi-media content to  study the matter presented. The course has been growing over the last years and today you will benefit from a series of preceding discussions and revisions. As usual, we happily receive your feedback, whether related to content or organisational issues. Explore and enjoy!",
	//1.1 Introduction
	f2_0:"First, there are some organizational and informative matters. Please study the following slides on your own. There we shall provide some information on the course objectives and structure. When you reach the chapter on course objectives, we will guide you again. You may also press the play button then.",

		
	// 1.3 Course Content
	f4_0:"Now, let's have a look at the course content.",
		// 1.3.1 Course Content
		f4_1:"The course comprises eight chapters: The introduction in chapter 1 opens the stage towards the field of object-based image analysis. It  reflects on how we deal with objects in our daily and professional life. It then sets the broader frame for the reasoning why we actually need such a technology, including to address (and also cope with) global challenges. After we try to clarify what is, and actually does, OBIA, we will look at a critical driver behing this technology, notably the recent generation of high-resolution satellite data.",
		
		f4_1_f_1:"Chapter 2, image interpretation and perception, discusses some of the specificities of how human perception. While not digging too much into cognitive psychology, we need discuss a few main aspects to better understand our approach to OBIA. When moving into hierarchy theory in chapter 3, we briefly explore a fundamental ordering principle of reality, or lets say, our conceptualization of reality. We are interested in hierarchy principles because they are manifested in space and time, in different-sized objects, detectable on images. One more theoretical chapter, chapter 4, deals with knowledge representation. We know there is a difference between knowledge we acquire by reading a book or newspaper, and something what we call experience. Knowledge can be externalized and imparted to others, experience not as easy. In OBIA we need to make knowledge explicit and encapsulate it in rules. Chapter 5 addresses a methodological key element of OBIA, image segmentation. The creation of image objects has great advantage in practical context and is often seen as the main asset over manual interpretation. Building upon the generation of boundaries is object classification, dealt with in chapter 6. This often goes beyond a mere labelling of image objects according to one single spectral feature. In fact, image classification within OBIA is more a cylic, meaning recursive, process, other than in classical picksel-based analysis. As we will see in chapter 7, object-based accuracy assessment goes beyond the traditional site-specific accuracy measures. We will look at means to explore this, by discussing the concepts of object-fate analysis and object validity.",

		f4_1_f_2:"Finally, in chapter 8, we go one step beyond image analysis in a stricter sense, by integrating and analyzing other kinds of continuous data sets. We start with the obvious, digital elevation models and related landform analysis, and then move further towards exploring socio-economic data in a multi-dimensional indicator spaces, creating spatial composite indicators.",
		//1.3.2 Assignments
		
	// 1.4 Objects in our life
	f5_0:"Let us know consider how we perceive objects in our life.",
		//1.4.1 Objects in our life
		f5_1:"We as human beings continiuously deal with objects. We see objects and handle objects, we sense objects, and yes, indeed we also think objects. But what are objects? Are objects the same as things? Yes and no. Things may be considered as the tangible, physical objects of our daily lives.",
		f5_1_f:"Where does the word object actually come from? The word is originating from Latin ob-yee-ce-re, meaning literally to throw against. More figuratively to offer, to reply. We know the expression to object to. So an object is something we can touch, handle, think and tell of.",
		f5_1_f_1:"Thus it implies that it is something which is a conceptual whole, an entity. Of course, our world is much more and much richer than a simple collection of objects, but you may ask yourself how much your daily life is determined by objects. And so is in professional life: Categorising, analyzing, planning, designing, managing our environment requires objects, too.",
		f5_1_f_2:"Professionals dealing with space, such as spatial planners, geographers, or landscape ecologist have their particular (and often very much specialized) sets of objects they are interested in.  Otherwise our environment cannot be handled, it would be way too complex",
		f5_1_f_3:"In fact, using objects reduces complexity. At this very point, some of us may tend to move into a philosophical debate. What we see, is this the real world or just a conceptualisation of it? Well, for our purposes it is sufficient to accept the fact, that even if conceptualised, this constitutes our reality and the world we live and work in.",
		f5_1_f_4:"Spatial reasoning rests on different categories of objects, or more precise, object boundaries, to address the gradual transition from real objects to more conceptual ones. The challenge in OBIA is to eventually deal with both. Sometimes not that obvious, but in the example given below there are plenty of conceptual aspects flowing into the cognition of objects.",
		
		// 1.4.2 Objects in our life- Forest structure
		f5_2:"Consider managing a forest: foresters or ecologists have specific object categories they are looking at. In other words, a specific set of target classes to determine: single trees, forest types, forest stand, and so on.",
		
		// 1.4.3 Objects in our life -Forest stands
		f5_3:"Starting with individual trees, then moving on to groups of trees, to stands, to entire forests, we are readily grouping fine scale objects to coarser ones. While implying a high degree of practicability, this not only mirrors a human attitude of organising the world, but also reflects the hierarchical organisation of natural system.",
	
	// 1.5 Landscape and objects
	f6_0:"So naturally, on images, air photos or a satellite images we are looking for objects, too.",
		// 1.5.1 Landscape and objects part 1
		f6_1:"In geographical image analysis, objects are representations of the real-world, in units that are significant in a certain application context. This image shows landscape objects as viewed from an aircraft window. What objects can you on this image? Some are quite obvious, for example.",
		//1.5.2 Landscape and objects part 2
		f6_2:"Roads and settlements",
		//1.5.3 Landscape and objects part3
		f6_3:" Or woodland",
		//1.5.4 Landscape and objects part 4
		f6_4:"Or agricultural fields and so on. But is an interpretation of this image as straight forward as this? In other words, are the objects on this image undisputable? We need to be a bit more specific in answering this question",
		// Landscape and objects part 5
		f6_5:"If we would talk to colleagues from neighboring disciplines, they might have a different focus than we have, and we would figure out they are using a different set of objects just as a set of words someone is using in their own language.",
		f6_5_f_1:"Suppose you are a spatial planner and you are interested in how to arrange the settlements in a better way. You want to optimize infrastructure measures, thus avoiding uncontrolled sprawl. So you are focusing on types and distribution of settlements. ",
		f6_5_f_2:"A landscape ecologist might look at the functional connectivity of the remnant forest patches or the naturalness of a meandering river landscape.	An energy transition expert might investigate the average size of fields for bio fuel production.",
		f6_5_f_3:"A tourism promoter might be interested in the arrangement of natural and cultural sites and their respective distances. On a higher level of abstraction, though, the landscape ecologist may differentiate between more natural and more anthropogenic areas. These distinction has some specific properties which experience matches against what we would see on the image. Or, in the case of the spatial planner we could aggregate even more, so we would treat the entire scene as one single object, notably as rural scene",
		// Landscape and objects part 6
		f6_6:"So first thing we observe is, we are looking for specific objects. In order to find these objects we have object hypotheses in mind. Once these sort of templates are met by certain object, we detect it. In other words, we find an instance of an object category or object class. Second, we have a particular set of objects at our disposal that depends on our field of interest, and also on experience. This is the pool of classes that we are addressing. Thirdly we may apply different levels of aggregation. Now, before proceeding to the next chapter let us, for a moment, think of the mechanisms that make up object detection. We will explore these later on more in depth, so for the time being we may quickly reflect on the following questions:",
		f6_6_f_1:"What actually makes up a settlement? Is it the size of the area covered? Is it the specific composition of houses? Is the dominance of small houses the critical point to consider this area as rural, or is it the arrangement of settlements?",
		f6_6_f_2:"What determines a natural river system? What are the geometrical or spatial particularities of it?",
		f6_6_f_3:"What defines an improved agricultural area? Do we look for a specific coverage of crop fields or is it rather a gradual transition from less intensive to more intensive areas? Do we simply ignore other structures that would not hint to an intensively used area?",
		
	// 1.6 OBIA -information update
	f7_0:"Before we try to clarify what OBIA actually is, we want to set a bit the broader scene of its great potential",
		//1.6.1 OBIA information update part 1
		f7_1:"It's potential in providing updated information in a way that meets the particular needs",
		f7_1_f_1:", and in integrating various methods of geospatial information processing. As the examples used in this course will illustrate, there is a broad range of applications where OBIA can address the needs for information update.",
		f7_1_f_2:"What we mainly discuss here is OBIA as used in geographical context. Some therefore call this approach GEOBIA. However, it is not necessarily confined to geographic scales. Likewise, as we will see in the last chapter, the approach is not confined to image data either. Anyway, through its high potential to integrate all kinds of spatial data OBIA provides updated information, even in rather complex scenes.",
		f7_1_f_3:"There are several reasons accounting for that: Object-based image analysis is flexible to utilize different target geometries. These can be derived from image information itself or obtained from existing delineations, reaching from a given land use classification to a set of administrative boundaries. OBIA is capable to statistically integrate spatially related information into objects. By this we can, for example, easily perform zonal operators. In the same approach, OBIA can integrate different sensor information. For example, different spatial resolutions from optical sensors or optical data with laser scanning and so forth. With OBIA we are able to model object categories, which reflect composite classes. They are very much tuned to a specific purpose or ambitious technical goal. ",
		// 1.6.2 OBIA information update part 2
		f7_2:"This can be illustrated when we move from the intermediate stage of a modelled composite object to an object which is fully valid. As we will see later, object validity does not only look at the correct label but also at its fitness to existing workflows and spatial data infrastructures. ",
		// 1.6.3 OBIA information update part 3
		f7_3:"But it is not only about providing some nicely looking geo-objects. It is more general about supporting the urgent need for updated information in various application domains. As we move forward in better understanding the complex interrelationships of global problems and challenges, we also need the means to tackle these. Providing imagery with increasing spatial resolution and higher frequencies is one thing and know that images alone are only part of the game. To turn image data into useful information, we need either experienced human interpreters or sophisticated image analysis tools.  Soon we shall realize we need both, depending on the setting and the task to be fulfilled. Now the exciting thing is the following. OBIA is capable of integrating both, the algorithm-based automated analysis, and the experience-based visual interpretation. ",
		// Quotation
		f7_4:"There is an ever increasing demand for regularly updated geo-spatial data combined with techniques for rapid extraction and targeted provision of relevant information. The latter trying to keep pace with the changing requirements of the society at a global dimension. Novel Earth observation techniques and concepts from GI Science led to the emerging field of OBIA. The main purpose of OBIA in the context of remote sensing applications is to provide adequate and automated methods for the analysis of very high resolution data. OBIA helps describe the imaged reality using spectral, textural, spatial and topological characteristics. It offers a methodological framework for machine-based interpretation of complex classes, defined by spectral, spatial and structural as well as hierarchical properties. It combines different techniques of processing, retrieval and analyzing multi-resolution data from various sensors. By bridging technical and sector-oriented domains from remote sensing and geoinformatics we may significantly enhance the efficiency of data provision for policy making and decision support.",
		
	// 1.7 What is/ What does OBIA
	f8_0:"So is it all about a new paradigm? Now is the time to argue on what OBIA actually is.",
		// 1.7.1 What is/ What does OBIA
		f8_1:"Some would say it is a new paradigm in image analysis. Why this? When back in 2006 the first international conference on object-based image analysis was held in Salzburg, it turned out that OBIA has marked a turning point. The bridging of remote sensing techniques and methods from spatial analysis and GI S, has shown great potential and triggered great expectations as well, in tackling the challenges of monitoring and understanding better or world. Is that enough for a change in paradigm? ",
		// Quotation
		f8_1_q:"Recent advances in sensor technology and digital imaging techniques, along with ever increasing spatial detail, have challenged the remote sensing community to strive for new methods of exploiting images more intelligently. The word intelligence in this context has several facets: first, an advanced way of supervised delineation and categorization of spatial units. Second, the way of how implicit knowledge or experience is integrated. Thirs, the degree, in which the output (results) are contributing to an increase of knowledge and better understanding of complex scene contents. ",
		f8_1_f:"There are aspects to support this idea, but we will not conclusiveyl reach to an answer here. For example, one of the characteristics of a paradigm shift, as stated by Kuhn back in 1962, is the scarcity of data. This would not apply to OBIA; rather the opposite is the case. On the other hand, we realize that with traditional methods we cannot cope with all the hidden potential which resides in these new data, and we need new adapted ways to utilize it.  ",
		//Quotation
		f8_1_q_1:"The need for highly accurate and regularly updated geo-spatial information cannot be met by advancements of sensor technology alone. New sensors and new kinds of data may do provide a wealth of information, but this information overload needs to be conditioned, in order to fit the communication channels of the addressees.  Thus, advanced methods are required to integrate single information packages. It is necessary to both synchronize technologies and harmonize approaches. The first related to the acquisition, pre-processing, and retrieval of multi-sensor, multi-spectral, multi-resolution data from various sensors, the second dealing with the particular potential of integration spatial analysis techniques into image processing procedures for addressing complex classes in a transparent, transferable and flexible manner",		
		f8_1_f_1:"What is the guiding principle of OBIA",
		// Quotation
		f8_1_q_2:"The guiding principle of OBIA is likewise clear as it is ambitious: to represent complex scene content in such a way that the imaged reality is best described and a maximum of the respective content is understood, extracted and conveyed to users or researchers. The realization, therefore, is not trivial, as the ultimate benchmark of OBIA is the human perception. [Thus], our visual sense of the environment is a common experience, easy to share yet difficult to express in words or even rule sets. Indeed, the challenge is to make explicit the way how we deal with imaged information in various scales, how we manage to relate recognized objects to each other with ease, how we understand complex scene contents readily. To this end, OBIA utilizes concepts from spatial thinking, which again is influenced by cognitive psychology",
		f8_1_f_2:"To distillate this comprehensive declaration into a more condensed statement, we could more pragmatically say:OBIA combines spatial concepts with signal processing for (semi-)automated image analysis, that works on objects, rather than on picksels.",
	//1.8 Two related pillars
	f9_0:"OBIA rests on two, interrelated pillars, image segmentation and image classification. ",
		// 1.8.1 two related pillars... part 1
		f9_1:" Both of them use certain algorithms, which require parameterization, to (semi-)automatically perform specific processing tasks.",
		f9_1_f_1:"The first, image segmentation, is used to provide the units. We call those image objects; they can be labelled, assigned to classes or used for further class modelling.",
		f9_1_f_2:"The idea of segmentation is to group neighbouring picksels to larger wholes, according to their similarity. It applies the geographical concept of regionalization. Here one of the profound principles of geography applies, the so-called first law of geography, tracing back to American-Swiss geographer Waldo Tobler. In simple words it says: everything is related to everything, but near things are more related to each other than distant ones. As we will see later this is also captured in the concept of spatial auto-correlation.",
		f9_1_f_3:"One of the key challenges with image segmentation is to provide image objects in close match to the scale of operation. Plus, matching the way how we would delineate those visually. ",
		// 1.8.2 two related pillars... part 2
		f9_2:"The second pillar is image classification. Strictly speaking we are not classifying the image, but the image objects which are generated by segmentation.",
		f9_2_f_1:"If for example we are extracting individual trees, we would not speak of image classification, but rather use the term feature extraction, with in this case, the features corresponding to trees. If a whole scene is classified, we speak of wall-to-wall classification, where every single portion of an image is assigned to a certain class or category. The latter is the aim of image understanding, the representation of a full image scene content.",
		f9_2_f_2:"Image segmentation and classification, this sounds quite sequentially. In fact, yes, we need image objects to classify them. And yes, we can only exploit all kinds of features for classification once we have spatial objects. But on the other hand, we often realize that the process has its limitations when treated as a linear sequence.",
		// 1.8.3 Segmentation/ Classification
		f9_3:"When it comes to class modelling we need a more cyclic approach. The analogy of Yin and Yang is therefore used to illustrate the mutual interrelationship of both methodological realms.",
		f9_3_f:"Going back to the example of modelled biotope complexes shown above, we can imagine that this does not work with a linear procedure, which is based on spectral similarity of neighbouring picksels or objects. The boundary of the complex as such, needs to be modelled and cannot be drawn euivocally, without prior knowledge of its consisting elements. We will later on come back to this issue looking discussing the example of an orchard. We will deeper explore image segmentation, the related techniques, but also its limitations in chapter 5. In chapter 6 we shall have a closer look on image classification and class modelling. ",
	
	// 1.9 Very High Resolution Data
	f10_0:"The boost, say, of object-based image analysis, has been triggered by the advent of very-high spatial resolution satellite data, around the year 2000.",
		// 1.9.1 very high resolution part 1
		f10_1:" With Ikonos launched in the year 2000, the one-meter landmark was first hit. With WorldView-2 we have reached a spatial resolution of have a meter, with WorldView-3 thirty centimeters. More than this, WorldView images have also a high spectral and radiometric resolution, all optimized for high quality representation of real world.",
		f10_1_f:"We need higher radiometric sensibility to fully exploit the increased spatial detail by the machine. The term very high spatial resolution is a relative one, moving on with ongoing technological achievements. Still, since about two decades, the term very high resolution is constantly used for images with a sub-meter picksel size. Often, simply the acronym VHR is used, because usually, talking about resolution in this context is about spatial resolution. ",
		// 1.9.2 very high resolution part 2
		f10_2:"This is a Quickbird scene recorded in early summer 2005. It is amenable for most of the human-scale purposes, including urban planning, traffic management, monitoring of urban green, cadastre update, etc. We can recognize all relevant structures and features required for most geographical applications one may think of. ",
		// 1.9.3 very high resolution part 3
		f10_3:"Here we see a Worldview-II scene. What has changed here? The spatial resolution is even higher moving from 60 to 50 cm, so there is more detail visible. You may also realize the colour intensity and the high radiometric resolution of VHR images, here 11bit meaning 2096 grey levels. Now, this one is a band combination slightly different from standard false-colour combination. The so-called coastal band is sensitive for shallow water areas but also for vegetation in general. In terms of spatial resolution, we have already noted that there might be a natural limit, at least for geographical applications. It is the limit when we reach the human scale of action. ",
		// 1.9.4 very high resolution part 4
		f10_4:" There is also an issue in providing too much detail, somewhat going beyond the scale domain of human activity. Some argue, depending on the point of view, that there is a continuum of scale; others promote the concept of domains-of-scale. According to the latter there are gaps in the scale continuum that corresponds to the level hierarchical organisation. We will come back to this later on, for the time being let us assume there is a certain limit in resolution required for geographical purposes and there is a larger gap before we reach to medical or even chemical scales. And within the human scale, is it always necessary to have the highest possible resolution? Can there be too much spatial detail? It depends on the application, and of course, also evokes ethical issues. Often the observer has an intuitive understanding of the proper relation between scale and resolution. If you are investigating bark beetle attacks in an otherwise homogenous forest stand, a resolution of 5 metres may be sufficient. Too much detail might be even hampering the analysis process. Sometimes, however, the scale of the scene displayed is not that obvious, and thus the ideal resolution is not easy to be determined. ",
		// 1.9.5 very high resolution:Bush encroachment
		f10_5:"What can you see on the following example? It is a small-scale dynamic occuring in a dehydrated wetland site, where single bushes encroach over the open area, due to drainage. ",
		// 1.9.6 very high resolution:camp
		f10_6:"Sometimes, a slight increase in resolution makes a big difference. If the aim is to to extract dwellings from an image showing a refugee camp, the step from 0.6 to 0.5 meters may be critical, because only the latter would reveal small shadows that support the visual impression of dwelling structures. So we have to think of a commensurate scale of observation. This also illustrates the superiority of our human eye. If there is a shadow next to an object, our experience tells us, that this structure must be somehow elevated. Within OBIA this relationship between small, compact white objects and surrounding shadows can generally be modelled. But are our eyes always doing better? Not necessarily! Think of an analysis task where you would have to extract literally thousands of similar features such as tents or little huts in a huge settlement. Your eyes would tire after a certain time and with decreasing attention you may end up losing one or the other structure. ",
		// 1.9.7 Quotation
		f10_7:"The advancement of feature recognition and advanced image analysis techniques facilitates the extraction of thematic information, for policy making support and informed decisions. As a strong driver, the availability of VHR data and the ever increasing use of geo-information for all kinds of spatially relevant management issues have catalyzed the development of new methods to exploit image information more intelligently.However, with the advent of digital data from airborne and satellite-borne sensors we return to the very challenge of air-photo interpretation: how do we deal with the enormous detail? Looking back to several decades of computer technology we trust in automated methods for analysis and interpretation, even of complex imaged contents. While there are a lot of remaining challenges, some tangible solutions have been developed by successfully combining GI S and remote sensing techniques for reaching closer to visual interpretion capacity, and at the same time speeding up the process.",
			
	

	//Lesson 2: Image Interpretation and Perception
	f11_0:"'Welcome to Lesson 2 - Image interpretation and perception. Here we introduce the concept of OBIA and compare it with the way how humans perceive images. There are five subchapters: (1) visual perception; (2) Early Vision; (3) Role of Experience; (4) picksel-scape and Object-scape; (5) visual delineation versus machine-based segmentation'",
	
	

	//2.1 Visual Perception
	
	
	f12_0:'In this lesson we will have a closer look at the way how human beings perceive imaged information and which role experience plays in image interpretation. In this context, the advantages of object-based image interpretation compared to a picksel-based approach will be pointed out.',
	
		// 2.1.1 what is/ does OBIA
		f12_1:'What is OBIA and how does it actually work? It somehow resides between two poles, namely provision of units and classification or interpretation. Throughout this course we will realize that a lot of methodological building blocks are employed by the approach of OBIA. Ranging from image segmentation to knowledge representation, from data integration up to pattern recognition. We shall start with a closer look on what we can learn from cognitive psychology and the heritage of visual image interpretation. When using a computer for classifying an image, we want the machine to imitate certain characteristics of the human way of image understanding. In other words, we strive to transfer our knowledge and experience to the machine. As we will see, we are using many cues for interpreting what we see on an image, much more than only different colours. As soon as we go beyond spectral properties of geographical features it gets tricky though. Working picksel-by-picksel means treating single picksels individually. An object-based approach does support addressing spectral and spatial characteristics of geographical features. Moreover, aspects related to forms as well as hierarchical one, that is scale-related, can be addressed. Here we are at the interface between remote sensing and GI S techniques. Still, as we will see later, also the object-based approach has its limitations. Whatever we try to automate, our human perception remains the ultimate benchmark, undefeated in analyzing complex scene contents with ease. ',
		
		
		//2.1.2 Visual Perception- part 1
		
		f12_2:'This chapter starts with a short discussion how we perceive what’s on an image. An example is given that shows that a series of numbers can be recognized as a picture if the data are coded in the right way.',
		
		f12_2_f:'Numbers alone can hardly be interpreted beyond their immediate meaning. We can only see variations in the values, but transforming rows of number into a ‘picture’ is nearly impossible for the human brain. ',
		
		//2.1.2 Visual Perception- part 2
		f12_3:'Even if coded into arbitrary colours, as shown in the following slide, it does not make much difference.',
		f12_3_f:'Only if there is a proper link between colour coding and colour scheme, information is conveyed successfully. Only then we perceive patterns of colour, forms, and relevant structures throughout the image.',
		
		//2.1.2 Visual Perception- part 3
		f12_4:'If we do it right, it is striking to see how little information is actually required for recognizing a face. The difference between human perception and the way how image data are organized as picksels becomes obvious. The human eye (and brain) sees much more than just different shades of grey, it also perceives shapes, texture and the spatial arrangement of certain elements.',
		f12_4_f:'In this case it is even more striking. The recognized face can be assigned to a specific person which none of us has ever met. We may have seen the picture maybe one or two times in some history books. How would you ever manage to encode such capability in rules?',
				
		//2.1.3 Image Context
		f12_5:'The next example illustrates the role of image context and, in addition, the power of a given predominating spatial arrangement.',
		f12_5_f_1:'Here we see a feature which can be interpreted as a piece of a black line on a white background.',
		f12_5_f_2:'We already have some ideas what this could be.',
		f12_5_f_3:'As soon as more contextual hints are given, we can see that the black area is indeed a small section of a line which belongs to a striped pattern that we recognize as part of a zebra.',
		f12_5_f_4:'Oops, really?',
		f12_5_f_5:'Sorry, the last picture makes us rejecting all our previous ideas and there is no way to ignore there is a chair to sit on.',
		
			
	// 2.2 Early vision
		
	f13_0:'We can hardly describe exactly what happens when looking at an image and suddenly see something. But indeed, we notice that we do any kind of pattern recognition without major effort. Human perception is a complex matter of filtering relevant signals from noise, a selective processing of detailed information and. While enormous advances have been made in computer vision, the power of human vision has still not been achieved. So, what’s so special about human vision?',
		
		// 2.2.1 Early Vision
		f13_1:'The retinal structure and its functioning is fairly well known from the biophysical side. Also, the extraction of information as a cerebral reaction is deeply explored. However, it is still not understood, what exactly makes up human perception as such. We understand in an analytical way most parts of the processes. Still, as so often, we fail to see the entire picture. From cognitive psychology we may learn what mechanism we use in perception of patterns and spatial arrangements. Dealing with visual perception in general, David Marr in 1982 has provided a conceptual framework, which describes a three-level structure of visual information processing.',
		f13_1_f:'According to Marr’s paradigm we can distinguish between the following explanatory levels. (1) The computational level, which is related to the purpose, logic and strategy of perception; (2) the algorithmic level dealing with issues of implementation and the details of a proper transfer between input and output; and (3) the hardware level concerned with the physical realisation of the representation and its processing algorithms derived in the second point',
		
		// 2.2.2 Marr's Paradigm
		f13_2:'The computational level within visual processing, according to Marr, contains several stages of the visual representation of an image content. These stages (or sketches) occur in a subsequent manner providing more and more detailed information about the scene being viewed.',
		f13_2_f_1:'The primal sketch involves a 2D description of the radiometric properties of picksels or picksel aggregates and their geometrical properties. The spectral differentiation of grey shades and colour tones makes up the basic level (raw primal sketch). ',
		f13_2_f_2:'The grouping of spectrally similar picksels into geometrical units represents the full primal sketch. It is built upon homogenous regions (blobs) or bounding areas of high contrast (contours or edges). The raw primal sketch marks the stage where image primitives such as blobs or edge segments and their low-level descriptions are produced. They are then ordered and organized into so-called higher level place tokens or perceptual chunks. This is performed within the process of perceptual organization that aims at logically grouping a perceived pattern and to transfer it to meaningful symbolic representation. Touching the issue of scale we can consider relatively small place tokens to cause a certain granularity. That causes a visual effect of a regular distribution of small enough elements.',
		f13_2_f_3:'In the algorithmic level we can consider advanced processing steps like scale-space analysis and multi-scale segmentation, as well as class modelling.',
		
		// 2.2.3 Recognizing Objects -part 1
		
		f13_3:'For a moment, lets get back from the theory to recognizing objects in real life.',
		f13_3_f_1: 'What makes a baby recognize different instances of strawberries? They are quite different. So only because they’re all reddish, or because they have a particular shape, and if yes, then which shape exactly?',
		f13_3_f_2:'What makes us recognize a geometric shape which has not been drawn? Why do we see a white triangle rather than all the other existing shapes? ',
		
		// 2.2.4 Recognizing Objects -part 2
		f13_4:'A central element in this discussion is the gestalt approach, which was established by Max Wert-himer back in 1925. The gestalt approach tries to grasp the way of perception by describing several phenomena that can be observed when certain patterns are examined. It is built upon a set of laws that provide interpretation schemes for certain patterns being perceived. These laws are not made to explain why something is perceived, and neither the process as such, but rather to explain how something is perceived.',
		f13_4_f_1:'When trying to understand how image interpretation works, we need to understand some of these laws. Before we have a closer look at three of them, we go briefly through some related rules found in recent visual intelligence research.',
		f13_4_f_2:' There are rules concerning the way how lines in 2D are interpreted in 3D (straight lines, coinciding lines, collinear lines). But when dealing with satellite image data or air-photos these rules are less important, since the perspective is usually vertical and requires abstraction, anyway. There are rules that help to select constellations likely to exist, from theoretical, unlikely ones. This also implies a certain ‘world view’, based on the concept of regularity.',
		f13_4_f_3:'The rule of non-coincidental relationships from Witkin and Tenenbaum in 1983 states, that congruent lines, which otherwise would be very unlikely, belong to the same object. As soon as lines or boundaries are attached to (constructed) objects they cannot be re-used again. All such rules are responsible for our ability to group image objects to larger ones, to delineate complex subjective structures, and finally to construct conceptual boundaries.',
		
		
		//2.2.5 Expert Filter
		
		f13_5:'Let’s do one extra round before moving to the gestalt laws, sticking for a moment with the expert filter that is applied in image analysis.',
		f13_5_f:'Images are mapped against or filtered by the experience of the interpreter, including familiarity with classification keys and mapping schemes. There might be different delineations resulting from different interpreters. In the end, it is up to us to select and evaluate the most appropriate result, which is part of the objectification process. Air-photo interpretation in its long tradition has yielded a number of advanced classification keys for various applications. Yet an automated interpretation of an entire scene following such an advanced interpretation scheme is far from being automated. The intrinsic and intuitive knowledge of a skilled interpreter is hard to capture or to force into rule systems. The way how to transfer existing experience effectively into procedural and structural knowledge is one of the major challenges of artificial intelligence research. The delineation of units relies to a high degree on the concept of homogeneity. The criterion of being relatively homogeneous directs any manual interpretation, whereas it remains a relative measure and a matter of disposition depending on the target scale . All this goes into the expert filter that guides the delineation of objects in both visual and machine-based analysis.',
		
		//2.2.6 Objects and Gestalt
		f13_6:'Advocates of the Gestalt approach have established several ‘laws’ or factors of perceptual organisation. According to the Ehrenfels criterion a gestalt shows emergent properties. It is different to structuralism, which follows an analytical approach focussing on a description of the elements per se.',
		f13_6_f_1:'Based on the gestalt factor of proximity single elements within a scene are grouped together if they are close enough to each other. This is a scale-depending issue, valid for a certain scale of observation.',
		f13_6_f_2:'Note that there might be a relation to what we have called granularity above. The factor of good Gestalt assumes that simple, well-shaped geometric figures are more readily to be perceived than more complex ones.',
		f13_6_f_3:'Both factors predict that a manual interpreter tends to group similar elements together and to close lines straight over a gap. Something which is also reflected by the factor of good continuation.',
		f13_6_f_4:'If these factors are applied to automated image analysis we may quickly realize that it is difficult to automate what we manage with ease. ',
		
		//2.2.7 Orchard Problem
		f13_7:'Consider an orchard.',
		f13_7_f_1: 'There is a group of trees which, according to the factor of proximity, we recognize as a whole. Following the factor of good gestalt and good continuation we draw an outline around this group, even if this is not directly visible on the image.',
		f13_7_f_2:'In fact it would cut an otherwise homogenous area, the meadow which flows into the group of tree as a background matrix. ',
		f13_7_f_3:'Similar cases we have if we delineate linear features according to the law of good continuation. There we neglect certain transition areas or obscuring items along the path such as trees',
		
		
	//2.3 Role of experience
	
	f14_0:'In this chapter we will take a closer look at the role of experience, illustrated by a simple example.',
	
		//2.3.1 Role of Experience - part 1
		f14_1:'When looking at an image we perceive features which can be described by specific colour-related and spatial properties. For example, this river has specific spectral properties, but only by its characteristic shape we can distinguish it from other features like lakes that have similar spectral values. Another example is a park in a city. Although spectrally similar to grassland we can identify them as parks because they are placed inside urban areas. So it’s all about experience. Had we never seen a river with its typical length-to-width ratio or had we never been in a park surrounded by other urban structures we may not apply such rules so easily. But even then we could apply knowledge gained from learning. Here we have one of the crucial principles of visual interpretation: a simultaneous and spontaneous recognition of boundaries and labels. The way how something is delineated goes along with the way how it is classified. Meaning the What goes with the Where, and we hardly can tell what is first.',
		
		// 2.3.2 Quotation
		f14_2:'Three issues distinguish interpretation of remotely sensed imagery from interpretation conducted in everyday experience. First, remotely sensed images usually portray an overhead view – an unfamiliar perspective. Second, many remote sensing images use radiation outside the visible portion of the spectrum. Finally, remote sensing images often portray the earth’s surface at unfamiliar scales and resolutions. Students cannot expect to become proficient in image analysis simply by reading about image interpretation. Experience forms the only sure preparation for skillful interpretation. ',
		
		// 2.3.3 Role of Experience- part 2
		f14_3:'Our own experience influences image interpretation and we perceive image content in a specific context. The context we apply depends on our acquaintance with satellite imagery or aerial photographs. For example the unfamiliar top-view or the different band combinations. Our experience increases on how various features may look on such images.',
		f14_3_f_1:'Like always, gaining experience is a basic prerequisite for skilful image interpretation. When starting with manual air-photo or satellite image interpretation we notice that a lot of experience is required. It needs training to match the imaged false colour schemes with natural phenomena and to understand certain texture or structures and the imaged features. ',
		f14_3_f_2:'Unfortunately, even long time learning cannot prevent us from facing ambiguity when features are very similar in structure or colour. According to recent findings in brain research signal processing by any of our senses is based on vector coding of the signals in a high-dimensional feature space. Once a certain hypothesis is met, this region of the feature space is allocated. Meaning it is ‘occupied’ and ‘defended’ against competing hypotheses.  It remains a challenge to find out more about the vector axes being used when we interpret signals through our senses.',
		f14_3_f_3:'In any way, ‘experience’ means a tighter and tighter allocation in this multidimensional feature space. ',
		
		// 2.3.4 Role of Exprience -part 3
		f14_4:'Experience often changes the perception. ',
		
		// 2.3.5 Role of Experience - part 4
		f14_5:'The domain of interest of a skilled interpreter may differ from that of lay person. Experience of an interpreter makes them look specifically or certain features, which may be hidden to others. ',
		
		// 2.3.6 Role of Experience - part 5
		f14_6:'When we want to represent spatial continua, such as elevation and temperature, we need to tessellate space. Unfortunately, the general principle of binary digital processing does not support to handle real continua.',
		f14_6_f_1:'As a workaround, we break down the entire surface into fairly small units. In other words, we discretize space. Thus we try to reflect the variability of the phenomenon at best.',		
		f14_6_f_2:'Usually, regular grid cells are used for this purpose, using a raster data model to store them. Each of these grid cells store specific values, averaged for this cell.',
		f14_6_f_3:'Using a gridded approach always means to average values. When using images, we speak of picksels, as picture elements, instead of cells. But the idea behind is the same. Picksels are defined by the technical design of the digital scanning device, in terms of orientation, resolution, and so forth. ',
		
		//2.3.6 Quantisation
		f14_7:'Converting the continuous phenomenon ‘reflectance’ into digital values is realized by the process of quantisation. Quantisation is a form of discretisation, in this case: of continuous reflection values into digital numbers. Two parameters are critical here: the spatial sampling distance and the radiometric resolution. The latter is indicated by the number of bits, such as 8 bit, 11 bit, 12 bit etc. The charged coupled devices (CCD) on digital scanners, be it array- or line-based, include photo-sensors per every picksel.',
		
	// 2.4 picksel-Scape & Object-shaped
	
	f15_0:'In the follwing chapter we will look at picksel vs. object scape.',
		
		// 2.4.1 picksel-scape - part 1
		f15_1:'The so-called ground sample distance (GSD), which we commonly call ‘spatial resolution’, corresponds to the respective area covered on the ground. For Landsat-7 imagery, this picksel size is 30 by 30 meters, which is 900 m². All reflection occurring on this 900 m² is averaged when recorded on this picksel. Therefore we experience the so called mixed picksel effect. No matter which resolution, a picksel is always an integrated signal of reflection emitted by the observed underlying features.',
		f15_1_f_1:'When zooming into a Landsat scene, we realize that such pixilation is quite disturbing to our capability of capturing  colours and shapes simultaneously. The landscape of picksels, the picksel-scape, is not made for the human eye; it is made for digital signal processing. In image processing we handle each picksel and its value individually, but in human vision we refuse to do so. There are many reasons for that, one being that it is simply not economic. Morever, the first Law of Tobler tells us that neighbouring features are likely to be the same! So why to treat neighbouring picksels individually? ',
		f15_1_f_2:'Now, for a pan-sharpened Worldview-II scene, this picksels size is only a quarter of a square meter, which is more than 3000 times smaller than a Landsat picksel. Here, the pixilation is much less disturbing, not because there are no picksels, but the resolution is fine enough that our human eye immediately recognizes objects rather than different picksel values only. We are looking at an object-scape, rather than a picksel-scape. This object-scape appears whatever image we are using, as we naturally prefer to look at pictures in an appropriate scale. ',
		
		// 2.4.2 picksel-scape - part 2
		f15_2:'The picksel-based classification process assigns picksel values to regions in a multi-dimensional feature space. This space is built by the number of spectral bands of an image. By this, the phenomenon is finally converted to reflectance classes. These are then matched to the information classes we are interested in.',
		f15_2_f:'You may realize that there is no mentioning of space in this process. As picksels are artificial spatial units, the result of a picksel-based classification is usually, full of ‘artefacts’. These are abrupt transitions between classes, which are known as the salt-and-pepper effect. So, the limitations of a picksel-based approach are clear: here we only use half of the story, the spectral properties alone. At the same time neglecting any kind of spatial characteristics of the features to be addressed. ',
		
		// 2.4.3 picksel-scape - part 3
		f15_3:'In a certain way, ‘space’ is included in picksel-based approaches as well, when performing a focal operator – so looking at the picksel neighbourhood, rather than the picksel alone. But again, this is an artificial setting which expands the classification power to a certain degree but does not include true spatial properties. Later, in lesson 6, we will explore how spatial properties, including scale-related ones, can be utilized for object-based image classification. Here we need to reflect a bit more on the issue of target classes. The specific set of classes, detectable in an image, is not only depending on the interpreter or the application domain, but also a function of the spatial resolution and the approach being used. If single buildings in an urban setting cannot be detected on Landsat imagery, we do not have to bother about their categorization. And if not using spatial properties, we cannot differentiate a city park from a meadow. ',
		
		// 2.4.4 Object-scape part 1 
		f15_4:'Some target classes are composite classes; that means they consist of elementary units. A cropland is an area where crop is dominating, but features other than agricultural fields may also occur. Plus, even crop can be spectrally very heterogeneous. We will learn that such classes are a challenging type within OBIA, because occasionally they must be modelled. Sometimes, as the example shows, internal heterogeneity can be overcome by segmentation. However, if this heterogeneity goes beyond a mere statistical pattern, it may reach to the point, that simple region-based segmentation is not capable to produce boundaries as we would expect them.',
		
		// 2.4.4 Quotation
		
		f15_5:'Considering the following example. In a 1 meter resolution image of a forest canopy, where each tree crown exhibits a 10 meter diameter, each crown image object will be composed of many picksels.',
		f15_5_f_1:'In this situation, each 1 meter picksel is part of an individual crown;',
		f15_5_f_2:'As a result, an image object tends to be composed of spatially clustered picksels that exhibit high spectral autocorrelation because they are all part of the same object. Consequently, they have similar gray values. These characteristics correspond to Tobler‘s first law of Geography where ‘objects are related to all other objects, but proximal objects are more likely to be related to each other‘  ',
		
		//2.4.5 Quotation
		f15_6:'Remotely sensed data are crucial source for GI S users. From the users‘ perspective, a polygonal structured image representation is like mother tongue.', 
		f15_6_f:'Making use of the objects attributes and spatial relations bring geographical concepts that are basic to GI S into the field of remote sensing. We argue for a somewhat different handling of our entities introducing the concepts of neighborhood, distance and location. All these concepts are not new. In fact, entire disciplines like geography are based on them. The question therefore is: why are remote sensing and digital image processing still so much focused on the statistical analysis of single picksels rather than on the spatial patterns they build up?',
		// 2.4.6 Object-scape part 2
		f15_7:'If we use objects instead of picksels, single picksel values are aggregated statistically. This has several advantages: First, neighbouring objects, as groups of picksels, are more different to each other than neighbouring picksels. Second, the boundary is clearer. Third, within objects, statistics can be used to characterise them.',
		
	// 2.3 Visual Delineation VS Machine-based Segmentation
	
	f16_0:'We stated in the introduction: the machine won’t see more than we do. In fact, if we compare a human interpreter with a machine-based analysis, we see particular strengths and weaknesses.',
	
		// 2.3.1 Visual Delineation VS Machine-based Segmentation part 1
		f16_1: 'So here, we see the difference between visual interpretation, visual delineation and the machine- based segmentation. If we do visual analysis we intrinsically apply generalization. ',
		f16_1_f_1:'So this is a visual interpretation on false-color infrared air photograph with 25 centimeters resolution. This can be seen on the lines of this object. They are generalized, according to the scale of digitization. ',
		f16_1_f_2: 'This one is the machine-based segmentation. It is a Quick Bird imagery pansharpened with a 60 centimeters resolution. The segmentation can be optimized. But usually, it is scaled adaptive instead of scale specific. We will come back to that, later on.',
		
		//2.3.2 Quotation
		f16_2: 'The interpreter must often delineate or outline regions as they are observed on remotely sensed imagery. The interpreter must be able to separate distinct areal units that are characterized by specific tones and textures, and to identify edges or boundaries between separate areas. Typical examples include delineation of separate classes of forest or of land use – both occur only as areal entities (rather than as discrete objects). Typical problems include: (1) selection of appropriate levels of generalization (for example, when boundaries are intricate, or when many tiny but distinct parcels are present); and (2) placement of boundaries when there is a gradation (rather than a sharp edge) between two units.',
		
		//2.3.3 Visual Delineation VS Machine-based Segmentation part 2
		f16_3:' Coming back to the GeoEye examples we took from the refugee camp in the beginning. This is an automated delineation and works for white tents well. ',
		
		//2.3.4 Visual Delineation VS Machine-based Segmentation part 3
		f16_4: 'OK, lets have a look at the original image again. So, if you could look at it and trying to visually delineate tent structures. ',
		f16_4_f_1:' First you will identify the brighter tent structures. And of course we would see these ones. ',
		f16_4_f_2:'But what is this? Is that a tent,a white spot or something else? What is the difference between this feature and the others?',
		f16_4_f_3:'Lets identify other elements. We see huts, tents and trees. ',
		f16_4_f_4:' And this? Is it a tent or a white spot? When taking a closer look, it is  missing a shadow. So, it doesnt seem to be elevated and hence cannot be a building structure.',
		
		//2.3.5 Visual Delineation VS Machine-based Segmentation part 4
		f16_5:'According to the computer it is a tent. For us it is a white spot.',
		
		//Visual Delineation VS Machine-based Segmentation part 5
		f16_6:'In the last part we will repeat some of the strength and weaknesses of visual interpretation and automated delineation. In reality, the strength of one are the weaknesses of the other and vice versa. First, consider visual interpretation. We are aggregating units, with ease, and our interpretation can be improve by learning. This process can hardly be automated and it is a tedious job, limiting the fields of applications and the interpretation speed. We can be a little bit faster through experience, but not really significantly. It remains a linear process.',
		
		//2.3.5 Visual Delineation VS Machine-based Segmentation part 6
		f16_7:'Whereas in automated analysis we can define rules including specific characteristics and relationships to improve the machine-based delineation. Especially at clearly visible homogenous features which can be easily delineated. The limitations again are the strength of the visual interpretation. Those are aggregated objects and objects with conceptual boundaries. Like the orchard problem.',
		
	
// Lesson 3: Basic concepts of hierarchy theory
	
	f17_0:'Welcome to lesson 3 - Basic concepts of hierarchy theory. Here we will take a closer look on the concept of scale, and dig a bit deeper into the secrets of hierarchy theory. We will see how it is useful for multi-scale image analysis. To following topics are covered in this lesson: (1) Relevance of multi-scale representation; (2) Scales and scaled representation; (3) Decomposition and holarchy; (4) Multi-scale approach with remote sensing; (5) Hierarchical patch dynamics paradigm.',
	
	// 3.1 Multi-Scale Representation
	f18_0:'At first we want to explore multi-scale representation a bit further.',
		//3.1.1 Multi-scale representation- part 1
		f18_1:'This lesson is framed by some principal assumptions. These are:',
		f18_1_f_1:'The word in its complexity is hierarchically structured.',
		f18_1_f_2:'This complexity can be decomposed by scaled representations.',
		f18_1_f_3:' Objects are interlinked on different scales.',
		f18_1_f_4:'Multi-scale segmentation mimics our way of perception.', 
		
		//3.1.12 Multi-scale representation- part 2
		f18_2:'Objects have an inherent scale. We perceive our outside world in several scales instantly and simultaneously. Just think, when driving a car, what your eyes would see on various levels, the traffic around your car, the scenary in the background, the fly on your knee.',
		
		// 3.1.3 Multi-scale representation.- part 3
		f18_3:'An image can be represented in different scales sequentially, depending on the respective scale domain of target objects. We call this multi-scale representation. ',
		
		// 3.1.4 Multi-scale representation -part 4
		f18_4:'Consider, for example, representing the complexity of a landscape in several hierarchical levels. Allen and Starr in their book on "Hierarchy" from 1982 point out that “discrete levels need to be recognised as convenience, not truth”. The statement “levels emerging as device of the observer” tells us that instead of questioning the ontological truth, we should rather focus on epistemological relevance of examinable target objects. ',
		
		
	
	// 3.2 Scale
	f19_0:' After having looked at multi-scale representation we want to examine the term scale.',
	
		// 3.2.1 Scales part- 1
		f19_1:' We return to the example of Abraham Lincoln for a moment. We realize that the content of an image appears in several scales. We are not going deeper into face recognition at this stage, but we realize that hierarchical levels do appear. When looking at an image with a poor resolution as this one, we refuse to encounter single picksels and try to compensate by twinkling our eyes, removing our glasses, or moving backwards).',
		f19_1_f_1:'We perceive a complex pattern of colour and form, structured in various levels throughout the image.',
		f19_1_f_2:'Fine structured features appear but we simultaneously aggregate them into larger ones. ',
		f19_1_f_3:'That means, the content of a scene appears in several scales at the same time. All in all, two scale domains are visible, the level of the face, and the level of its constituting parts such as eyes, nose, beard, hair, forehead. ',
		
		// 3.2.2 Scales part- 2 // text nochmal überarbeiten!!
		f19_2:'What about scale? In a very generic definition Allan and Star in 1982 stated: ‘Scale is the period of time or space over which signals are integrated to give a message.’ In this definition, scale is conceived as the mathematical concept of a filter. In our case, this refers to the meaningfulness of objects in the real world or in a representation of it.',
		f19_2_f:'The different objects have different inherent scales. This depends on how we (and other organisms) perceive our environment and develop specific behaviors.',
		
		// 3.2.3 Grain and extent
		f19_3:'In quantitative landscape ecology the terms grain and extent are used to operationalise scale in a gridded representations.',
		f19_3_f_1:'Grain is the minimum area at which an organism may response. It is comparable to resolution of an image.',
		f19_3_f_2:'Extent corresponds to the extension of the study area or image, which is often determined pragmatically.',
		f19_3_f_3:'Here we see two representations of the same landscape. Same extent, but different grain size.',
		
	// 3.3 Hierarchy theory
	f20_0:'Multi-scale segmentation has often been linked with hierarchy theory. The comparison seems to be obvious as both hierarchy theory and multi-scale segmentation deal with hierarchical organization.',
		// 3.3.1 Holons
		f20_1:'But we need to be careful: hierarchy theory proposes the decomposability of complex (living) systems, but imagery is just a representation of such systems. An imaged representation means reductionism: it is a plane picture showing reflection values. So, hierarchy theory provides a conceptual framework, rather than a methodological how-to in terms of multiple segmentation cycles. We should be aware that hierarchical segmentation at first hand produces regions of increasing average size. But hierarchy theory is not about size, it deals with increasing degree of organization. What makes a strong link to hierarchy theory is not segmentation alone, but the way we approach complexity, how we model and decompose it, and how we integrate our knowledge about it.',
		f20_1_f:'In hierarchy theory fundamental parts interacting in a complex system are called holons. Separating and ordering the system components according to their scale can be achieved by means of multi-scale analysis. From a remote sensing perspective, image objects are at the same time aggregates of smaller objects, as well as parts of larger objects. Arthur Koestler, back in 1967, has elaborated on the idea that a system on any level can be considered as both self-assertive and integrative. He proposed the term ‘holon’, from Greek holos and on, to emphasize this dialectic property. Whereas the first underlines the independent and singular character of a system, the latter emphasizes the part-being of a constituting element.',
		
	// 3.4 HPDP
	f21_0:'Drawing on this theory, the hierarchical patch dynamics paradigm has been introduced in landscape ecology.',
		
		//3.4.1 Decomposability,holarchy- part 1
		f21_1:'The term holarchy stemming from hierarchy theory denotes the hierarchical organization of landscapes, i.e. hierarchically structured patches of increasing average size.',
		f21_1_f:'The hierarchical patch dynamics paradigm combines the idea of hierarchically organized patches, their interactions within the ecological system, and the relation between the observed patterns and underlying processes, which may change with scale. Systems structure can be characterized in terms of hierarchical interaction. A system is nearly decomposable into constituting sub-systems. This is an overarching principle in all living systems.',
		
		//Quotation
		f21_2:'Ecological systems are hierarchical patch mosaics. On different scales, a patch may be a continent surrounded by oceans, a tract of forest surrounded by agricultural lands and urban areas, a tree gap within a forest, a fire-burned area of bare ground in a plant community, or a plankton aggregate in an aquatic system. Patches can be characterized by their size, shape, content, duration, structural complexity, and boundary characteristics. The theory of patch dynamics indicates that the structure, function, and dynamics of such patches are important to understanding the systems they comprise, be they populations, communities, ecosystems, or landscapes.',
		f21_2_f:'The existence of vertical and horizontal loose couplings is exactly the basis of the decomposability of complex systems. While the word “loose” suggests “decomposable”, the word “coupling” implies resistance to decomposition. Strictly speaking, complete decomposability only occurs when coupling between components becomes zero, which seems a trivial case because, by definition, a system is composed of interacting parts. Thus, hierarchical complex systems are only nearly completely decomposable or nearly decomposable.',
		
		// 3.4.2 Decomposability,holarchy- part 2
		f21_3:'The metaphor of a scaling ladder denotes adjacent scale domains in a continuous scale spectrum. According to hierarchy theory it is assumed that a series of scales is inherent in any portion of land no matter what the actual size is. O’Neill and others back in 1986 have proposed to consider at least three nested scales in any study: the level of interest, also called the focal level or target level) is constrained by controlling conditions of the level above, which provides significance; the lower-level components instead provide explanations. Burnett & Blaschke use the term candidate discretisations to consider scale levels when applying multi-scale segmentation. ',
		
		// 3.4.3 Decomposability,holarchy- part 3
		f21_4:'This means that constituent elements of a larger system operate in a rather independent way with self-assertative and self-integrative tendencies. The single levels interact with each other by so-called lose coupling. To highlight the dynamic character of a hierarchy of nested holons, Koestler proposed the term holarchy, as already mentioned before.',
		
	// 3.5 Multi-scale imagery
	f22_0:'One single image may exhibit several inherent scales in different hierarchical levels.',
			
		//3.5.1 Multi-Scale imagery
		f22_1:'Anthropogenic features usually cover a narrow scale window. They demand a shallow hierarchy. Natural objects demand a broader multi-scale representation, reflecting several scales which are corresponding to functional hierarchies. Thus, a shallow hierarchical representation is complemented by deep one, whose bottom sort of is not clearly defined.',
		f22_1_f_1:'This also leads to the question whether one single multi-scale representation would be  sufficient for representing the entire scale variability in an image. ',
		f22_1_f_2:'In this case we have three characteristic landscape types: pastured, meadows and forest. They all have different scale patterns. We may need a multi-scale representation, which is regionalised; meaning it considers the different land cover types, sometimes called class specific segmentation.',
		
	// 3.6 Scale-Space Analysis
	f23_0:'Scale space analysis is an approach to investigate objects analytically.',
		
		//3.6.1 Scale-Space Analysis- part 1
		f23_1:' Mathematically speaking, scale space analysis is a repetitive application of a smoothing filter. In this case a Gaussian filter, which is unidirectional. When applying a filter many times to an image and then stack the results on top of each other, ranging from the finest scale, the original data, to the coursest scale, the smoothest data, you may observe that certain objects emerge, while others disappear. ',
		
		//3.6.2 Scale-Space Analysis- part 2
		f23_2:'This observation leads to the concept of blobs. Blobs are dynamic image objects. They are growing and shrinking when moving through space. We may differentiate between four stages of dynamic movement.',
		f23_2_f_1:'At the point where some object are emerging we have C, the creation point.',
		f23_2_f_2:'Then it passes through the different scales until it would disappear again.',
		f23_2_f_3:'This is A, the annihilation point.',
		f23_2_f_4:'Then there is something in between. It could be that two objects which come closer emerge at point M and they also would split again and grow further in apart. All this you may observe in this kind of hyper blob- diagram.',
		f23_2_f_5:'An application would be for example the detection of tree crowns.',
		
// Lesson 4 Knowledge Representation
	f24_0:'This is lesson 4: Knowledge representation. It is one of the crucial prerequisites to work with knowledge-based image analysis systems. While there are many ways to reach a higher intelligent level in image analysis, we are focusing on rule-based approaches, which we believe set a high standard in transferability and transparency. These are the topics addressed in lesson 4: (1) Why knowledge representation? (2) Experience and learning (3) Rule-based production systems; (4) Crisp vs. fuzzy rulesets; (5) Image understanding and OBIA; (6) Object categories.',
	
	//4.1 Knowledge Representation
	f25_0:'First we want to take a closer look why we are dealing with knowledge presentation.',
	
		//4.1.1 Preamble
		f25_1:' We have an intuitive, yet experience-based and to some degree culture-driven concept of how our geographical environment is organised. Trees, meadows, roads, rivers, hills and mountains are perceived and categorized instantly, depending on our level of experience. This also applies to imagery. Once familiarised with the top-view perspective we are not just observing singular features but try to understand the entire scene and start interpreting it. Expderience encapsulates a lot of implicit knowledge. To make this knowledge explicit, is one of the challenges in object-based image analysis.',					
		
		//4.1.2 Knowledge Representation?
		f25_2:'Knowledge plays a key role in the information extraction part of the remote sensing processing chain. We have a huge stock of implicit knowledge that is being used in daily routine tasks in image interpretation of various kinds.',
		f25_2_f_1:'We illustrated the phenomenon of object hypotheses by the example of a chair with a zebra-like cover. In the beginning we see a black line before a white background. As soon as a little more context-related information was provided, humans tend to see a portion of a zebra. In the end, however, the revealed shape of the object would reject all previous hypotheses. So stepwise, the colour, form and arrangement evoke certain parts of our knowledge and experience.',
		f25_2_f_2:'Object hypotheses are constantly tested and benchmarked against what we see. Recall  the example of President Lincoln. Even some very reduced pattern can be matched with a known face, even seen a few times only and not stored conciously. Thus, visual impression, knowledge, and experience work closely together',
		
	//4.2 Experience and Learning
	f26_0:'',
	
		//4.2.1 Experience and Learning-part 1
		f26_1:'By training, it means some kind of formalized learning, we incrementally complement our implicit knowledge with explicit knowledge. In image analysis this comprises all subject-related knowledge obtained from formal learning situations and practical experience, for example how to translate the spectral behaviour into different types of healthy or stressed vegetation. ',
		f26_1_f_1:'Within artificial intelligence',
		f26_1_f_2:', we distinguish procedural from structural knowledge. Procedural knowledge is concerned with the specific computational functions. It can be represented by a set of rules. Structural knowledge is domain-related and implies how concepts of a domain are structured and interrelated. Within OBIA, we need both: structural knowledge for establishing the links between image objects and real world geographical features and procedural knowledge for preparing the rule-bases. ',
		f26_1_f_3:'Structural knowledge is characterised by high semantic contents; thus it needs to be organised in knowledge organizing systems. Such systems are visualised by graphic notations such as semantic networks, also called an ontology, or more mathematical theories like formal concept analysis. ',
		f26_1_f_4:'In image analysis, semantic nets or any other representations of ontologies, offer a formal framework for semantic knowledge representation. This can be realised, for example, using hierarchical inheritance. A grassland or woodloand is more specific as vegetation. They are instances of the class vegetation. Urban parks are parts of urban areas. With increasing complexity the transparency handling of semantic nets will reach a limit. There are also non-hierarchical ontologies, which are more focusing on relations, rather than hierarchical structures. Bayesian networks have weighted connections. When starting with image interpretation we notice that a lot of experience is required. It requires training to match the false colour schemes with natural phenomena and to understand certain texture or structures on the imaged features. Even long time learning cannot prevent us from facing ambiguity when features are very like in structure or colour. In Lesson 2 we have heard that signal processing by our senses is an act of vector coding in a high-dimensional feature space. It remains a challenge to find out more about the vector axes being used when we interpret signals through our senses. In any way, experience means a tighter allocation in that feature space. ',
		f26_1_f_5:'Skills of a trained interpreter and their experienced perception may be mimicked by an artificial neural network. ',
		f26_1_f_6:'Neural networks are designed as neuron-like machines, which optimize themselves through adaptive vector coding. The system of weights and synapses is tuned to correctly classify images.',
		f26_1_f_7:'Often, people critize that neural net classifiers remain a black box system. In other words, once the system of weights and synapses is established the underlying intelligence cannot be tapped any more. Such learnt experiences can be hardly reconstructed. The layered structure in deep learning has the disadvantage of low transparency. In this respect the strengths of ANN techniques are sacrificed by the problem of a very low transparency. Case-based reasoning  utilizes specific knowledge related to an interpretation task. As a problem-solving paradigm it reuses learnt cases of previously experienced concrete problem situations, the so-called exemplars, which are stored in a case-base. New problems are solved by comparing these to known cases, which leads to an ongoing learning process. The system permanently reuses stored knowledge and at the same time improves its knowledge by retaining and learning. ',
		
		//4.2.2 Experience and Learning-part 2
		f26_2:'Binnig and others in 2002 use the term natural computing to stress a similar nature of natural thinking and computing.',
		f26_2_f_1:'According to them, expert systems do not sufficiently focus on the net-like character of our thinking, i.e. knowledge is usually represented in a too static manner. ',
		f26_2_f_2:'Combining individual strengths from various approaches Binnig and others have proposed a self-organizing, semantic, and self-similar network. This would enable us to represent scene-related procedural knowledge in a hierarchical form. The classification process itself is controlled by excitements and thresholds. The state of activation depends on the activation state of former connections and so on.',
		f26_2_f_3:'The entire construct makes up a fractal machine, where sub-networks are self-similar to super-networks. For the sake of simplicity, an inheritance concept is used to connect properties and procedures. Activation depends on neighbourhood like in cellular automata. By an optimally hierarchically structured semantic network, the classifications and segmentation are organised in a cyclic process. By this, the unstructured input, meaning the single picksels,  evolves to a logical structural arrangement of objects according to the cognition network: Binnig states that: “the creation of objects and their relations on and across different hierarchical levels is equivalent to transform information into knowledge”.',
		
	//4.3 Production Systems
	f27_0:'In the next chapter we shall have a closer look at the prodcution system in OBIA',
	
		//4.3.1 Rule-based production system
		f27_1:'In general we aim at a combined solutions of learning and self-organizing knowledge systems at an operational stage. As a kind of preliminary stage towards this objective, we use rule-based production system, where knowledge needs to be encoded in rules. On the other hand, this is already a great advantage over visual interpretation in routinised tasks.',
		f27_1_f_1:'The transfer of experienced knowledge into a consistent set of rules is not a trivial nor task. Although rules may be readily implemented once they are formulated, we need guidelines which object describing features we use and how we combine these. Plus, we need control mechanisms which control the integrity of the rule set. As Winston already pointed out in 1984, we need “a set of conventions about how to describe a class of things”. ',
		f27_1_f_2:'Like in knowledge representation there is a syntactical, or procedural, and a semantic dimension. The syntactical dimension provides a set of symbols that can be used or combined, while the semantic dimension specifies what meaning those symbols and combinations have. Within such production systems, rules are incorporated in a knowledge engineer to classify image objects through logical inference.',
		f27_1_f_3:'Our every-day experience tells us that expert knowledge is often intuitive and not directly transferable into crisp decisions. This vaguness can be expressed through fuzzification. Fuzzy logic allows statements about real-world phenomena with some degree of uncertainty. It converts a binary membership into a gradual degree of certainty. Following this idea, an image object is not classified in a strict and binary manner, but rather obtains a degree of membership to a certain class.',
		
	//4.4 Fuzzy Sets
	f28_0:'What are fuzzy rule sets?',
	
		//4.4.1 Fuzzy Rule Sets- part 1
		f28_1:'Concepts like warm or cold use fuzzy boundaries. We would all consider water in our teacup as hot if it is freshly brewed, so around 100 degrees Celsius. ',
		f28_1_f_1:'Depending on the time the tea remains in our cup, we would eventually consider at as still hot, or warm, still warm or nearly cold or really cold. What does that show?',
		f28_1_f_2:'We all have a concept of hot, warm or cold (which may slightly differ intersubjectively due to a individual sense of heat)',
		f28_1_f_3:'We partitionate a continuous phenomenon, such as temperature, and categorize it.',
		f28_1_f_4:'The boundaries between these categories are not crisp, so there are hardly any fixed thresholds, but',
		f28_1_f_5:'With growing distance from these boundaries, the assignment of a certain category is undisputable. We all would assume a person larger than 2 meters a tall person, while a person of around 1 meter 80 we would consider relatively tall. Whenever our conceptual understanding of the real world implies vagueness, we use fuzzy terms. Despite this vagueness we usually do not have difficulties in judging whether something is still warm or already cold. We can live with the fact that usually categories are crisp, but there might be some borderline cases in the gradual transition where decisions are hard to be made.',
		
		//4.4.2 Fuzzy Rule Sets- part 2
		f28_2:'Within image analysis, vagueness does exist as well, in particular in class assignment. When applying a standard rule-based classificator, we could establish a threshold to distinguish between vegetated and non-vegetated objects. For example we a threshold of the NDVI to 0.2, because physical models tell us that this is a reasonable threshold. But can we be sure that an object with an NDVI of 0.19 is non-vegetated? Probably not: if feels more appropriate when considering a certain gradual transition between these two binary classes. Similarily, when applying a crisp threshold at the infrared channel to distinguish between deciduous and coniferous forest at 65, we run the risk of introducing a pseudo accuracy in the conceptual distinction where there is none.',
		f28_2_f_1:'According to Jensen 2005, fuzzy set theory is “better suited for dealing with real-world problems than traditional logic because most human reasoning is imprecise.“. More systematically, within image analysis we are facing the following challenges that may cause vagueness in the interpretation and the assignment of classes: First, vague (linguistic) class descriptions.',
		f28_2_f_2:'Second, uncertainty in sensor measurements. Third, parameter variations due to limited sensor calibration',
		f28_2_f_3:'Fourth, class mixtures due to limited resolution;',
		f28_2_f_4:'Working with fuzzy sets also implies that objects can be assigned to multiple classes.',
		f28_2_f_5:'A cup of tea with a measured temperature of 65 degree Celsius may be considered  hot by one person but only lukewarm by another. The probability of a class assignment is higher with greater distance to the border zone. If our tea has 85 degree Celsius, most people will consider it really hot (or undrinkable).',
		f28_2_f_6:'Within OBIA, we work with objects instead of single picksels. Therefore, we also work on aggregated values, meaning the statistical mean spectral value of an object. We will explore this more in the next lesson, but for fuzzy sets that means we have usually a more stable assignment that with picksels.',
		
		//4.4.3 Fuzzy Rule Sets- part 3
		f28_3:'The following sequence shows how Boolean values, so binary values, are turned into a fuzzy value system. We call this process fuzzification. The sequence also shows how fuzzy membership functions work and the degree of memberships as well as class assignment probabilities. Please stop the speech here for a while and study the slide on your own.',
		f28_3_f_1:'So how does the transition from a crisp to a fuzzy system work? We have a fuzzy set A, Which is a certain subset of values of the whole range of object features. For example, the value range in the near band. It also represents an object feature class, for example forest within one object feature.',
		f28_3_f_2:'We can replace the Boolean logic false or true of the membership value Mue by a continuous range of zero to one. Then we define a membership function Mue.',
		f28_3_f_3:'We assume that from a certain value, in this case 50, the probability, that the object will be a forest, starts increasing.',
		f28_3_f_4:'Once 85 is reached, we can be pretty sure that this object is a forest. ',
		f28_3_f_5:'Here, beyond 175, the probability decreases again. After 230, the probability is actually 0',
		f28_3_f_6:'Whenever the Mue membership function is increasing and higher than zero, X belongs to the fuzzy set A. Here, the red rectangle is the fuzzy set A.',
		
		//4.4.4 Fuzzy Rule Sets- part 4
		f28_4:'We can also encounter a case where certain features may have multiple class assignments. Please stop again the speech and take a closer look at the slide.',
		
		//4.4.5 Fuzzy Rule Sets- part 5
		f28_5:'Ultimately, the fuzzy results have to be translated back into crisp values. We call this step defuzzification. We can control this process, for example by deciding that no class assignment should be done if membership values are too small. In other words, the probability that an object belongs reliably to a certain class is too low. For a better understanding please take your time to study the current slide.',
		
	// 4.5 Image understanding
	f29_0:'Major advances have been made in artificial intelligence including feature detection algorithms. Yet image understanding is more than feature detection. For example, when interpreting a scene that represents an ecological system, we are dealing with a high variety of instances of different target classes. ',
	
		// 4.5.1 Image understanding
		f29_1:'Image understanding, according to Pinz 1994, is commonly regarded as a process, by which we arrive at a complete description of the image content. We say, we reconstruct the imaged scene. Document image understanding employing optical character recognition and conversion into text is often taken as a striking example of successful AI implementation. While in this domain the target symbology is rather clear and well defined, it remains a challenge to correctly identify poor handwriting. Within image interpretation of EO data the target classes are usually much less defined and rather ambiguous, especially when dealing with scenes representing natural features. Image understanding aims at providing highly aggregated and application-related information in a well-defined domain of interest. Thereby it aims at a full scene description to reach from signals to a symbolic representation of the scene content. One focus is on the description of real-world objects and their relationships in the specific scene. ',
		f29_1_f_1:'Describing a scene always depends on a conceptual framework constructed by components like the underlying research question within a specific field of application and pre-existing knowledge and experience of the operator.',
		f29_1_f_2:'Gaining insight into the content of a scene requires familiarity with the potential content and personal acquaintance with the imaged area and general experience. The field of image understanding is interlinked with image processing, pattern recognition, and artificial intelligence. Image processing provides the sources in a pre-processed way. Pattern recognition has incorporated methods for knowledge representation and expert systems. AI covers a major field of computer-based image understanding, yet a certain portion is left uncovered that is related of unsolved challenges of knowledge transfer to an automated system.' ,
		
		//4.5.2 IU and OBIA- part 1
		f29_2:'By forming the conceptual link to human perception, image segmentation is considered an essential prerequisite for image understanding. OBIA offers valuable methodological assets in breaking down scene complexity into meaningful image primitives. By providing candidate discretizations of space, a scene can be modelled in adaptive scales according to the domain of interest. A profound prerequisite of image object modelling is the provision of a clear underlying concept regarding the domain of interest. This comprises an understanding of the target scale, the target object set, and the target class scheme. Note that the domain of interest of a skilled interpreter may differ from the one of a simple user; the experience of the former makes her specifically look for certain features or specific updated information, whereas the latter may be more interested in general information or a general impression he wants to obtain. ',
		
		//4.5.3 IU and OBIA- part 2
		f29_3:'When moving from image domain to application domain, we start from a real-world scene subset captured by an image of high complex content. The first step comprises the provision of scaled representations by aggregation information and reducing complexity. The multi-scale segmentation should be steered by a clear picture in mind of how target objects are structured by sub-level primitives or super-level aggregates. The critical choice of an appropriate segmentation levels makes up the 1st match of a scene-centred view with conceptual reality. ',
		
		//4.5.4 IU and OBIA- part 3
		f29_4:'With object hypotheses in our mind the modelling can be realized by encoding expert knowledge into a rule system. Modelling aims at categorizing the image objects by their spectral and spatial properties and their mutual relationships. We will explore this deeper when talking about class modelling later on. We will see that we use spectral, structural, and semantic features in modelling classes. ',
		
		//4.5.5 IU and OBIA- part 4
		f29_5:'In the final stage of image understanding when arriving at a scene description a full set of categorized target objects is achieved. This representation of the image content should meet the conceptual reality of the interpreter or user. The entire process is characterized by the utilization and transformation of knowledge. A body plan is established for the relevant features through class descriptions, modelling, rules, and labelling. The procedure makes expert knowledge explicit. Knowledge is stepwise adapted and improved through progressive interpretation and modelling. Experience grows, as knowledge will be enriched by analysing unknown scenes and the transfer of knowledge may incorporate or stimulate new rules.',
		
	// 4.5 Object Categories	
	f30_0:'In the last part of the fourth lession we want to have a closer look at objct categories.',
		
		//4.5.1 Object Categories -part 1
		f30_1:'The following article on ‘object validity contains an introductory section on the notion of bona fide and fiat objects. Please take a look.',
		
		// 4.5.2 Object categories -part 2
		f30_2:'We need this distinction because within OBIA, new geographical realities can be modelled which are otherwise hardly addressable. For a delineation of composite objects like a crop and grassland mixed arable land, we can hardly decide whether the delineation is right or wrong. But it might be valid indeed. The more we come into the domain of conditioned, policy-oriented information with a specific user group or application domain in mind, the more we need to leave classical accuracy measures behind. That means that the more complex knowledge driven rule systems are, the more advanced the validation process of the results will be. ',
		
		// 4.5.3 Object categories -part 3
		f30_3:'In this last slide you can see some examples for the differen object categories.',
		
		
// Lesson 5 Image Segmentation
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
		f34_1:'These two examples show that it is possible to cluster phenomena in space according to similar properties, as usually spatially related things have something in common. And so is image segmentation: following the 1st Law of Geography by Waldo Tobler and the principle of spatial auto-correlation that image data adhere to, we can trust in the fact that there will be homogeneous regions belonging to specific classes with a reasonable number of similar picksels.So how does image segmentation work?',
		f34_1_f:'Satellite images are composed by an array of picksels. To recall, in a multi-spectral digital image each picksel, has specific spectral value in each spectral band. Depending on the radiometric resolution, this value is in the range of 256 values in the case of 8 bit, or 2048 in the case of 11 bit. But where are the regions? These picksels have the same tendency as the neighbouring schools or the classmates have, they are similar in a certain spatial surrounding. The criterion we are looking at, at least initially, is similarity in spectral reflectance. We know the value of a picksel is the degree of reflectance in a certain spectral band width, a pseudo-continuous digital coding. While there are numerous possible values (namely 256 different ones in an 8-bit coding), still neighbouring picksels tend to have similar values.',
		
		//5.3.2 Image Segmentation in RS- part 2
		f34_2:'Let’s consider the simple case of an image of two darker objects lying on a bright table: If we lay a spectral profile over this table, also covering the two objects, and then looking at the brightness values, we will see that over a certain distance along this profile, the values are changing. Here we speak of an image event. Since these events have a certain a spatial extent, we use the term token or constellation token.',
		
		//5.3.3 Image Segmentation in RS- part 3
		f34_3:'This figure shows a random choice of a portion of an image array. We realize that picksel values are quite similar at neighbouring picksels. That’s why these picksels can be grouped. Of course, we also realize that not all picksels have similar values and there are gradual changes. This is likewise quite important, because otherwise we could not apply the top-down view mentioned above, and dissect the geographical reality in smaller, distinct units. It is time to consider what is depicted on such images. Consider a rural area with larger areas covered by grassland, forests, and water bodies such as lakes. Hovering with such a magnifier over the image, we’ll find numerous neighbouring picksels representing grassland and then, gradually, they change to forest picksels. While picksel values are not the same, they tend to range around a certain average value, which represents forest, and eventually change to water picksels, again with different values, but relatively homogenous.',
		
		// 5.3.4 Image Segmentation in RS- part 4
		f34_4:'Speaking more general, within remote sensing imagery we use segmentation techniques to group neighbouring picksels which represent specific geographic features, be it an entire forest, a group of trees or a single tree. That means that actually we perform regionalization under two aspects, regionalization in feature space (similarity in feature), and in space (similarity in location). We will return to this later.',
		f34_4_f:'The level of detail of the features we can reach depends on the image resolution, while – as rule of thumb – picksel size needs to be by a factor of 3 to 4 smaller than the objects to be represented. As picksels are the elements which are grouped into objects clearly, we need a certain amount of such building blocks. There is no exact figure how many picksels we need to compose a particular type of object, as it also depends on context, a priori knowledge, experience, etc. The small illustration shows that a few picksels are enough to represent a car on the street with a walking person (or bicycle rider?) next to it, at least if we know the context.',
		
		//5.3.5 Image Segmentation in RS- part 5
		f34_5:'This example shows the result of a region-based image segmentation of a multi-spectral Quickbird image. The created objects are clearly visible. The human eye will instantly start to judge the quality of the automated object generation. There are good matches, as for example the trees along the alley or the pathway stretching from the upper right corner towards the centre. And some of the houses or let’s say better: the roof of the houses. Some geographical objects are composed of smaller (sub-)objects, but as the example of the little pond on the left-hand side shows, the total of the sub-objects form the object of interest. Some object delineations, however, are not satisfying at all. For example, it is not clear, which objects are represented in the lower left corner. Is this one building and a parking space around or several buildings – or rather trees? We would have to go back to the original data and check our own object hypotheses.',
		
		//5.3.6 Image Segmentation in RS- part 6
		f34_6:'This slide shows a sequence of attempts to mimic visual delineation that was done on a false colour orthophoto, by performing image segmentation on Quickbird imagery of similar resolution. While intuitively we would think a visual delineation is more correct, it is not easy to judge the quality of the segmentation against the manual drawing. In none of the examples we could clearly state the automated product would be wrong, we could maybe say it seems not to be adequate. One common difference is that human delineations are scaled while the segmentation results are not. In this case a particular target mapping scale has been specified that is readily translated by human interpreters into an average density of vertices and simplicity of lines.',
		
		//5.3.7 Image Segmentation in RS- part 7
		f34_7:'We may ask: Is there a deterministic way to find regions or image objects? Coming back to the figure of ‘objectification’ that we discussed under the term ‘expert filter’ in lesson 2: There are numerous ways to produce segments, following different segmentation strategies and routines, but also different parameterizations within the routines. As some segmentation algorithms follow heuristic approaches, even the result of two segmentation runs with the same parameterizations may differ. Ultimately, segmentation results may only be judged by comparing them to visual perception of the human eye. This again depends on the types of objects we are looking at, the scale domain we are working in, and our specific expert knowledge in the area. ',
		f34_7_f_1:'The attempt to match segmentation results against what human perception would delineate, often leads to ‘problems’.  This may be attributed to bad performance of the algorithm due to poor parameterization, a bad choice of the proper algorithm, or – as the worst but maybe most often case – the inherent limitations of segmentation algorithms as such. Some ‘boundaries’ can simply not be seen by a region-based segmentation algorithm, as the example of the white triangle shows. This applies to many boundaries, which we would consider ‘conceptual’ ones, as they are perceived as ‘logical boundaries’ by a human interpreter but can hardly be introduced by algorithms. Remember, we have used the term ‘orchard problem’ in lesson 2 to illustrate this effect. We may now better understand why segmentation routines that work on the above-mentioned criteria reach their limitations. Why is it difficult to delineate conceptual boundaries, as the outline of an orchard? If we try to group neighbouring picksels with similar behaviour, we face difficulties in ‘jumping the gap’ between the picksels representing the trees. And if there is no way to group picksels, we cannot draw a boundary …,',
		
		//5.3.8 Quotation
		f34_8:'In object-based image analysis, the ‘image object’ is the central methodological element and as an object of investigation, it resides somewhere between application-driven plausibility and technology-driven detectability. To this end, we can join image segmentation with knowledge-based classification. Image segmentation decreases the level of detail, reduces image complexity, and makes image content graspable. Segmentation produces image regions, and these regions, once they are considered ‘meaningful’, become image objects; in other words, an image object is a ‘peer reviewed’ image region; refereed by a human expert. A picksel as a technically defined unit can be interpreted in terms of its spectral behaviour, in terms of the aggregation of spectral endmembers, or in terms of its neighbourhood. A picksel cannot be assigned a valid corresponding real-world object, but an image object can. Overcoming the picksel view and providing image objects that ‘make sense’ opens a new dimension in rule-based automated image analysis; image objects can be labelled directly using a range of characteristics, including spatial ones, or they can be used for modelling complex classes based on their spatial relationships. Coupled with e.g., a rule-based production system we can make expert knowledge explicit by the use of rules.',
		
	
	// 5.4 Groups of Segmentation
	f35_0:'In the folowwing we explore groups of segmentation',
	
		//5.4.1 Groups of Segmentation
		f35_1:'The practical aim of image segmentation is to find an optimum match between image objects and geographical features, so ultimately the real world objects to be addressed. While there are literally hundreds of different segmentation algorithms, we may broadly distinguish between three groups, i.e. histogram-based, edge-based, and region-based segmentation algorithms.',
		f35_1_f:'A special case are segmentation techniques that segment images into regular tiles, according to some geometric principle. This could be squares in the case of a chessboard segmentation or hexagons in the case of honeycomb segmentation. Believe it or not, a picksel-sized chessboard segmentation is a kind of segmentation! But what is it for? You may find the answer in one of the exercises. Please note that this kind of segmentation techniques do not obey what we have said about similarity in features. Here, regions are defined without any relation to the image content, just like a road is being segmented by every kilometre. Within OBIA we may call this ‘pseudo-segmentation’. ',
		
		//5.4.2 Histogram segementation
		f35_2:'Histogram-based approaches perform segmentation within the feature space. These clustering approaches differ from other approaches mainly by ignoring the spatial dimension in real space. It is a form of unsupervised classification, leading to classes but not to spatially contiguous regions. So this may be also called a ’pseudo-segmentation’. ',
		
		//5.4.3 Edge-based segementation- part 1
		f35_3:'Edge-based algorithms are searching for edges that occur between homogeneous areas. This process usually includes filtering (e.g. Li Sigma filter)and enhancement of the image prior to the detection of the edges. The detected edges (groups of picksels) need to be combined in order to form a boundary.',
		
		//5.4.4 Edge-based segementation- part 2
		f35_4:'This is a typical workflow for edge-based segmentation. Please study it on your own.',
		
		//5.4.5 Region-based segementation
		f35_5:'Region-based segmentation algorithms, as the name indicates, deliver regions. They can be differentiated into region growth, region merging and splitting techniques and various derivations or combinations. Region growth starts with a set of seed picksels from which regions grow by adding neighbouring picksels as long as a homogeneity criterion applies. Region merging starts with initial regions and merges them together until a scale-dependent threshold in size is reached.',
		
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

