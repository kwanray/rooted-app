import type { Point, Celebration, PainPoint } from './types'

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 'inherited',
    icon: `<svg width='28' height='28' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <!-- Roots spreading underground -->
  <path d='M12 22v-8' stroke='#D4A847' strokeWidth='1.5' strokeLinecap='round'/>
  <path d='M12 18 Q9 19 7 22' stroke='#D4A847' strokeWidth='1.2' strokeLinecap='round' fill='none'/>
  <path d='M12 18 Q15 19 17 22' stroke='#D4A847' strokeWidth='1.2' strokeLinecap='round' fill='none'/>
  <path d='M12 20 Q10 21 9 23' stroke='#D4A847' strokeWidth='1' strokeLinecap='round' fill='none' opacity='0.6'/>
  <path d='M12 20 Q14 21 15 23' stroke='#D4A847' strokeWidth='1' strokeLinecap='round' fill='none' opacity='0.6'/>
  <!-- Stem growing upward -->
  <path d='M12 14 Q11 10 12 6' stroke='#D4A847' strokeWidth='1.5' strokeLinecap='round' fill='none'/>
  <!-- Left leaf -->
  <path d='M12 10 Q8 8 7 4 Q11 4 12 8' fill='rgba(212,168,71,0.7)' stroke='#D4A847' strokeWidth='1'/>
  <!-- Right leaf -->
  <path d='M12 8 Q16 6 17 2 Q13 3 12 7' fill='rgba(212,168,71,0.5)' stroke='#D4A847' strokeWidth='1'/>
  <!-- Shoot tip -->
  <circle cx='12' cy='5.5' r='1.2' fill='#D4A847'/>
</svg>`,
    label: `I inherited this faith`,
    desc: `I grew up Christian but wonder if I actually believe it for myself.`,
    hint: `Your faith can move from borrowed to owned — built on reasons you've examined yourself.`,
    journeyHint: `Full journey from Point 1 — evaluate the case from first principles.`,
  },
  {
    id: 'science',
    icon: `<svg width='28' height='28' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <!-- Telescope barrel -->
  <path d='M3 16 L14 9' stroke='#D4A847' strokeWidth='2' strokeLinecap='round'/>
  <path d='M2 13.5 L5 18.5' stroke='#D4A847' strokeWidth='1.5' strokeLinecap='round'/>
  <path d='M12 7.5 L15 12.5' stroke='#D4A847' strokeWidth='1.5' strokeLinecap='round'/>
  <!-- Telescope lens end (wide) -->
  <ellipse cx='13.5' cy='10' rx='2' ry='1.2' transform='rotate(-35 13.5 10)' stroke='#D4A847' strokeWidth='1.2' fill='rgba(212,168,71,0.1)'/>
  <!-- Tripod leg -->
  <line x1='7' y1='16' x2='6' y2='21' stroke='#D4A847' strokeWidth='1.2' strokeLinecap='round'/>
  <!-- Cross/star constellation in sky -->
  <line x1='19' y1='4' x2='19' y2='9' stroke='#D4A847' strokeWidth='1.5' strokeLinecap='round'/>
  <line x1='17' y1='6.5' x2='21' y2='6.5' stroke='#D4A847' strokeWidth='1.5' strokeLinecap='round'/>
  <!-- Small stars -->
  <circle cx='21' cy='3' r='0.8' fill='#D4A847'/>
  <circle cx='17' cy='2' r='0.6' fill='#D4A847' opacity='0.7'/>
</svg>`,
    label: `Science seems to contradict faith`,
    desc: `Evolution, the Big Bang, neuroscience — it feels like Christianity can't keep up.`,
    hint: `Many of the best arguments for God come from science itself. You may be surprised.`,
    journeyHint: `Starting at Point 3 — the cosmological case for God, built from physics.`,
  },
  {
    id: 'bible',
    icon: `<svg width='28' height='28' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <!-- Scroll body -->
  <rect x='5' y='4' width='14' height='16' rx='1' fill='rgba(212,168,71,0.12)' stroke='#D4A847' strokeWidth='1.3'/>
  <!-- Scroll rolled ends top and bottom -->
  <path d='M5 5 Q3 6 3 8 Q3 10 5 10' stroke='#D4A847' strokeWidth='1.2' fill='rgba(212,168,71,0.15)'/>
  <path d='M19 5 Q21 6 21 8 Q21 10 19 10' stroke='#D4A847' strokeWidth='1.2' fill='rgba(212,168,71,0.15)'/>
  <path d='M5 14 Q3 15 3 17 Q3 19 5 19' stroke='#D4A847' strokeWidth='1.2' fill='rgba(212,168,71,0.1)'/>
  <path d='M19 14 Q21 15 21 17 Q21 19 19 19' stroke='#D4A847' strokeWidth='1.2' fill='rgba(212,168,71,0.1)'/>
  <!-- Text lines on scroll -->
  <line x1='8' y1='9' x2='16' y2='9' stroke='#D4A847' strokeWidth='1' strokeLinecap='round' opacity='0.7'/>
  <line x1='8' y1='12' x2='16' y2='12' stroke='#D4A847' strokeWidth='1' strokeLinecap='round' opacity='0.7'/>
  <line x1='8' y1='15' x2='13' y2='15' stroke='#D4A847' strokeWidth='1' strokeLinecap='round' opacity='0.7'/>
  <!-- Wax seal (bottom right) -->
  <circle cx='16' cy='17.5' r='2.5' fill='rgba(212,168,71,0.3)' stroke='#D4A847' strokeWidth='1.2'/>
  <!-- Seal cross mark -->
  <line x1='16' y1='16' x2='16' y2='19' stroke='#D4A847' strokeWidth='1' strokeLinecap='round'/>
  <line x1='14.5' y1='17.5' x2='17.5' y2='17.5' stroke='#D4A847' strokeWidth='1' strokeLinecap='round'/>
</svg>`,
    label: `I doubt the Bible's reliability`,
    desc: `How do we know it wasn't changed, fabricated, or just legend?`,
    hint: `The NT is among the best-attested ancient documents in history. Let's look at the evidence.`,
    journeyHint: `Starting at Point 6 — the New Testament examined as a historical document.`,
  },
  {
    id: 'jesus',
    icon: `<svg width='28' height='28' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <!-- Cross (destination) top right -->
  <line x1='18' y1='2' x2='18' y2='10' stroke='#D4A847' strokeWidth='1.8' strokeLinecap='round'/>
  <line x1='15' y1='5' x2='21' y2='5' stroke='#D4A847' strokeWidth='1.8' strokeLinecap='round'/>
  <!-- Footprints leading toward cross (bottom left to upper right) -->
  <!-- Left foot 1 -->
  <ellipse cx='5' cy='19' rx='1.4' ry='2' transform='rotate(-20 5 19)' fill='#D4A847' opacity='0.9'/>
  <!-- Right foot 2 -->
  <ellipse cx='8' cy='16.5' rx='1.4' ry='2' transform='rotate(-25 8 16.5)' fill='#D4A847' opacity='0.75'/>
  <!-- Left foot 3 -->
  <ellipse cx='11' cy='14' rx='1.3' ry='1.8' transform='rotate(-30 11 14)' fill='#D4A847' opacity='0.6'/>
  <!-- Right foot 4 (fading) -->
  <ellipse cx='14' cy='11.5' rx='1.2' ry='1.6' transform='rotate(-35 14 11.5)' fill='#D4A847' opacity='0.4'/>
</svg>`,
    label: `I'm not sure about Jesus`,
    desc: `Maybe he was a great teacher, but claiming to be God seems like a stretch.`,
    hint: `The evidence for the resurrection is stronger than most people realise. Let's examine it.`,
    journeyHint: `Starting at Point 7 — what Jesus actually claimed, and what the evidence says.`,
  },
  {
    id: 'defense',
    icon: `<svg width='28' height='28' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <!-- Shield -->
  <path d='M12 2L4 6v6c0 5.5 4 10.5 8 12 4-1.5 8-6.5 8-12V6z' fill='rgba(212,168,71,0.15)' stroke='#D4A847' strokeWidth='1.4' strokeLinejoin='round'/>
  <!-- Sword blade pointing up-right through shield -->
  <line x1='7' y1='19' x2='18' y2='5' stroke='#D4A847' strokeWidth='1.6' strokeLinecap='round'/>
  <!-- Crossguard -->
  <line x1='14' y1='8' x2='18' y2='12' stroke='#D4A847' strokeWidth='1.4' strokeLinecap='round'/>
  <!-- Pommel -->
  <circle cx='7.5' cy='18.5' r='1.2' fill='#D4A847'/>
</svg>`,
    label: `I want to defend my faith better`,
    desc: `Friends and colleagues challenge me and I don't know how to respond.`,
    hint: `Classical apologetics gives you a logical, step-by-step framework anyone can follow.`,
    journeyHint: `Full journey from Point 1 — the complete logical framework, step by step.`,
  },
]

