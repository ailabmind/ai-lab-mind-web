const blogPosts = [
  {
    "title": "3 tareas que puedes automatizar hoy sin saber programar",
    "summary": "Responde mensajes repetidos, organiza pedidos y automatiza seguimientos sin programar. Aquí te explico cómo.",
    "date": "2025-07-19",
    "link": "assets/posts/post-automatiza-sin-programar.html",
    "image": "assets/img/automatiza-sin-programar.png",
    "categories": [
      "Automatización"
    ],
    "lang": "es"
  },
  {
    "title": "3 tasks you can automate today — no coding needed",
    "summary": "Answer common questions, organize orders and automate follow-ups — no coding required. Here's how.",
    "date": "2025-07-19",
    "link": "assets/posts/post-automatiza-sin-programar-en.html",
    "image": "assets/img/automatiza-sin-programar.png",
    "categories": [
      "Automation"
    ],
    "lang": "en"
  },
  {
    "title": "De 0 a 100 leads con agentes de voz",
    "summary": "Te cuento cómo un negocio pasó de no tener clientes a generar 100 leads automatizados con un agente de voz.",
    "date": "2025-07-18",
    "link": "assets/posts/post-de-0-a-100-leads.html",
    "image": "assets/img/de-0-a-100-leads.png",
    "categories": [
      "Estrategia"
    ],
    "lang": "es"
  },
  {
    "title": "From 0 to 100 leads with voice agents",
    "summary": "How one small business went from 0 to 100 qualified leads using a voice agent. Real story inside.",
    "date": "2025-07-18",
    "link": "assets/posts/post-de-0-a-100-en.html",
    "image": "assets/img/de-0-a-100-leads.png",
    "categories": [
      "Strategy"
    ],
    "lang": "en"
  },
  {
    "title": "Cómo una empresa artesanal triplicó sus ventas usando IA",
    "summary": "Caso real de automatización: menos estrés, más pedidos y un sistema que responde solo.",
    "date": "2025-07-17",
    "link": "assets/posts/post-empresa-artesanal.html",
    "image": "assets/img/empresa-artesanal.png",
    "categories": [
      "Estrategia"
    ],
    "lang": "es"
  },
  {
    "title": "How a handcrafted business tripled sales with AI",
    "summary": "A real automation case: less stress, more orders, and an AI that answers for you.",
    "date": "2025-07-17",
    "link": "assets/posts/post-empresa-artesanal-en.html",
    "image": "assets/img/empresa-artesanal.png",
    "categories": [
      "Strategy"
    ],
    "lang": "en"
  },
  {
    "title": "5 errores que cometí al implementar IA en mi negocio",
    "summary": "Dejar todo en manos de la IA suena bien… hasta que no. Aprende de mis errores y ahórrate tiempo.",
    "date": "2025-07-16",
    "link": "assets/posts/post-errores-ia.html",
    "image": "assets/img/errores-ia.png",
    "categories": [
      "Estrategia"
    ],
    "lang": "es"
  },
  {
    "title": "5 mistakes I made implementing AI in my business",
    "summary": "Letting AI run things sounds great—until it doesn’t. Learn from my mistakes and save yourself some pain.",
    "date": "2025-07-16",
    "link": "assets/posts/post-errores-ia-en.html",
    "image": "assets/img/errores-ia.png",
    "categories": [
      "Strategy"
    ],
    "lang": "en"
  },
  {
    "title": "Las 3 excusas que más escucho para no usar IA",
    "summary": "No tengo tiempo, no entiendo nada, no sé por dónde empezar. ¿Te suenan? Aquí te explico cómo superarlas.",
    "date": "2025-07-15",
    "link": "assets/posts/post-excusas-ia.html",
    "image": "assets/img/excusas-ia.png",
    "categories": [
      "Errores comunes"
    ],
    "lang": "es"
  },
  {
    "title": "Top 3 excuses people make to avoid using AI",
    "summary": "I don't have time. I don't get it. I don't know where to start. Sound familiar? Here's how to get past them.",
    "date": "2025-07-15",
    "link": "assets/posts/post-excusas-ia-en.html",
    "image": "assets/img/excusas-ia.png",
    "categories": [
      "Common mistakes"
    ],
    "lang": "en"
  },
  {
    "title": "Fundamentos de IA para no técnicos",
    "summary": "¿No eres técnico? Igual puedes aprovechar la IA. Te explicamos los conceptos esenciales de forma clara y simple.",
    "date": "2025-07-14",
    "link": "assets/posts/post-fundamentos-ia-no-tecnicos.html",
    "image": "assets/img/fundamentos-ia-no-tecnicos.png",
    "categories": [
      "Educación"
    ],
    "lang": "es"
  },
  {
    "title": "AI Basics for Non-Technical People",
    "summary": "Not technical? You can still benefit from AI. We explain the essentials in a clear, simple way.",
    "date": "2025-07-14",
    "link": "assets/posts/post-fundamentos-ia-no-tecnicos-en.html",
    "image": "assets/img/fundamentos-ia-no-tecnicos.png",
    "categories": [
      "Education"
    ],
    "lang": "en"
  },
  {
    "title": "No necesitas hablar más. Necesitas hablar mejor.",
    "summary": "Hablar más no es vender más. Aquí te explico cómo escuchar, usar IA y conectar mejor con clientes.",
    "date": "2025-07-13",
    "link": "assets/posts/post-hablar-mejor.html",
    "image": "assets/img/hablar-mejor.png",
    "categories": [
      "Ventas"
    ],
    "lang": "es"
  },
  {
    "title": "You don’t need to talk more. You need to talk better.",
    "summary": "Talking more doesn’t mean selling more. Learn how to listen, use AI and truly connect with your clients.",
    "date": "2025-07-13",
    "link": "assets/posts/post-hablar-mejor-en.html",
    "image": "assets/img/hablar-mejor.png",
    "categories": [
      "Sales"
    ],
    "lang": "en"
  },
  {
    "title": "Me fui con la IA y esto fue lo que pasó",
    "summary": "El experimento fue real. Me salí de todo y dejé que IA tomara el control. ¿Qué salió bien y qué no?",
    "date": "2025-07-12",
    "link": "assets/posts/post-me-fui-con-la-IA.html",
    "image": "assets/img/me-fui-con-la-IA.png",
    "categories": [
      "Rayos X"
    ],
    "lang": "es"
  },
  {
    "title": "I went all-in with AI. Here's what happened",
    "summary": "This was a real experiment. I stepped back and let AI take control. What worked? What didn’t?",
    "date": "2025-07-12",
    "link": "assets/posts/post-me-fui-con-la-IA-en.html",
    "image": "assets/img/me-fui-con-la-IA.png",
    "categories": [
      "Inside stories"
    ],
    "lang": "en"
  },
  {
    "title": "¿Para qué me sirve la IA?",
    "summary": "Olvídate del hype. Aquí te explico, con ejemplos reales, cómo puede ayudarte hoy.",
    "date": "2025-07-11",
    "link": "assets/posts/post-para-que-me-sirve-la-ia.html",
    "image": "assets/img/para-que-me-sirve-la-ia.png",
    "categories": [
      "Educación"
    ],
    "lang": "es"
  },
  {
    "title": "How can AI help me?",
    "summary": "Forget the hype. Here’s how AI can actually help you today, with real examples.",
    "date": "2025-07-11",
    "link": "assets/posts/post-para-que-me-sirve-la-ia-en.html",
    "image": "assets/img/para-que-me-sirve-la-ia.png",
    "categories": [
      "Education"
    ],
    "lang": "en"
  },
  {
    "title": "¿Por dónde empiezo con IA?",
    "summary": "¿Tienes curiosidad pero no sabes por dónde comenzar? Aquí tienes tu mapa inicial.",
    "date": "2025-07-10",
    "link": "assets/posts/post-por-donde-empezar.html",
    "image": "assets/img/por-donde-empezar.png",
    "categories": [
      "Educación"
    ],
    "lang": "es"
  },
  {
    "title": "Where should I start with AI?",
    "summary": "Curious about AI but don’t know where to begin? Here’s your starter map.",
    "date": "2025-07-10",
    "link": "assets/posts/post-por-donde-empezar-en.html",
    "image": "assets/img/por-donde-empezar.png",
    "categories": [
      "Education"
    ],
    "lang": "en"
  },
  {
    "title": "¿Qué es la inteligencia artificial (en palabras simples)?",
    "summary": "Te explico qué es la IA, sin tecnicismos. Para entender de verdad y aprovecharla.",
    "date": "2025-07-09",
    "link": "assets/posts/post-que-es-la-ia.html",
    "image": "assets/img/que-es-la-ia.png",
    "categories": [
      "Educación"
    ],
    "lang": "es"
  },
  {
    "title": "What is AI (in plain words)?",
    "summary": "An honest explanation of what AI is, without buzzwords. Just the basics, clearly.",
    "date": "2025-07-09",
    "link": "assets/posts/post-que-es-la-ia-en.html",
    "image": "assets/img/que-es-la-ia.png",
    "categories": [
      "Education"
    ],
    "lang": "en"
  },
  {
    "title": "¿Y a mí qué? Cuando sientes que la IA no es para ti",
    "summary": "A veces la IA parece lejana, técnica o inútil. Aquí te muestro por qué eso puede ser una trampa.",
    "date": "2025-07-08",
    "link": "assets/posts/post-y-a-mi-que.html",
    "image": "assets/img/y-a-mi-que.png",
    "categories": [
      "Rayos X"
    ],
    "lang": "es"
  },
  {
    "title": "So what? When AI feels like it’s not for you",
    "summary": "Sometimes AI feels distant or useless. Here's why that feeling might be misleading.",
    "date": "2025-07-08",
    "link": "assets/posts/post-y-a-mi-que-en.html",
    "image": "assets/img/y-a-mi-que.png",
    "categories": [
      "Inside stories"
    ],
    "lang": "en"
  },
  {
    "title": "¿Funcionan todavía las llamadas en frío?",
    "summary": "Probamos 100 llamadas con un agente de voz para ver si valía la pena. Aquí los resultados.",
    "date": "2025-07-07",
    "link": "assets/posts/post-llamadas-en-frio.html",
    "image": "assets/img/llamadas-en-frio.png",
    "categories": [
      "Ventas"
    ],
    "lang": "es"
  },
  {
    "title": "Do cold calls still work?",
    "summary": "We tested 100 cold calls with a voice agent. Was it worth it? The data says yes (and no).",
    "date": "2025-07-07",
    "link": "assets/posts/post-llamadas-en-frio-en.html",
    "image": "assets/img/llamadas-en-frio.png",
    "categories": [
      "Sales"
    ],
    "lang": "en"
  }
];