export const POINTS: Point[] = [
  {
    n: 1,
    title: 'Truth About Reality Is Knowable',
    short: 'Truth is knowable',
    phase: 0,
    highlight: ['truth', 'knowable', 'reality', 'self-defeating'],
    highlightMsg: `If you've been told faith is just personal opinion — this point shows why objective truth is unavoidable.`,
    highlightMsgs: {},
    entryBanners: {},
    takeaway: 'Truth exists, it is knowable, and religious truth is no exception — every worldview that denies this defeats itself.',
    claim: `Before we can ask whether Christianity is true, we need to settle something more basic: does truth exist — and can we know it? This isn't a philosophical detour. It's the ground everything else stands on. If truth doesn't exist or can't be known, then nothing in this quest — no argument, no evidence, no miracle — means anything at all.`,
    sg: `Singapore prizes pragmatism — "does it work?" But the moment something works better, you're already claiming one thing is truer than another. You've assumed truth exists. Singapore's multicultural harmony is a great social value — but it cannot mean that contradictory religious truth claims are all simultaneously correct. We can honour every person without pretending every claim is equally valid. The relativist who says "that's true for you but not for me" is making a statement they intend to be universally true — for you and for them. That's precisely the self-defeat Geisler exposes.`,
    specialViz: null,
    geisler: [
      {
        head: `The Challenge: What People Say Instead`,
        body: `Many people today say: "Truth is personal." "What's true for you isn't true for me." "You can't know religious truth." These aren't fringe views — they're mainstream. And if any of them are right, this quest ends here. So before we go further, let's examine them honestly. Relativism says "all truth is relative" — is that statement itself relative, or absolutely true? Scepticism says "you can't know anything for certain" — are you certain about that? Agnosticism says "we can't know any truths about religion" — is that a truth about religion? Pluralism says "all religions are equally true" — that is itself an absolute truth claim. Postmodernism says "truth is a social construct" — is that itself socially constructed, or objectively true? Scientism says "only science gives us truth" — that claim cannot be proven by science. Subjectivism says "truth is whatever feels true to me" — does that apply to everyone, including people who feel subjectivism is false? Notice the pattern: every attempt to deny truth uses truth to do it.`,
      },
      {
        head: `The Self-Defeating Test — The Master Key`,
        body: `Geisler's key insight: a statement is self-defeating if it undermines itself the moment it is stated. "Truth doesn't exist" — is that true? "No one can know anything" — do you know that? "All claims are equally valid" — is that claim more valid than the claim that it's wrong? You cannot escape truth by using truth to deny it. Every "ism" fails this test. This isn't a trick — it's logic. The burden of proof has shifted: truth exists, and those who deny it have no ground left to stand on.`,
      },
      {
        head: `So What Is Truth?`,
        body: `Now that we've established truth exists, we can define it. Geisler's definition: truth is that which corresponds to reality. A statement is true if it matches what actually is. Truth is not what feels good, not what society agrees on, not what works for now — it is what corresponds to reality, independently of anyone's opinion. This means truth existed before humans did. We don't create truth — we discover it. And two contradictory claims cannot both be true. Either God exists or He doesn't. Either Jesus rose or He didn't. Reality doesn't bend to preference.`,
      },
      {
        head: `Truth Is Knowable — Three Channels`,
        body: `It's not enough to prove truth exists. We need to show it's accessible. Human beings have always used three channels to access truth. Through our senses: we observe the physical world and draw reliable conclusions. Science works because reality behaves in consistent, measurable ways. Through reason: logic allows us to move from what we observe to conclusions we cannot directly see. If all men are mortal and Socrates is a man, we can know Socrates is mortal without watching him die. Through testimony: we accept truths we cannot personally verify by trusting reliable witnesses. You know World War II happened not because you were there, but because the evidence and testimony are overwhelming. These three channels — sense, reason, testimony — are sufficient to investigate any truth claim. Including religious ones.`,
      },
      {
        head: `Religious Truth Is Knowable — No Special Exemption`,
        body: `Here is Geisler's decisive move: there is no special exemption for religious claims. When people say "you can't know religious truth," they're applying a standard to religion they don't apply anywhere else. They trust historical testimony about Julius Caesar. They trust scientific reasoning they can't personally verify. They trust their senses daily. Religious truth claims are historical, logical, and evidential. They can be examined by exactly the same tools. The claim "Jesus rose from the dead" is not a feeling — it is a historical claim. Either it happened or it didn't. Christianity does not ask for blind faith. It asks for honest investigation. The rest of this quest is that investigation.`,
      },
    ],
    objections: [
      {
        head: `"But religion is just faith, not facts"`,
        body: `This assumes a sharp divide between faith and evidence that the Bible itself doesn't make. Luke opens his Gospel by saying he investigated everything carefully. Paul appeals to 500 eyewitnesses of the resurrection. Biblical faith is not belief without evidence — it is trust based on evidence. Faith follows investigation; it doesn't replace it.`,
      },
      {
        head: `"Different cultures have different truths"`,
        body: `Different cultures have different customs, values, and perspectives — that is true. But customs are not the same as truth claims. The claim "Jesus rose from the dead" is not a cultural preference — it is a historical claim that either happened or didn't, regardless of which culture you belong to. Cultural diversity is real; logical contradiction is also real.`,
      },
    ],
    deepDive: [
      {
        head: `The Correspondence Theory of Truth`,
        body: `Truth is defined precisely: a statement is true if and only if it corresponds to reality. When Anne says "I feel cold," it is objectively true for everyone that Anne feels cold — her relative preference is subjective, but the fact of her feeling is not. We discover truth; we do not create it. This correspondence theory underpins science, law, history, and every serious human inquiry.`,
      },
      {
        head: `Why Scepticism Is Self-Defeating`,
        body: `Anyone who says "we cannot know the truth about the world" is making a knowledge claim about the world — namely, that it is unknowable. Their statement, if true, falsifies itself. Similarly, "the ultimate truth is beyond human comprehension" is itself a comprehensive truth claim about reality. Both positions undermine themselves the moment they are stated.`,
      },
      {
        head: `Avicenna's Challenge`,
        body: `The medieval philosopher Ibn Sina (Avicenna) offered a sharp rejoinder to those who deny the law of non-contradiction: "Anyone who denies the Law of Non-Contradiction should be beaten and burned until he admits that to be beaten is not the same as not to be beaten." The point is that even those who verbally deny truth rely on it in every experience — including the experience of suffering.`,
      },
      {
        head: `Feelings and Facts Are Different Things`,
        body: `Truth does not depend on feelings, even when we express truths about our feelings. It may not make you happy to hear that a friend has died — but how you feel about it does not change the fact. Our emotional response to a truth does not alter the truth itself. This distinction is essential when discussing religious claims that may be personally costly to accept.`,
      },
    ],
    insight: `Every worldview that tries to place religious truth beyond examination ends up defeating itself. The agnostic who says "we can't know any truths about religion" has just stated a truth about religion. The pluralist who says "all religions are equally true" has made an absolute claim. Geisler's point is not aggressive — it is the precondition of all honest inquiry. Once truth is established as real and knowable, the question "Is Christianity true?" becomes not just legitimate — but urgent.`,
    reflect: `Which of the "isms" have you heard — or believed yourself? Pick one and run it through the self-defeating test. Does it survive?`,
    verses: ['John 14:6', 'John 8:32', 'John 18:37-38'],
    scripture: `"I am the way, the truth, and the life." — John 14:6 | "Then you will know the truth, and the truth will set you free." — John 8:32`,
    ref: 'John 14:6',
  },
  {
    n: 2,
    title: 'Opposites Cannot Both Be True',
    short: 'Logic',
    phase: 0,
    highlight: ['science', 'defense'],
    highlightMsg: `Science itself depends on this principle — without it, no experimental result could ever rule anything out.`,
    highlightMsgs: {
      science: `Every experiment assumes that a result either confirms or refutes a hypothesis — not both. Logic is science's silent foundation.`,
      defense: `This is the tool that cuts through vague pluralism: Christianity and Islam cannot both be true. Words mean things.`,
      inherited: `Inheriting a faith doesn't mean it's false — but it does mean you should examine whether its claims hold up logically. Start here.`,
    },
    takeaway: `A God who both exists and doesn't exist is no God at all.`,
    claim: `The opposite of true is false — and this is the bedrock of all knowledge, including religious knowledge.`,
    sg: `Singaporeans are culturally wired toward harmony and away from confrontation. This is a strength — but it can blur into a false tolerance where we treat incompatible worldviews as equally valid to avoid offence. Christianity, Islam, and atheism make mutually exclusive truth claims. They cannot all be true simultaneously. Acknowledging this is not intolerance; it is intellectual honesty, and it is the only path to genuine dialogue.`,
    specialViz: null,
    geisler: [
      {
        head: `The Foundation of All Reasoning`,
        body: `Without the law of non-contradiction, no argument can be made, no experiment can be interpreted, and no sentence can carry meaning. It is not a Western or Christian invention — it is the precondition of all thought.`,
      },
      {
        head: `Religions Make Contradictory Claims`,
        body: `Christianity says Jesus rose from the dead. Islam says he did not die. Both cannot be historically true. The Resurrection either happened or it didn't. Religious pluralism that ignores this is intellectually dishonest.`,
      },
      {
        head: `Even Paradoxes Obey the Law`,
        body: `When theologians speak of paradox (the Trinity, two natures of Christ), they mean apparent contradiction that can be resolved with proper distinctions — not genuine logical contradiction. God is one in essence, three in person — not one and three in the same sense simultaneously.`,
      },
      {
        head: `The Practical Test`,
        body: `Ask someone who denies this law: "Are you sure that's true?" Their answer — either yes or no — will invoke the very law they deny. They cannot escape it in practice, which shows it is not culturally imposed but logically inescapable.`,
      },
    ],
    deepDive: [
      {
        head: `Avicenna's Challenge`,
        body: `The medieval Persian philosopher ibn Sīnā (Avicenna) offered a sharp rejoinder to those who deny the law of non-contradiction: "Anyone who denies the Law of Non-Contradiction should be beaten and burned until he admits that to be beaten is not the same as not to be beaten, and to be burned is not the same as not to be burned." The point is that even those who verbally deny the law rely on it in every experience.`,
      },
      {
        head: `Why Religious Pluralism Cannot Be Right`,
        body: `Religions disagree on the most fundamental questions: does a personal God exist, did Jesus rise from the dead, is salvation by grace or works, is there an afterlife? These are not compatible differences of emphasis — they are direct contradictions. It is possible that all religions are wrong on some points, but logically impossible that all contradictory claims are simultaneously right.`,
      },
      {
        head: `A Spectrum, Not an Absolute Dismissal`,
        body: `A nuanced point worth noting: religions can operate on a spectrum — somewhat true, mostly true, or completely true. A religion is false only inasmuch as it contradicts the truth. This is not a claim that every tradition is worthless — it is a call to examine which tradition is most consistent with what we can know to be true.`,
      },
    ],
    insight: `The law of non-contradiction isn't a weapon — it's a gift. It means faith either stands or falls on evidence, not just feeling. Singaporean harmony is a social value, not a logical claim. We can honour all people without pretending all truth claims are identical.`,
    reflect: `Can two religions that directly contradict each other both be fully true? What does your answer mean for how you evaluate truth claims?`,
    verses: ['Matthew 5:37', 'James 5:12', 'Revelation 3:15-16'],
    scripture: `"Let your yes be yes and your no be no." — Matthew 5:37`,
    ref: 'Matthew 5:37',
  },
  {
    n: 3,
    title: 'The Theistic God Exists',
    short: 'God Exists',
    phase: 1,
    highlight: ['science', 'inherited'],
    highlightMsg: `The very existence of the universe — and its fine-tuning for life — points powerfully to a Creator.`,
    highlightMsgs: {
      science: `These arguments don't require faith to follow — they're built from thermodynamics, cosmic expansion, and Einstein's equations. Science points here.`,
      inherited: `If you're going to own your faith, this is where to start: does the universe actually require a cause? The evidence is stronger than you might think.`,
    },
    entryBanners: {
      science: `You're starting here because science and faith feel at odds. These arguments come straight from physics and cosmology — and they point somewhere surprising. After this section, you'll complete the full case by briefly revisiting the philosophical foundations at the end.`,
    },
    takeaway: `Something cannot come from nothing; the universe needs a Cause.`,
    claim: `The existence of the universe, moral law, and design all converge on one explanation: a theistic God.`,
    sg: `In Singapore, many educated people identify as "free thinkers" — a label that sounds open-minded, but in practice often means closed to the idea that a creator God exists. The irony is that true open-mindedness has to follow the evidence wherever it leads. And the evidence is striking: the Big Bang confirms the universe had a beginning — and whatever begins to exist has a cause. The cause of all space, time, matter, and energy must itself be outside space, time, matter, and energy: eternal, immaterial, unimaginably powerful, and personal (since it chose to create). That is precisely what Christians mean by God. The real free thinker is the one willing to consider that.`,
    specialViz: 'surge',
    geisler: [
      {
        head: `The Cosmological Argument (Kalam)`,
        body: `Everything that begins to exist has a cause. The universe began to exist (confirmed by Big Bang cosmology and the Second Law of Thermodynamics). Therefore, the universe has a cause — one that is uncaused, timeless, spaceless, and enormously powerful.`,
      },
      {
        head: `The Teleological Argument (Fine-Tuning)`,
        body: `The cosmological constants of the universe are set to an incomprehensibly precise degree for life to exist. The probability of this occurring by chance is astronomically small. Design inference is the most reasonable conclusion — the same inference we use in archaeology, forensics, and SETI.`,
      },
      {
        head: `The Ontological Argument`,
        body: `We can conceive of a being greater than which nothing can be conceived. If this being existed only in the mind and not in reality, we could conceive of a greater being (one that also exists in reality). Therefore, the greatest conceivable being must actually exist.`,
      },
      {
        head: `The Moral Argument`,
        body: `Objective moral values and duties exist (we all act as if genocide is really wrong, not just unfashionable). Objective moral values require a transcendent moral standard. Therefore, a morally perfect personal being — God — exists as the grounding for morality.`,
      },
    ],
    objections: [
      {
        head: `"But Who Made God?" — The Objection Answered`,
        body: `Geisler distinguishes three kinds of beings: self-caused (logically impossible — you'd have to exist before you exist to cause yourself), caused (contingent things that began to exist and depend on something outside themselves), and uncaused (exists by the necessity of its own nature, never began). The cosmological argument's causal principle is precisely stated: "everything that begins to exist has a cause" — not "everything." Bertrand Russell's famous retort ("if everything has a cause, God must have one too") misquotes the argument. God, being eternal, never began. Asking "who made God?" is therefore a category mistake — like asking what is north of the North Pole. You are applying the concept of causation to the very thing defined as being outside that category.`,
      },
      {
        head: `"The Universe Is Just There" — The Atheist's Same Problem`,
        body: `Many atheists, following Russell and Hawking, argue the universe simply exists without a cause — it just "is." But notice: this is doing precisely what they accuse the theist of doing with God. Both positions require something uncaused at the foundation. The real question is not whether something is uncaused, but what it is. Here the theist has a decisive advantage: the scientific evidence — the Big Bang, thermodynamics running down, the universe expanding from a singularity — shows the universe had a beginning, which means it cannot be the uncaused foundation it is claimed to be. An uncaused God existing outside time and space faces no such contradiction. The atheist's "brute fact" universe is undermined by the very science they rely on.`,
      },
    ],
    deepDive: [
      {
        head: `The Kalam: Scientific Support in Detail`,
        body: `The Kalam argument's second premise — "the universe had a beginning" — is backed by two lines of scientific evidence. First, the second law of thermodynamics: in a closed system, usable energy is constantly decreasing. A universe running down must have started. Second, Big Bang cosmology: matter, space, and time came into existence together. Before the singularity, there was nothing of the universe. Notably, 99.9% of the National Academies of Science accept the universe's beginning as established fact.`,
      },
      {
        head: `DNA and the Teleological Argument`,
        body: `The teleological argument moves from design to a Designer. DNA is an information-bearing molecule with letters (nucleotide bases A, T, C, G), words (codons), and grammar — the full structure of language. Bill Gates wrote: "DNA is like a computer program but far, far more advanced than any software ever created." Every information-carrying system we have ever examined traces back to a mind. Non-intelligent causes cannot produce functional encoded information. The inference to an intelligent Designer follows the same logic we use in archaeology, forensics, and SETI.`,
      },
      {
        head: `The Moral Argument: Evil Proves God`,
        body: `If God does not exist, objective moral values don't exist either — morality collapses into preference or evolutionary instinct. But we don't react to child torture the way we react to an unfashionable haircut. Our moral outrage is not a mere discomfort; it reflects a genuine, objective wrongness. This moral law requires a transcendent Moral Lawgiver who embodies goodness and rightness. If the Nazis had won WWII, would that have made what they did right? Clearly not — there are laws above the laws of nations, and their source must transcend humanity.`,
      },
      {
        head: `God's Attributes from the Argument`,
        body: `The cosmological argument alone yields the following: the cause of the universe must be (1) immaterial — since matter began with the universe; (2) spaceless — since space began with the universe; (3) timeless — since time began with the universe; (4) all-powerful — to bring everything into existence from nothing; (5) infinitely intelligent — to produce the precision of the cosmos; (6) personal — since it chose to create (an impersonal force cannot choose). These six attributes are precisely the classical description of the God of the Bible.`,
      },
    ],
    insight: `These three arguments converge independently. Any one is enough to warrant serious investigation. Many Singaporeans accept evolution and the Big Bang — both are consistent with a Creator who used natural processes. The question isn't science vs God; it's whether anything exists beyond the physical.`,
    reflect: `Which of the three arguments — cosmological, moral, or teleological — do you find most compelling, and why?`,
    verses: ['Genesis 1:1', 'Psalm 19:1', 'Romans 1:20'],
    scripture: `"For since the creation of the world God's invisible qualities — his eternal power and divine nature — have been clearly seen." — Romans 1:20`,
    ref: 'Psalm 19:1',
  },
  {
    n: 4,
    title: 'If God Exists, Miracles Are Possible',
    short: 'Miracles Possible',
    phase: 2,
    highlight: ['science', 'bible'],
    highlightMsg: `Miracles aren't anti-science — they're only impossible if you've already ruled out God.`,
    highlightMsgs: {
      science: `Rejecting miracles because "science rules them out" assumes naturalism before you've examined the evidence. This point shows why that's circular.`,
      bible: `The reliability of the NT's miracle accounts depends on whether miracles are even possible. This point clears that hurdle first.`,
    },
    takeaway: `A God who created the universe can certainly act within it.`,
    claim: `A God who created natural law has the authority to act within and beyond it — to say otherwise is circular reasoning.`,
    sg: `Many educated Singaporeans reject miracles not on the basis of evidence but on a prior philosophical commitment to naturalism: the belief that nature is all there is. But that commitment is itself not scientifically proven — it is a worldview assumption. Once we acknowledge that God created the natural order, there is no logical reason he cannot act within it. Rejecting miracles because "they don't happen" is circular reasoning if God's existence has already been established.`,
    specialViz: null,
    geisler: [
      {
        head: `Miracles Are Not Violations of Nature`,
        body: `A miracle is not nature cancelling itself — it is a higher-order cause acting on nature. Just as a human hand moving a chess piece doesn't violate the laws of physics but introduces a new causal factor, God can introduce causes that transcend but do not annihilate the natural order.`,
      },
      {
        head: `Hume's Objection Fails`,
        body: `David Hume argued miracles are always less probable than testimony for them. But this assumes a closed natural system before the investigation begins. If God exists, the prior probability of miracles is not negligible — and the argument becomes question-begging.`,
      },
      {
        head: `Scientific Laws Describe, Not Prescribe`,
        body: `Natural laws describe how nature behaves when no outside agent intervenes. They do not forbid outside agents. A dead body rising is unusual — but unusual events require explanation, not dismissal.`,
      },
      {
        head: `Possibility vs. Actuality`,
        body: `This point only establishes that miracles are logically possible given God's existence. Whether any specific miracle actually occurred is an evidential question — to be answered in Point 6 onward. We must not confuse these questions.`,
      },
    ],
    deepDive: [
      {
        head: `Hume's Argument Examined`,
        body: `David Hume argued: (1) A miracle violates the laws of nature. (2) The laws of nature are established by "firm and unalterable human experience." (3) Therefore, a miracle is always less probable than the testimony for it. Both premises fail. Premise 1 misdefines miracles — theists don't believe miracles violate natural law, but that God (who sustains the natural order) acts in an extraordinary way. Premise 2 is circular — it assumes no miracles have occurred before the investigation even begins.`,
      },
      {
        head: `The Chandelier Illustration`,
        body: `Imagine a chandelier on a chain. What holds each link up? The link above it. What holds that one up? The link above that — and so on. At some point, the chain must be tethered to something solid, or the whole apparatus falls. An infinite regress of links is impossible. In the same way, every object in the universe receives its existence from another. We must eventually reach an unmoved foundation — a God who gives existence to everything else. Since God is upholding the universe moment by moment, a miracle is not a violation; it is simply God acting in an unusual way within his own creation.`,
      },
      {
        head: `Hume's Singularity Problem`,
        body: `Hume requires "firm and unalterable experience" before accepting any event. But the beginning of the universe and the origin of life are singular events — no human witnessed them repeatedly. If we applied Hume's standard consistently, we would have to deny the Big Bang and the emergence of life from chemistry, since no one has repeated those either. Hume's standard, applied uniformly, disproves standard science — which shows the standard is too strict.`,
      },
    ],
    insight: `Hume's objection to miracles only works if you assume no God exists — which is the very question under investigation. Singapore is scientifically literate, but science studies regular patterns. It cannot rule out singular historical events outside those patterns.`,
    reflect: `What would convince you that a miracle had occurred? Is your standard of evidence consistent with what you apply elsewhere?`,
    verses: ['Matthew 19:26', 'Job 42:2', 'Luke 1:37'],
    scripture: `"With man this is impossible, but with God all things are possible." — Matthew 19:26`,
    ref: 'Luke 1:37',
  },
  {
    n: 5,
    title: `Miracles Confirm God's Messengers`,
    short: 'Miracles Confirm',
    phase: 2,
    highlight: ['bible', 'jesus'],
    highlightMsg: `This is why Jesus's resurrection isn't just a religious claim — it's God's own seal of approval.`,
    highlightMsgs: {
      bible: `If miracles authenticate God's messengers, and Jesus rose from the dead, then what he endorsed — including every book of the Bible — carries divine authority.`,
      jesus: `The resurrection is the evidence. If it happened, it's God's own verdict that everything Jesus said is true. This is the hinge the whole argument turns on.`,
    },
    takeaway: `God would not use miracles to endorse a liar or a fraud.`,
    claim: `A miracle that confirms a message — spoken in God's name and fulfilled predictively — is God's signature on that message.`,
    sg: `In Singapore's context of religious pluralism, the question naturally arises: why trust Jesus over other religious founders? Geisler's answer is principled, not sectarian. Any teacher making claims about God who is confirmed by genuine miracles — especially a uniquely verifiable one like resurrection — has divine endorsement. Other religious founders' miracles are historically thin or unverifiable. The resurrection of Jesus is a singular, testable historical claim, supported by multiple independent lines of evidence.`,
    specialViz: '5es',
    geisler: [
      {
        head: `The Principle of Validation`,
        body: `If a being who created the universe wanted to confirm a special messenger, miraculous signs are the most credible means available. The logic runs: God would not perform miracles through a charlatan — therefore miracles authenticate the messenger's claims.`,
      },
      {
        head: `The Test of Monotheism`,
        body: `A genuine divine messenger must teach truths consistent with who God is. Messages that contradict God's known character or his previous revelation fail the first filter before miracles are even examined.`,
      },
      {
        head: `Resurrection as Unique Confirmation`,
        body: `Resurrection from the dead is the ultimate miracle — reversing death itself. If Jesus rose, it is God's supreme sign that everything Jesus said and claimed is true. No other religious founder offers a verifiable, historically documented resurrection.`,
      },
      {
        head: `Demonic Counterfeits`,
        body: `Not all claimed miracles come from God. Geisler distinguishes: authentic miracles glorify God, align with Scripture, and confirm truth. Occult phenomena may appear miraculous but lead away from God. Discernment requires a principled framework — not blanket scepticism or blanket acceptance.`,
      },
    ],
    deepDive: [
      {
        head: `The Five Criteria for a Confirming Miracle`,
        body: `Five tests a miracle must pass to confirm a divine messenger: (1) It must be truly supernatural — not a psychosomatic cure or anomaly. (2) There must be multiple miracles — the legal principle of two or three witnesses. (3) The miracle must relate to a specific truth claim made in God's name. (4) The miracles must be unique — conflicting miracle claims from opposing religions cancel each other out. (5) A predictive element is helpful — prediction eliminates the charge that the event was a fluke rather than a genuine sign.`,
      },
      {
        head: `Jesus Explicitly Used Miracles as Evidence`,
        body: `When challenged to prove his authority to forgive sins, Jesus said: "That you may know that the Son of Man has authority on earth to forgive sins" — and healed the paralytic on the spot (Mark 2:10-11). The miracle was not incidental to his claim; it was the proof. Jesus consistently used miracles as evidence of the truth of his message, exactly as the criteria above require.`,
      },
    ],
    insight: `A miracle without a message is just magic. What makes biblical miracles significant is that they consistently confirm the identity and authority of the one performing them. The sign confirms the sermon; the act confirms the word.`,
    reflect: `If you witnessed something unexplainable, what would it take to convince you it was from God rather than coincidence?`,
    verses: ['1 Corinthians 15:14-17', 'Acts 2:22', 'Hebrews 2:3-4'],
    scripture: `"Jesus performed many other signs… but these are written that you may believe that Jesus is the Messiah." — John 20:30–31`,
    ref: '1 Corinthians 15:17',
  },
  {
    n: 6,
    title: 'The New Testament Is Historically Reliable',
    short: 'NT Reliable',
    phase: 3,
    highlight: ['bible', 'inherited'],
    highlightMsg: `The NT is more historically attested than any other ancient document — better than Caesar or Plato.`,
    highlightMsgs: {
      bible: `This point speaks directly to your doubt. The NT passes every test historians apply to ancient documents — manuscript count, eyewitness claims, external corroboration. It's not legend.`,
      jesus: `Before we evaluate what Jesus claimed, we need to know whether the documents reporting those claims can be trusted. This is that foundation.`,
      inherited: `Owning your faith means examining the evidence yourself. This is what the historical evidence for the NT actually looks like — not secondhand scepticism.`,
    },
    entryBanners: {
      bible: `You're starting here because you're not sure the Bible can be trusted. This section examines the New Testament the way historians examine any ancient source — manuscript evidence, eyewitness claims, external records. After working through to Point 12, you'll loop back to see the logical foundation that makes it all coherent.`,
    },
    takeaway: `The New Testament passes every test applied to ancient documents.`,
    claim: `The New Testament is the most historically reliable document of the ancient world — earlier, more numerous, and more accurately copied than any other text of its era.`,
    sg: `Many Singapore students encounter the claim that the Bible was "changed" or "made up" by the Church — an idea that has spread through popular fiction and online content. But this is historically uninformed. The New Testament documents were written within the lifetime of eyewitnesses (some within 20 years of the events), are preserved in over 5,700 Greek manuscripts, and are corroborated by Roman and Jewish historians who had no interest in promoting Christianity. No serious ancient historian dismisses Jesus's existence.`,
    specialViz: '5es',
    geisler: [
      {
        head: `Bibliographic Test`,
        body: `The NT is attested by 5,700+ Greek manuscripts, 10,000+ Latin manuscripts, and 9,000+ in other languages — a total manuscript tradition dwarfing any other ancient text. Homer's Iliad has ~1,900. Caesar's Gallic Wars has ~10. The gap between writing and earliest copies is also far shorter for the NT than for any comparable ancient document.`,
      },
      {
        head: `Internal Evidence Test`,
        body: `The authors claim eyewitness status (Luke 1:1-4, 2 Peter 1:16, 1 John 1:1-3). They include embarrassing details (Peter's denial, disciples' doubting, women as first witnesses in a culture that discredited women's testimony) — the hallmark of honest testimony, not legend.`,
      },
      {
        head: `External Evidence Test`,
        body: `Roman historian Tacitus (AD 116) records Christ's execution under Pilate. Jewish historian Josephus (AD 93) references Jesus and his brother James. Pliny the Younger (AD 112) describes early Christians worshipping Christ as God — written when eyewitnesses were still alive.`,
      },
      {
        head: `Early Dating`,
        body: `Paul's letters date to the 50s AD — within 20 years of the crucifixion. The early creed in 1 Corinthians 15:3-7 is dated by scholars (including sceptics) to within months or years of the resurrection itself, when eyewitnesses could have easily refuted fabrications.`,
      },
    ],
    deepDive: [
      {
        head: `The Manuscript Table`,
        body: `No ancient document comes close to the NT's textual pedigree. Thucydides' History: 96 copies, 200-year gap. Herodotus: 109 copies, 500-year gap. Aristotle: 49 copies, 1,400-year gap. Homer's Iliad: 1,797 copies, 300-year gap. The New Testament: 23,986 manuscript copies, 30–50 year gap to earliest fragment. The John Rylands Papyrus (a fragment of John's Gospel) dates to approximately AD 120 — fewer than 40 years after the Gospel was first written.`,
      },
      {
        head: `Variants Don't Undermine the Text`,
        body: `Critics cite millions of "variants" among NT manuscripts — but the numbers are misleading. A variant is any difference between copies, including spelling. If one word differs in an older text and that difference is copied 1,000 times, that counts as 1,000 variants. When scholars compare older manuscripts to newer ones, they can identify and correct copyist drift. Greek scholar D.A. Carson concluded: "The purity of text is of such a substantial nature that nothing we believe to be true, and nothing we are commanded to do, is in any way jeopardized by the variants."`,
      },
      {
        head: `Even Sceptics Agree on the Core`,
        body: `NT textual scholar and noted sceptic Bart Ehrman (whose book Misquoting Jesus raised doubts about the NT text) admitted in an interview with Bruce Metzger: "We are in complete agreement on a number of very important historical and textual questions... The position I argue for in Misquoting Jesus does not actually stand at odds with Prof. Metzger's position that the essential Christian beliefs are not affected by textual variants in the manuscript tradition of the New Testament."`,
      },
      {
        head: `Reconstructed from the Church Fathers Alone`,
        body: `Early Christian writers quoted the NT so extensively that scholars have calculated we have at least 75% of the four Gospels and Paul's letters copied word-for-word in letters written before AD 325. By AD 350, the entire NT can be reconstructed from these quotations alone. As Metzger concluded: "If all other sources for our knowledge of the text of the NT were destroyed, [the patristic quotations] would be sufficient alone for the reconstruction of practically the entire New Testament."`,
      },
    ],
    insight: `If you accept the historicity of Caesar or Socrates — based on far weaker manuscript evidence — intellectual consistency requires taking the NT seriously. Singaporeans trust data. The NT holds up under the same forensic standards applied to any ancient document — and outperforms them all.`,
    reflect: `What standard of evidence would you need to trust a historical claim? Apply that same standard consistently to the New Testament.`,
    verses: ['Luke 1:1-4', '2 Peter 1:16', '1 John 1:1-3'],
    scripture: `"We did not follow cleverly devised stories when we told you about the coming of Jesus Christ — we were eyewitnesses." — 2 Peter 1:16`,
    ref: '2 Peter 1:16',
  },
  {
    n: 7,
    title: 'Jesus Claimed to Be God',
    short: `Jesus's Claim`,
    phase: 3,
    highlight: ['jesus', 'defense'],
    highlightMsg: `The "Jesus was just a good teacher" position is precisely what his own words make impossible.`,
    highlightMsgs: {
      jesus: `This is where your question gets answered directly. Jesus didn't leave room for "great teacher" — the words are too extreme. You have to decide what to do with them.`,
      defense: `This is the Liar, Lunatic, or Lord argument. It's one of the most effective tools for cutting through the vague "Jesus was a good person" deflection.`,
      bible: `The claims recorded in the NT aren't incidental — they're the whole point. Jesus claimed things no mere teacher would dare claim. The documents are reporting, not inventing.`,
    },
    entryBanners: {
      jesus: `You're starting here because you're unsure about Jesus. We'll examine what he actually claimed, why "good teacher" doesn't hold up, and what the evidence for the resurrection looks like. After Point 12, you'll loop back to the foundations — why God's existence makes the resurrection coherent.`,
    },
    takeaway: `Jesus left no room for the "just a great moral teacher" option.`,
    claim: `Jesus made the most extraordinary identity claim in history — explicitly, repeatedly, and in terms His audience understood as divine.`,
    sg: `Many Singaporeans — influenced by a pluralistic culture — prefer to see Jesus as one of many great religious teachers. This is a comfortable but historically untenable position. Jesus made claims no mere teacher would make: he forgave sins (a divine prerogative), accepted worship, identified himself with YHWH ("Before Abraham was, I AM"), and told his disciples that seeing him was seeing the Father. These are not the statements of a humble moral guide — they are the claims of someone who believed he was God in human form.`,
    specialViz: 'trilemma',
    geisler: [
      {
        head: `Direct Claims`,
        body: `"I and the Father are one" (John 10:30). "Before Abraham was, I AM" (John 8:58 — using YHWH's name). "Anyone who has seen me has seen the Father" (John 14:9). "I am the way, the truth, and the life — no one comes to the Father except through me" (John 14:6). The Jewish leaders understood these claims perfectly — they tried to stone him for blasphemy.`,
      },
      {
        head: `Implicit Claims`,
        body: `Jesus forgave sins directly — something only God can do (Mark 2:5-7). He accepted worship without rebuke (Matthew 28:17). He placed his own words on par with — even above — the law of Moses ("You have heard it said but I say to you"). He claimed authority over the Sabbath, death, and judgment.`,
      },
      {
        head: `The Trilemma`,
        body: `C.S. Lewis made this argument famous: a man who says what Jesus said is either Lord (he is who he says), or Liar (he knew it was false), or Lunatic (he believed it but was self-deceived). A "great moral teacher who didn't claim to be God" is not one of the options — the texts don't allow it.`,
      },
      {
        head: `The Reaction of Contemporaries`,
        body: `The Jewish religious establishment did not oppose Jesus because he was a pleasant moral philosopher. They crucified him for blasphemy — specifically for claiming to be the Son of God (Mark 14:61-64). Their reaction confirms that they heard his claims exactly as they were intended.`,
      },
    ],
    deepDive: [
      {
        head: `The "I AM" Statement and Exodus 3`,
        body: `In Exodus 3:14, God reveals his name to Moses as "I AM THAT I AM" — meaning God alone is self-existent, the one whose nature is simply to be. In the Greek Septuagint (the OT translation used in Jesus's day), this is "Ègó Èimi" — "I Am." When Jesus said "Before Abraham was, I Am" (John 8:58), he was not making a grammatical error; he was using God's own divine name. The crowd understood perfectly — they immediately picked up stones for blasphemy.`,
      },
      {
        head: `Old Testament Attributes Applied to Jesus`,
        body: `The NT systematically applies divine titles to Jesus that the OT reserves exclusively for YHWH. Isaiah 44:6: "I am the first and I am the last; besides me there is no god" — yet Revelation 22:13 has Jesus saying "I am the Alpha and the Omega, the first and the last." Isaiah 44:24: God alone "stretched out the heavens" — yet Colossians 1:16 says all things were created by and for Jesus. Since the Bible affirms one God more than thirty times, the only conclusion is that Jesus claims to be that one God.`,
      },
      {
        head: `The Earliest Christians Understood This`,
        body: `The earliest non-Christian historical record confirms Jesus was worshipped as God from the very beginning. Around AD 112, Pliny the Younger, Roman governor of Bithynia, wrote to Emperor Trajan that Christians gathered to sing hymns to Christ "as if to a god." Ignatius, Bishop of Antioch, martyred around AD 107–110, called Jesus "the mind of the Father" and "our God." This is not a later theological development — it is the original, unrevised position of those who knew the eyewitnesses.`,
      },
    ],
    insight: `"Jesus was just a great moral teacher" is the one option not available. Great moral teachers don't claim to be God. Many Singaporeans respect Jesus alongside Buddha and Confucius — but none of those figures made this claim. Jesus's identity is in a category of its own.`,
    reflect: `Which of the trilemma options — liar, lunatic, or Lord — do you find hardest to dismiss, and why?`,
    verses: ['John 10:30', 'John 8:58', 'Mark 14:61-64', 'John 14:6'],
    scripture: `"Before Abraham was born, I am!" — John 8:58`,
    ref: 'John 10:30',
  },
  {
    n: 8,
    title: `Jesus's Claim Was Confirmed by Miracles`,
    short: 'Claim Confirmed',
    phase: 3,
    highlight: ['jesus', 'science'],
    highlightMsg: `The resurrection isn't just a doctrine — it's a historical event with multiple, independent lines of evidence.`,
    highlightMsgs: {
      jesus: `This is where faith meets history. The resurrection either happened or it didn't — and the evidence (empty tomb, 500+ witnesses, hostile converts) demands a verdict.`,
      science: `Approach this as a historian would: what is the best explanation for the empty tomb, the appearances, and the explosive growth of the church in Jerusalem weeks after the crucifixion?`,
    },
    takeaway: `The resurrection is the best-evidenced miracle in history.`,
    claim: `Jesus demonstrated His divine identity through fulfilled prophecy, a sinless life, miraculous works, and a resurrection no naturalistic explanation adequately accounts for.`,
    sg: `In Singapore, where pragmatism rules, the resurrection is often dismissed as too fantastic to investigate. But consider: what if the question isn't "can dead men rise?" but "did this particular man rise?" The evidence for the resurrection — empty tomb, post-death appearances to hundreds of witnesses, the conversion of Paul and James, the explosion of the early church among hostile eyewitnesses — demands a historical explanation. The resurrection is not a feeling or a metaphor. It is a proposed historical fact.`,
    specialViz: null,
    geisler: [
      {
        head: `The Empty Tomb`,
        body: `All four Gospels record the tomb was empty on Sunday morning. The Jewish authorities never produced the body to squash the growing resurrection movement — they couldn't. They claimed the disciples stole it, which is an admission that the tomb was empty.`,
      },
      {
        head: `Post-Resurrection Appearances`,
        body: `Paul records in 1 Corinthians 15 (written c. AD 55) that Jesus appeared to Peter, the Twelve, 500+ people at once, James, and to Paul himself. This creed predates Paul's letter by 15-20 years — placing it within a few years of the crucifixion, when appearances could be verified or falsified by living witnesses.`,
      },
      {
        head: `Conversion of Hostile Witnesses`,
        body: `James, the brother of Jesus, was a sceptic during Jesus's ministry (John 7:5). Paul actively persecuted Christians. Both became leaders of the early church, and both died for this belief. People die for what they believe to be true — but rarely for what they know to be a lie.`,
      },
      {
        head: `The Origin of the Christian Church`,
        body: `The church exploded in Jerusalem — the very city where the crucifixion occurred — within weeks of Jesus's death. This is the worst possible environment for a legend to take root. Every convert could have walked to the tomb. Hostile witnesses had every motive to expose a fraud.`,
      },
    ],
    deepDive: [
      {
        head: `Five Lines of Historical Evidence`,
        body: `Five independent evidential lines support the resurrection: (1) Jesus predicted his resurrection and cited it as proof of his mission (Matthew 12:40; 17:22-23). (2) Jesus really died — the Romans were experts at execution, the penalty for guards letting a prisoner survive was death, and a 1986 study in the Journal of the American Medical Association confirmed death by crucifixion from the medical evidence in John 19:34. (3) The tomb was found empty — the authorities who wanted to suppress the movement never produced the body. (4) Post-resurrection appearances to named individuals, groups of 500, and at multiple locations. (5) The explosive origin of the church in Jerusalem — the worst possible city for a legend, where hostile witnesses could walk to the tomb.`,
      },
      {
        head: `The Watergate Comparison`,
        body: `The conspiracy behind the Watergate scandal (1972 USA) fell apart after only a few weeks under the threat of prison — and it involved men who knew the truth. The apostles maintained their resurrection testimony under decades of persecution, torture, and execution. People will suffer and even die for what they believe to be true. There are no documented examples of people dying for what they know is false. The apostles' behaviour is explicable only if they genuinely believed they had seen the risen Jesus.`,
      },
      {
        head: `The Two Hostile Witnesses`,
        body: `James (Jesus's brother) was a known sceptic during Jesus's life (John 7:5). Paul actively persecuted Christians, seeing the movement as a dangerous cult. Both had every reason to remain opponents. Both became leaders of the early church, and both were eventually executed for refusing to recant their testimony of encountering the risen Jesus. Critics suggest the original apostles had psychological expectations of seeing Jesus — but that argument cannot explain James and Paul, who had no such expectation and every motive to stay hostile.`,
      },
    ],
    insight: `The resurrection is the central, falsifiable claim of Christianity. Paul says: "If Christ has not been raised, your faith is futile." Singapore is results-oriented — the resurrection is the ultimate result: publicly made, immediately contested, never successfully refuted in a city where the tomb was ten minutes away.`,
    reflect: `What would be the most satisfying natural explanation for the empty tomb — and does it actually hold up under scrutiny?`,
    verses: ['1 Corinthians 15:3-8', 'Acts 1:3', 'Romans 1:4'],
    scripture: `"Christ died for our sins… he was buried… he was raised on the third day according to the Scriptures." — 1 Corinthians 15:3–4`,
    ref: 'Romans 1:4',
  },
  {
    n: 9,
    title: 'Therefore, Jesus Is God',
    short: 'Jesus Is God',
    phase: 3,
    highlight: ['jesus', 'inherited'],
    highlightMsg: `This isn't blind faith — it's the logical conclusion of everything the evidence has established so far.`,
    highlightMsgs: {
      jesus: `You've seen the claim and the evidence. This point draws the only logical conclusion: if God raised Jesus, God has verified who Jesus is.`,
      inherited: `This is where inherited belief becomes owned conviction — not because you were told, but because the evidence points here.`,
    },
    takeaway: `The argument is complete: God confirmed Jesus's identity through resurrection.`,
    claim: `The evidence converges: truth is knowable, God exists, miracles are possible, the NT is reliable, Jesus claimed to be God, the evidence confirms it. The conclusion follows necessarily.`,
    sg: `In Singapore, many people say they respect Jesus but cannot accept his divinity. But the argument now reaches its conclusion: we have established that God exists, that miracles are possible, that a reliable historical document records Jesus's divine claims, and that God confirmed those claims through the miracle of resurrection. The only intellectually consistent response is to accept what Jesus said about himself. Anything less is selective scepticism — accepting the evidence that is convenient and rejecting what demands a response.`,
    specialViz: 'attributes',
    geisler: [
      {
        head: `The Argument's Logical Force`,
        body: `The syllogism is airtight: (1) A miracle-working God confirms his messengers. (2) Jesus performed miracles, including resurrection. (3) Therefore, God has confirmed Jesus. (4) Jesus claimed to be God. (5) Therefore, Jesus is God. Each premise has been established in prior points.`,
      },
      {
        head: `The Incarnation`,
        body: `Jesus is not a second God or a demigod — he is God taking on human nature. The Council of Chalcedon (AD 451) articulated what Scripture implies: one person, two natures — fully divine and fully human. This is the Christian doctrine of the Incarnation, not a later invention but the only coherent reading of the data.`,
      },
      {
        head: `No Competing Hypothesis`,
        body: `Alternative explanations — legend, hallucination, mass delusion, conspiracy — fail under scrutiny. The legend theory requires more time than the evidence allows. Hallucinations are private; 500+ people do not share the same hallucination. Conspiracy requires sustained martyrdom for a known lie. No competing theory accounts for all the evidence.`,
      },
      {
        head: `Personal Implications`,
        body: `If Jesus is God, then his words carry absolute authority, his death is atonement for real sin, and his resurrection offers real hope beyond death. These are not peripheral religious ideas — they reframe everything: identity, purpose, morality, eternity.`,
      },
    ],
    deepDive: [
      {
        head: `One Person, Two Natures`,
        body: `The Council of Chalcedon (AD 451) articulated what the NT implies: Jesus is one person with two complete natures — fully divine and fully human — without confusion, mixture, separation, or division. As God, Jesus performed miracles, raised the dead, and forgave sins. As man, he grew up (Luke 2:40), got tired (John 4:6), went hungry (Matthew 4:2), and wept (John 11:35). These are not contradictions — they are what the incarnation means: God did not stop being God, but added a human nature to his divine one.`,
      },
      {
        head: `The Honour Due to Jesus`,
        body: `Jesus said, "Whoever does not honor the Son does not honor the Father who sent him" (John 5:23). For a first-century Jewish man to claim he should receive the same honour as God Almighty was either the most outrageous blasphemy imaginable — or the plainest statement of identity. His opponents treated it as blasphemy. His disciples treated it as identity. The question is which response was correct.`,
      },
      {
        head: `The Logic Is Airtight`,
        body: `The syllogism that reaches this conclusion: (1) A miracle-working God confirms his messengers. (2) Jesus performed miracles, including resurrection. (3) Therefore, God confirmed Jesus. (4) Jesus claimed to be God. (5) Therefore, Jesus is God. Each premise was established independently in the prior points. If any premise is false, the argument fails — but each has been tested against the historical and philosophical evidence and holds.`,
      },
    ],
    insight: `Faith is not a leap in the dark — it is a step in the light, taken after the evidence has been examined. Singaporeans are trained to reach conclusions from evidence in science, law, and engineering. Apply that same framework here. What is your verdict?`,
    reflect: `Having followed the evidence this far, what is the single biggest thing still holding you back from accepting the verdict?`,
    verses: ['John 1:1', 'John 1:14', 'Colossians 2:9', 'Philippians 2:6-8'],
    scripture: `"For in Christ all the fullness of the Deity lives in bodily form."`,
    ref: 'Colossians 2:9',
  },
  {
    n: 10,
    title: 'Whatever Jesus Teaches Is True',
    short: `Jesus's Truth`,
    phase: 3,
    highlight: ['inherited', 'defense'],
    highlightMsg: `Once you accept that Jesus is God, his teachings become the most reliable source of truth available to humans.`,
    highlightMsgs: {
      inherited: `If Jesus is God, then every command, promise, and warning he made is the Creator speaking. That changes how you read the Gospels.`,
      defense: `This is a key step in the chain: Jesus is God → therefore his teachings are true → therefore what he says about the Bible carries divine weight.`,
    },
    takeaway: `God cannot lie — so whatever Jesus taught, we can trust completely.`,
    claim: `Whatever God teaches is true — and Jesus, being God, speaks with absolute authority. You cannot accept His identity and dismiss His teaching.`,
    sg: `Singaporeans are pragmatic — we want to know: what does this mean for how I live? If Jesus is God, his teachings carry a weight that no philosopher, scientist, or guru can match. He was not a brilliant human thinker speculating about the divine — he is the divine, speaking from first-hand knowledge. His statements about forgiveness, eternal life, the nature of sin, the existence of heaven and hell, and the path of salvation are not religious opinions. They are authoritative truth.`,
    specialViz: null,
    geisler: [
      {
        head: `The Nature of Divine Knowledge`,
        body: `God is omniscient by definition — he cannot be mistaken or deceived. Jesus, as God incarnate, spoke from perfect knowledge. When he said "I am the way, the truth, and the life — no one comes to the Father except through me" (John 14:6), this is not spiritual arrogance; it is a statement from the one who created the way.`,
      },
      {
        head: `God Cannot Lie`,
        body: `Scripture consistently affirms that God's character makes deception impossible (Titus 1:2, Numbers 23:19, Hebrews 6:18). If Jesus is God, he is not only all-knowing but perfectly truthful. His teachings do not merely have historical value — they have eternal authority.`,
      },
      {
        head: `Implications for Ethics`,
        body: `Jesus's ethical teaching is not one moral framework among many to be compared and blended. His commands — love your enemy, forgive infinitely, serve the least, deny yourself — carry the authority of the Creator. We can evaluate them, but ultimately we are answerable to them.`,
      },
      {
        head: `The Breadth of His Teaching`,
        body: `Jesus taught on prayer, fasting, wealth, marriage, forgiveness, judgement, eternal life, and the nature of God. If he is God, we have direct access to divine perspective on all of these — not through a prophet's filtered words, but through the Author of reality himself.`,
      },
    ],
    deepDive: [
      {
        head: `Why God Cannot Lie: The Perfection Argument`,
        body: `From classical theism: in order for a perfect being to change, it must either gain something it lacks or lose something it has. But God is perfect — there is nothing to add or subtract. Therefore God cannot change, and since lying or making errors would represent a change from perfection, God is incapable of lying. As Hebrews 6:18 states: "it is impossible for God to lie." This is not an external constraint on God but flows from the nature of what perfect being means.`,
      },
      {
        head: `Evil as Privation`,
        body: `The booklet's discussion of evil illuminates God's nature. Classical philosophy defines evil not as a substance but as a privation — something missing that should be there. A shirt gets a tear: the extra hole is not a new substance, it's a lack in something good. A lie is not a new kind of reality; it is an absence of truth-telling in a being that should tell the truth. God, being perfectly and infinitely good, has no privation — no lack, no distortion. Therefore he cannot be the author of deception.`,
      },
      {
        head: `The Bridge to Biblical Authority`,
        body: `This point is the crucial bridge: since Jesus is God, and God cannot lie or be mistaken, everything Jesus affirmed is reliable truth. This applies not only to his ethical teaching but to his statements about history, the afterlife, sin, salvation — and crucially, about the Bible. When Jesus said "Scripture cannot be broken," that is God speaking about his own Word. His endorsement carries infinite weight.`,
      },
    ],
    insight: `Many people want Jesus the moral teacher without Jesus the Lord. But Jesus didn't offer that option: "Why do you call me Lord, Lord, and not do what I say?" (Luke 6:46). His identity and His authority are inseparable.`,
    reflect: `Is there a teaching of Jesus that you find hard to accept? What would it mean to accept it anyway, if He is truly Lord?`,
    verses: ['John 14:6', 'Titus 1:2', 'John 17:17'],
    scripture: `"Sanctify them in the truth; your word is truth."`,
    ref: 'John 17:17',
  },
  {
    n: 11,
    title: "Jesus Affirmed the Bible as God's Word",
    short: 'Bible Affirmed',
    phase: 4,
    highlight: ['bible', 'inherited'],
    highlightMsg: `Jesus didn't just use the Bible — he staked his authority on it, and confirmed the entire OT and the coming NT.`,
    highlightMsgs: {
      bible: `If Jesus is who the evidence shows him to be, then his endorsement of Scripture settles the question. He didn't pick and choose — he treated every word as authoritative.`,
      inherited: `You may have grown up being told to trust the Bible. Here's the reason: Jesus trusted it completely, and Jesus is God. That's a different kind of authority.`,
    },
    takeaway: `Jesus quoted, fulfilled, and endorsed Scripture as the Word of God.`,
    claim: `Jesus treated the Old Testament as the Word of God — and His authority guarantees the New Testament through the apostles He commissioned.`,
    sg: `Some Singaporean Christians feel uncertain about the Bible — accepting Jesus personally but unsure whether the whole Bible can be trusted. But Jesus did not pick and choose from Scripture. He quoted it to resist temptation (Matthew 4), treated Old Testament narratives as historical fact (Adam, Noah, Lot, Jonah), said "Scripture cannot be broken" (John 10:35), and promised his disciples that the Holy Spirit would lead them into all truth — anticipating the New Testament (John 16:13). To trust Jesus but distrust the Bible is to ignore what Jesus himself taught.`,
    specialViz: null,
    geisler: [
      {
        head: `Jesus's View of the Old Testament`,
        body: `Jesus quoted the OT as authoritative in debates with opponents (Matthew 4:4, 7, 10), confirmed its historical accuracy (Matthew 12:40 — Jonah; Matthew 24:37-38 — Noah), said "Scripture cannot be broken" (John 10:35), and declared he came to fulfil it, not abolish it (Matthew 5:17).`,
      },
      {
        head: `Jesus Anticipates the New Testament`,
        body: `Before his death, Jesus promised the Holy Spirit would "bring to your remembrance all that I have said to you" (John 14:26) and "guide you into all the truth" (John 16:13). This is a direct authorization for apostolic teaching — the foundation of the NT documents.`,
      },
      {
        head: `Jesus's Use of Scripture`,
        body: `Jesus treated the Bible not as one source among many but as the definitive word of God. When challenged by Satan, he answered each temptation with Scripture alone — "It is written." For Jesus, "it is written" was the end of the argument.`,
      },
      {
        head: `Verbal Inspiration`,
        body: `Jesus's use of Scripture went to the level of individual words and even verb tenses. In Matthew 22:32, he builds an argument for resurrection on the present tense of "I AM the God of Abraham" — if God is (not was) their God, they must still exist. This level of precision implies confidence in the very words of Scripture.`,
      },
    ],
    deepDive: [
      {
        head: `Over Ninety Affirmations of the Old Testament`,
        body: `Jesus referenced the OT as authoritative in more than ninety passages. He used the phrase "it is written" as shorthand for "this is the word of God and therefore cannot contain errors" — drawing on this authority in debates with Satan (Matthew 4:4, 7, 10), with religious opponents (Matthew 22:32; John 10:34-35), and in his own teaching. In Matthew 5:18 he said "not the smallest letter, not the least stroke of a pen, will by any means disappear from the Law" — affirming both the extent and the precision of biblical inspiration.`,
      },
      {
        head: `Jesus Authorised the New Testament`,
        body: `Before his death, Jesus made a specific promise: "The Holy Spirit, whom the Father will send in my name, will teach you all things, and will remind you of everything I have said to you" (John 14:26). This was a direct authorisation for the apostolic writing that became the NT. Peter later recognised Paul's letters as Scripture (2 Peter 3:16). Paul stated "All Scripture is God-breathed" (2 Timothy 3:16). The NT authors were not writing independently — they were fulfilling a promise Jesus had made.`,
      },
      {
        head: `Jesus's Precision in Using Scripture`,
        body: `Jesus's use of the OT was not casual quotation — it was precise to the word level. In Matthew 22:32, he builds an entire argument for bodily resurrection on the present tense of one verb: God says "I AM the God of Abraham" — not "I WAS." If God uses present tense, Abraham must still exist, therefore resurrection is implied. This level of precision reflects confidence in the very words of Scripture, not just its general themes.`,
      },
    ],
    insight: `The authority of Scripture is derivative — it flows from the authority of Jesus. You don't trust the Bible because the church said so. You trust it because the One who rose from the dead endorsed it. In Singapore's legal system, a document's authority rests on who issued it. Scripture's authority rests on the highest authority that exists.`,
    reflect: `If Jesus endorsed Scripture as God's Word, does that change how you read it? What would it mean to treat it as He did?`,
    verses: ['Matthew 5:17-18', 'John 10:35', 'John 16:13', '2 Timothy 3:16'],
    scripture: `"Scripture cannot be broken."`,
    ref: 'John 10:35',
  },
  {
    n: 12,
    title: 'Therefore, the Bible Is the Word of God',
    short: 'Bible = Word',
    phase: 4,
    highlight: ['bible', 'defense', 'inherited'],
    highlightMsg: `The chain is complete — and it rests on logic and history, not circular reasoning.`,
    highlightMsgs: {
      bible: `This is the destination your doubt was pointing toward. The Bible's authority isn't circular — it's grounded in God's existence, verified miracles, and Jesus's personal endorsement.`,
      defense: `This is how you answer "the Bible is just a book written by men." The authority flows through a chain: God → Jesus → Jesus's endorsement of Scripture. Not circular.`,
      inherited: `You didn't inherit a fairy tale. You inherited a faith with a logical chain behind it — and now you've seen every link for yourself.`,
    },
    takeaway: `The Bible's authority rests on God's existence and Jesus's endorsement — not on itself.`,
    claim: `If the Bible is the Word of God, it is not one voice among many — it is the voice that defines all others, and everything opposed to it is false.`,
    sg: `This final point completes the chain that began with epistemology (Points 1-2), moved through cosmology (Points 3-5), established Christology (Points 6-9), and now arrives at bibliology (Points 10-12). The authority of the Bible is not circular ("the Bible is true because the Bible says so") — it is grounded in history and logic. We trust the Bible because we trust Jesus, and we trust Jesus because of a chain of historically verified evidence. For young Singaporean Christians, this foundation is transformative: faith is not a feeling or a tradition — it is a reasoned commitment to truth.`,
    specialViz: null,
    geisler: [
      {
        head: `The Chain Is Complete`,
        body: `Truth is knowable — God exists — Miracles are possible — Miracles authenticate messengers — The NT is reliable — Jesus claimed to be God — His resurrection confirms the claim — Jesus is God — His teachings are true — He endorsed Scripture — Therefore Scripture is the Word of God. Each link was evidenced independently.`,
      },
      {
        head: `Inspiration and Inerrancy`,
        body: `Geisler holds that inspiration means the Holy Spirit superintended the writing of Scripture so that the authors wrote exactly what God intended, in their own words and styles. Inerrancy means Scripture is without error in everything it affirms — including history and the things that matter for salvation.`,
      },
      {
        head: `The Sufficiency of Scripture`,
        body: `Everything necessary for salvation, for knowing God, and for living faithfully is contained in Scripture. This does not mean science, history, or experience are irrelevant — but Scripture is the final arbiter when they conflict with its affirmations.`,
      },
      {
        head: `A Living Word`,
        body: `The Bible is not merely a historical document but a living word (Hebrews 4:12) — God's ongoing address to every generation. The same Spirit who inspired it illuminates it for every reader. Reading it is not an academic exercise; it is an encounter with the living God.`,
      },
    ],
    deepDive: [
      {
        head: `Attitude vs. Truth: An Important Distinction`,
        body: `One common charge is that claiming one religion is right is arrogant. But arrogance is a criticism of a person's attitude, not of the truth of their belief. Someone can be very kind and still wrong. Someone can be very arrogant and still right. Whether the Bible is the word of God is a question about evidence and logic — not about the tone of the person making the claim. Truth does not become false because it is stated proudly, and it does not become true because it is stated humbly.`,
      },
      {
        head: `Faith and Reason Are Not Opposites`,
        body: `The booklet's opening definition is worth revisiting: belief is "the persuasion of the mind that a certain statement is true," and faith is "trust in what you believe to be true." Reason can challenge, supplement, or confirm faith — but when used well, reason is not faith's antonym. You cannot honestly believe something your mind has already rejected as certainly false. The twelve-point case is designed to give your mind reasons to believe — so that faith becomes a reasoned trust rather than a leap in the dark.`,
      },
      {
        head: `The Gospel: The Destination of the Argument`,
        body: `The logical chain leads to a personal conclusion. We are sinners — people who have fallen short of the standard set by a perfect God (Romans 3:23). We cannot reason our way to a right relationship with God; that path must be revealed. God revealed it in the Bible: Jesus, the God-man, came to pay the penalty for sin (Romans 5:6-11; 6:23), offering the only means of reconciliation (John 14:6). By trusting in Jesus, we are saved (Ephesians 2:8). The argument was never merely intellectual — it was always an invitation.`,
      },
    ],
    insight: `Norman Geisler said: "The goal of this quest is not just to believe, but to know — and to live for the One who is Truth." Singapore excels at acquiring knowledge. But this is the one credential that cannot be earned — only received. The Word calls you not to achieve, but to surrender.`,
    reflect: `Having reached the end of this quest, what is your next step? The quest was never just intellectual — it ends with a decision.`,
    verses: ['2 Timothy 3:16-17', 'Hebrews 4:12', '1 Peter 1:25'],
    scripture: `"All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness."`,
    ref: '2 Timothy 3:16',
  },
]

export const CELEBRATIONS: Celebration[] = [
  {
    session: 1,
    title: 'Truth Established',
    subtitle: 'Session 1 Complete — The Foundations of Truth',
    established: [
      'Truth about reality is knowable and objective',
      'Logic and non-contradiction are unavoidable foundations',
    ],
    nextTitle: 'Session 2 — God & Miracles',
    nextPoints: [
      'The universe demands a Creator',
      'Miracles are possible once God exists',
      "Miracles authenticate God's messengers",
      'The New Testament passes every historical test',
    ],
  },
  {
    session: 2,
    title: 'God & Miracles Confirmed',
    subtitle: 'Session 2 Complete — God, Miracles & the Case for Christ',
    established: [
      'A theistic God exists — eternal, personal, all-powerful',
      'Miracles are logically possible once God exists',
      "Miracles authenticate God's true messengers",
      "The New Testament is one of history's best-attested documents",
    ],
    nextTitle: 'Session 3 — Who Is Jesus?',
    nextPoints: [
      'Jesus explicitly claimed to be God',
      'His claim was confirmed by the resurrection',
      'The logical conclusion: Jesus IS God',
    ],
  },
  {
    session: 3,
    title: 'Jesus Is Lord',
    subtitle: 'Session 3 Complete — The Identity of Christ',
    established: [
      'Jesus explicitly claimed to be the divine Son of God',
      'The resurrection confirms his claim with historical evidence',
      'Jesus of Nazareth is God incarnate',
    ],
    nextTitle: "Session 4 — The Bible's Authority",
    nextPoints: [
      'Everything Jesus teaches is perfectly true',
      "Jesus personally endorsed the Bible as God's Word",
      'Therefore the Bible carries divine authority',
    ],
  },
]

export const PHASE_LABELS: Record<number, string> = {
  0: 'Truth',
  1: 'God',
  2: 'Miracles',
  3: 'Jesus',
  4: 'Bible',
}

export const PHASE_ACCENTS: Record<number, string> = {
  0: '#1877F2',
  1: '#8B5CF6',
  2: '#F59E0B',
  3: '#EF4444',
  4: '#10B981',
}

export const PHASE_DIMS: Record<number, string> = {
  0: '#E7F0FD',
  1: '#EDE9FE',
  2: '#FEF3C7',
  3: '#FEE2E2',
  4: '#D1FAE5',
}

export const SESSION_BREAK_INDICES = [1, 5, 8]

import type { PainPointId } from './types'

export const PAIN_POINT_ENTRY: Record<PainPointId, number> = {
  inherited: 0,
  defense:   0,
  science:   2,  // Point 3
  bible:     5,  // Point 6
  jesus:     6,  // Point 7
}

export const FOUNDATION_BRIDGE: Partial<Record<PainPointId, { title: string; body: string }>> = {
  bible: {
    title: 'Now for the Foundation',
    body: "You've seen the historical case for the New Testament and how Jesus personally staked his authority on Scripture. But why does any of this hold together? The next 5 points lay the logical bedrock — starting with whether truth itself is knowable, building up to the God whose existence makes Jesus's resurrection meaningful.",
  },
  jesus: {
    title: 'Now for the Foundation',
    body: "You've worked through what Jesus claimed and whether the evidence holds up. Now let's build the philosophical and scientific foundation underneath it — why God exists, why miracles are logically possible, and why the NT documents are trustworthy. These are the premises that make the resurrection argument even stronger.",
  },
  science: {
    title: 'Two More to Complete the Picture',
    body: "You've traced the case from God's existence all the way through to the Bible's authority. Two foundational points remain — the nature of truth and the laws of logic. These underpin everything you've just read, including science itself.",
  },
}
