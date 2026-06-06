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
      defense: `This is the tool that cuts through vague pluralism: Christianity and Islam cannot both be true about the resurrection. Words mean things.`,
      inherited: `Inheriting a faith doesn't mean it's false — but it does mean you should examine whether its claims hold up logically. Start here.`,
    },
    takeaway: `A God who both exists and doesn't exist is no God at all.`,
    claim: `Stage 1 established that truth exists and is knowable. Stage 2 asks the next question: can two contradictory things both be true at the same time? Most people today want to say yes — it feels open-minded, nuanced, kind. But if they are right, every argument, every investigation, every verdict becomes meaningless. This stage examines that claim honestly.`,
    sg: `Singapore's culture prizes harmony above confrontation — and that is genuinely a strength. But harmony between people is not the same as logical equivalence between ideas. Christianity, Islam, and atheism make mutually exclusive claims about the resurrection of Jesus. They cannot all be right simultaneously. Acknowledging this is not intolerance — it is intellectual honesty, and it is the only foundation for genuine dialogue. We can honour every person while still evaluating their claims.`,
    specialViz: null,
    geisler: [
      {
        head: `The Challenge: Why People Resist This`,
        body: `Most people today want to say that opposites can both be true. It sounds humble — "who am I to say what's right?" It sounds kind — "let's not judge other people's beliefs." It sounds sophisticated — "reality is complex, truth is nuanced." These are real instincts. But watch what happens when you press them. Ask someone who says "opposites can both be true" whether that statement itself is true — or whether its opposite (opposites cannot both be true) is equally valid. They cannot answer yes to both without defeating themselves. The appeal of contradiction turns out to be self-defeating at the first test.`,
      },
      {
        head: `The Law Defined — Not Western, Not Christian`,
        body: `The Law of Non-Contradiction states: a statement cannot be both true and false at the same time and in the same sense. A door is either open or closed — not both simultaneously. A person is either alive or dead. This is not a Western invention or a Christian bias — it is the universal precondition of all thought, language, and logic. Aristotle articulated it, but every culture that has ever reasoned has relied on it. Without it, no argument can be made, no experiment can be interpreted, and no sentence can carry meaning.`,
      },
      {
        head: `The Practical Test — They Can't Escape It`,
        body: `Here is Geisler's practical demonstration. Ask someone who denies this law: "Are you sure that's true?" Their answer — whether yes or no — invokes the very law they are denying. If they say yes, they are claiming the denial is true and its opposite (the law) is false — which uses the law. If they say no, they have admitted the law might hold. They cannot escape it in practice. A doctor cannot tell you a tumour is both benign and malignant. A judge cannot rule that a defendant is both guilty and not guilty. We do not accept contradiction in medicine or law — there is no reason to accept it in the most important question of all.`,
      },
      {
        head: `Paradox Is Not the Same as Contradiction`,
        body: `Many people respond: "But what about paradox? The Trinity? The two natures of Christ?" This is an important objection and deserves a real answer. A paradox is an apparent contradiction that can be resolved with proper distinctions. God is one in essence but three in persons — not one and three in the same sense simultaneously. Jesus is fully human and fully divine — two natures in one person, not one nature that is both human and non-human at once. Apparent contradiction resolved by careful definition is not genuine logical contradiction. The law of non-contradiction is not violated by paradox — it is what allows us to identify and resolve it.`,
      },
      {
        head: `Applied to Religion — Pluralism Fails Here`,
        body: `This is where the law does its most important work. Religious pluralism — the view that all religions are equally true — sounds tolerant and respectful. But apply the law and it collapses immediately. Christianity says Jesus rose bodily from the dead. Islam says Jesus did not die on the cross. Both are historical claims about the same event. They cannot both be true. Buddhism teaches that the self is an illusion. Christianity teaches that each person has an eternal soul. These are direct contradictions — not different emphases, not cultural variations, but mutually exclusive claims about reality. It is logically possible that all religions are partly wrong. It is logically impossible that all contradictory claims are simultaneously right. The question is not which religion feels most comfortable — it is which one corresponds to reality.`,
      },
    ],
    objections: [
      {
        head: `"You're being too black and white — reality is complex"`,
        body: `Complexity is real. Nuance is valuable. But complexity does not mean contradiction. A situation can be complex and still have a true answer. "Did Jesus rise from the dead?" is a complex historical question — but it has a yes or no answer. Acknowledging complexity does not mean abandoning the law of non-contradiction; it means applying it carefully.`,
      },
      {
        head: `"Different religions are just different paths up the same mountain"`,
        body: `This is a popular metaphor — but it only works if the religions actually agree on the destination. Christianity says the destination is a personal God who saves by grace through faith in Christ. Islam says salvation comes through submission and works. Buddhism says there is no personal God and the goal is the extinction of the self. These are not different paths to the same place — they are different maps pointing to different destinations. You cannot reconcile them without making one of them unrecognisable.`,
      },
    ],
    deepDive: [
      {
        head: `Avicenna's Challenge`,
        body: `The medieval philosopher Ibn Sina (Avicenna) offered a sharp rejoinder to those who deny the law of non-contradiction: "Anyone who denies the Law of Non-Contradiction should be beaten and burned until he admits that to be beaten is not the same as not to be beaten, and to be burned is not the same as not to be burned." The point is that even those who verbally deny the law rely on it in every experience — including the experience of pain.`,
      },
      {
        head: `Why Religious Pluralism Cannot Be Right`,
        body: `Religions disagree on the most fundamental questions: does a personal God exist, did Jesus rise from the dead, is salvation by grace or works, is there an afterlife, what is the nature of the self? These are not compatible differences of emphasis — they are direct contradictions. It is possible that all religions are wrong on some points. It is logically impossible that all contradictory claims are simultaneously right. Pluralism that ignores contradiction is not tolerance — it is intellectual evasion.`,
      },
      {
        head: `A Spectrum, Not an Absolute Dismissal`,
        body: `A nuanced point worth noting: religions can be evaluated on a spectrum — somewhat true, mostly true, or fully true. A religion is false only inasmuch as it contradicts what is actually true. This is not a claim that every tradition is worthless — it is a call to examine which tradition is most consistent with the evidence. The law of non-contradiction is not a sledgehammer; it is a scalpel.`,
      },
    ],
    insight: `The law of non-contradiction is not a weapon — it is a gift. It means that truth claims can be evaluated, that evidence matters, and that faith either stands or falls on something real. Without it, Christianity cannot be defended — but neither can any other worldview. It is the precondition of honest inquiry, and it is what makes this quest worth taking.`,
    reflect: `Think of a time you heard someone say "all religions are basically the same" or "that may be true for you." Apply the law of non-contradiction: can those statements survive their own test?`,
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
      science: `You're starting here because science and faith feel at odds. These arguments come straight from physics and cosmology — and they point somewhere surprising.`,
    },
    takeaway: `The universe had a beginning, it is fine-tuned for life, and moral law points beyond the physical — together these point to a God who is timeless, powerful, intelligent, personal, and morally perfect.`,
    claim: `Stage 1 established that truth exists and is knowable. Stage 2 established that contradictory claims cannot both be true. Now the biggest question of all: is there actually anyone behind it all? "Is there evidence that God is real?" is not a faith question — it is an evidence question. And evidence is exactly what we are going to examine.`,
    sg: `Many educated Singaporeans identify as "free thinkers" — a label that sounds open-minded but in practice often means closed to the idea of a Creator. The irony is that true open-mindedness means following evidence wherever it leads — even somewhere surprising. Evolution and the Big Bang are not threats to theism. A Creator who works through natural processes is entirely consistent with both. The question is not science vs God — it is whether anything exists beyond the physical. And the physical itself points beyond itself.`,
    specialViz: 'surge',
    geisler: [
      {
        head: `The Challenge: What Sceptics Say`,
        body: `The modern sceptic says: "Science explains everything." "The universe just exists — it doesn't need a cause." "God is a hypothesis we no longer need." These aren't stupid objections — they come from intelligent people. So let's follow the evidence honestly and see where it actually leads.`,
      },
      {
        head: `The Universe Had a Beginning — The Cosmological Argument`,
        body: `Everything that begins to exist has a cause. Nothing comes from nothing. Here is the crucial step: science has now confirmed that the universe itself began to exist. The Big Bang was not an explosion within existing space — it was the beginning of space, time, matter, and energy simultaneously. Before it, there was nothing of the universe. The Second Law of Thermodynamics confirms the same: a universe running down on usable energy must have started with a full tank. An eternal universe would have run out long ago. So the universe began — and that means it has a cause. That cause must be outside space, outside time, outside matter, and enormously powerful. Whatever caused the universe is not part of the universe. Science has pointed us to its own boundary — and beyond that boundary is something it cannot explain.`,
      },
      {
        head: `The Universe Is Fine-Tuned for Life — The Teleological Argument`,
        body: `It is not enough that the universe began. What is staggering is how it began. The physical constants of the universe — the strength of gravity, the mass of electrons, the rate of cosmic expansion — are set to a precision that defies coincidence. Change any one of them by a fraction of a percent and the universe produces no stars, no planets, no carbon, no life. Physicist Roger Penrose calculated the probability of the initial conditions of the universe occurring by chance at 1 in 10 to the power of 10 to the 123 — a number with more zeroes than there are atoms in the observable universe. We use the same design inference every day. When archaeologists find an arrowhead, they infer a maker — not because they saw it made, but because the specified complexity points to intelligence. DNA is an information-bearing molecule with a four-letter alphabet, words, grammar, and error-correction — more sophisticated than any software ever written. Every information-carrying system we have ever examined traces back to a mind. The universe is not just ordered — it is specified. And specified complexity points to a Specifier.`,
      },
      {
        head: `Moral Law Points Beyond the Physical — The Moral Argument`,
        body: `The first two arguments establish a powerful, intelligent cause. But they don't yet tell us if that cause is personal or moral. The moral argument bridges that gap. Here is the observation: we all behave as if some things are objectively wrong — not just unpopular, not just inconvenient, but genuinely wrong. The torture of children. The Holocaust. Slavery. We don't say these things are merely unfashionable. We say they are wrong — wrong in a way that holds even if the majority disagrees, even if the perpetrators escape punishment, even if no one ever finds out. If there is no God, objective morality has no foundation. Morality collapses into evolutionary preference or cultural consensus — which means if the Nazis had won, what they did would have been "right" by their society's standards. But that conclusion is unbearable — because we know it isn't true. The existence of objective moral law requires a transcendent Moral Lawgiver — a being who is the standard of goodness itself. That is a personal being. That is a moral being. And that is what every major theistic tradition calls God.`,
      },
      {
        head: `From First Cause to Theistic God`,
        body: `Now notice what the three arguments yield together. From the cosmological argument: the cause of the universe is timeless, spaceless, immaterial, and enormously powerful. From the teleological argument: the cause is intelligent — capable of producing specified complexity of incomprehensible precision. From the moral argument: the cause is personal and morally perfect — the transcendent standard of goodness. Put those together: timeless, spaceless, immaterial, all-powerful, intelligent, personal, and morally perfect. That is not a vague "higher power." That is not the impersonal force of deism. That is precisely what Christians, Jews, and Muslims have always meant by God — and it is where three independent lines of evidence converge.`,
      },
    ],
    objections: [
      {
        head: `"But who made God?" — The Objection Answered`,
        body: `There are only three possible explanations for why the universe exists: it caused itself, it has always existed, or it was caused by something outside itself. Self-caused is logically impossible — to cause yourself, you would have to exist before you existed. That is a flat contradiction. Nothing in logic or experience has ever caused itself. Eternally existing is scientifically impossible — the Big Bang, the Second Law of Thermodynamics, and the expansion of the universe from a singularity all confirm the universe had a beginning. Even Hawking and Penrose — no friends of theism — accepted this. An eternal universe contradicts the very science the sceptic relies on. What remains? An external cause — something outside space, time, matter, and energy. Sherlock Holmes put it perfectly: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth." A self-caused universe is impossible. An eternal universe is impossible. What remains — however improbable it may feel to the secular mind — is an external cause. And a cause that is timeless, spaceless, immaterial, and powerful enough to bring everything into existence from nothing is precisely what we mean by God. Asking "who made God?" misunderstands the argument. The cosmological argument states that everything which begins to exist has a cause — not everything. God, being eternal, never began. Applying causation to the very being defined as uncaused is like asking what is north of the North Pole.`,
      },
      {
        head: `"The universe just exists" — The Atheist's Same Problem`,
        body: `Many atheists argue the universe simply exists without a cause — it just is. But notice: this is doing precisely what they accuse the theist of doing with God — asserting something uncaused at the foundation of reality. Both positions require something uncaused. The real question is not whether something is uncaused, but what it is. Here the theist has a decisive advantage. The scientific evidence — the Big Bang, thermodynamics, the universe expanding from a singularity — shows the universe had a beginning. A universe that began cannot be the eternal, uncaused foundation it is claimed to be. An uncaused God existing outside time and space faces no such scientific contradiction. The sceptic's "brute fact" universe is undermined by the very science they rely on.`,
      },
    ],
    deepDive: [
      {
        head: `The Kalam: Scientific Support in Detail`,
        body: `The Kalam argument's second premise — "the universe had a beginning" — is backed by two lines of scientific evidence. First, the Second Law of Thermodynamics: in a closed system, usable energy is constantly decreasing. A universe running down must have started. Second, Big Bang cosmology: matter, space, and time came into existence together at the singularity. Before it, there was nothing of the universe. Notably, 99.9% of the scientific community accepts the universe's beginning as established fact.`,
      },
      {
        head: `DNA and the Teleological Argument`,
        body: `DNA is an information-bearing molecule with letters (nucleotide bases A, T, C, G), words (codons), and grammar — the full structure of language. Bill Gates wrote: "DNA is like a computer program but far, far more advanced than any software ever created." Every information-carrying system we have ever examined traces back to a mind. Non-intelligent causes cannot produce functional encoded information. The inference to an intelligent Designer follows the same logic used in archaeology, forensics, and SETI.`,
      },
      {
        head: `The Moral Argument: Evil Proves God`,
        body: `If God does not exist, objective moral values don't exist either — morality collapses into preference or evolutionary instinct. But we don't react to child torture the way we react to an unfashionable haircut. Our moral outrage reflects a genuine, objective wrongness. This moral law requires a transcendent Moral Lawgiver who embodies goodness and rightness. If the Nazis had won WWII, would that have made what they did right? Clearly not — there are laws above the laws of nations, and their source must transcend humanity.`,
      },
      {
        head: `God's Attributes from the Arguments`,
        body: `The cosmological argument alone yields: (1) immaterial — since matter began with the universe; (2) spaceless — since space began with the universe; (3) timeless — since time began with the universe; (4) all-powerful — to bring everything from nothing; (5) infinitely intelligent — to produce the precision of the cosmos; (6) personal — since it chose to create. An impersonal force cannot choose. These six attributes are precisely the classical description of the God of the Bible.`,
      },
    ],
    insight: `Each of the three arguments stands independently. Any one of them is enough to warrant serious investigation. But together they converge on the same conclusion from three different directions — physical, design-based, and moral. This is not blind faith. This is the inference to the best explanation — the same reasoning used in science, forensics, and every serious historical inquiry.`,
    reflect: `Which of the three arguments do you find most compelling — and which do you find hardest to dismiss? What would it take for you to follow the evidence wherever it leads?`,
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
    takeaway: `A God who created the universe can certainly act within it — and the objection that He cannot assumes the very thing it's trying to prove.`,
    claim: `Stage 3 established that God exists — an eternal, all-powerful, personal Creator. Now the sceptic shifts the goalposts: "Fine — but even if God exists, miracles are impossible. Science rules them out." This stage examines that claim honestly. Because if it is wrong — and it is — then the door to the most important events in history is wide open.`,
    sg: `Many educated Singaporeans reject miracles not on the basis of evidence but on a prior philosophical commitment to naturalism — the belief that nature is all there is. But naturalism is not a scientific conclusion. It is a worldview assumption that rules out the supernatural before the investigation begins. Once God's existence is established, rejecting miracles on the grounds that "they don't happen" is circular. It assumes the conclusion.`,
    specialViz: null,
    geisler: [
      {
        head: `The Challenge: Two Objections That Sound Compelling`,
        body: `The sceptic has two main objections to miracles. First: "Miracles violate natural law — and natural law is inviolable." Second: "Science has never observed a miracle, therefore miracles don't happen." Both objections sound reasonable. Both fail — and for the same underlying reason: they assume a closed natural system before the investigation begins. If God exists, the system is not closed. And we have already established that God exists.`,
      },
      {
        head: `The Chess Piece — Why Miracles Don't Violate Natural Law`,
        body: `Imagine a chess piece sitting on a board. Natural law accurately describes how that piece will behave — it will remain stationary unless a force acts on it. Now a hand reaches in and moves it. Has natural law been violated? No. The hand is simply a higher-order cause acting on the piece. The laws of physics still apply to every molecule of the piece — but an outside agent has introduced a new causal factor that those laws cannot account for on their own. God is the ultimate outside agent. He created the natural order and sustains it moment by moment. A miracle is not God cancelling nature — it is God, the Author of nature, acting in an extraordinary way within His own creation.`,
      },
      {
        head: `Natural Laws Describe — They Do Not Forbid`,
        body: `This is the key distinction. Natural laws are descriptive, not prescriptive. They describe what happens under normal conditions when no outside agent intervenes. They say nothing about what a Creator can or cannot do. To say "miracles can't happen because they contradict natural law" is like saying "a novelist can't kill a character because the character is alive on page one." The author operates at a different level from the story. So does God.`,
      },
      {
        head: `Hume's Objection — Circular from the Start`,
        body: `David Hume argued that miracles are always less probable than the testimony for them — because the laws of nature are established by firm and unalterable human experience. But look carefully at what Hume is doing. He is assuming a closed natural system — one in which no God can intervene — and then using that assumption to reject all evidence for miracles. This is circular reasoning. He has assumed the conclusion before examining the evidence. If God exists, the prior probability of miracles is not negligible at all. Hume's argument only works if you have already decided there is no God — which is the very question under investigation.`,
      },
      {
        head: `The First Hurdle Is Now Cleared`,
        body: `This stage has one goal: to establish that miracles are logically possible given God's existence. That goal is now achieved. Miracles are not violations of natural law — they are higher-order causes. Natural laws describe, they do not forbid. Hume's objection assumes what it is trying to prove. The door is now open. Whether specific miracles actually occurred — the resurrection, the signs of Jesus, the fulfilment of prophecy — is an evidential question. That question begins in Stage 5.`,
      },
    ],
    objections: [
      {
        head: `"Science has never observed a miracle — so they don't exist"`,
        body: `Science studies the regular, repeatable patterns of nature — that is exactly what it is designed to do. A singular, unrepeatable historical event is outside science's domain by definition — not because it didn't happen, but because science's methods require repeatability. We don't use the scientific method to determine whether the Battle of Waterloo happened, or whether Caesar crossed the Rubicon. We use historical investigation. Miracles are singular historical events, and they must be evaluated by the tools of history — eyewitness testimony, documentary evidence, and the elimination of alternative explanations.`,
      },
      {
        head: `"If miracles happened, they would break the laws of nature"`,
        body: `This objection confuses description with prescription. Natural laws do not govern what can happen — they describe what normally does happen in the absence of an outside agent. When a surgeon removes a tumour, the tumour does not "violate biology" by being removed. An outside agent — the surgeon — has intervened. God is the ultimate outside agent. He created the laws of nature. He is not subject to them. Saying God cannot perform miracles because they contradict natural law is like saying an author cannot rewrite a sentence because the words are already on the page.`,
      },
    ],
    deepDive: [
      {
        head: `Hume's Argument — The Full Examination`,
        body: `Hume's argument has two premises: (1) a miracle violates the laws of nature, and (2) the laws of nature are established by firm and unalterable human experience. Both premises fail. Premise 1 misdefines miracles — theists do not believe miracles violate natural law, but that God acts extraordinarily within His creation. Premise 2 is circular — it assumes no miracles have occurred before the investigation begins. Geisler's response: Hume's argument is only valid if naturalism is assumed. But naturalism is a philosophical position, not a scientific discovery.`,
      },
      {
        head: `The Chandelier Illustration`,
        body: `Imagine a chandelier on a chain. What holds each link up? The link above it. What holds that one up? The link above that. At some point, the chain must be tethered to something solid — or the whole apparatus falls. An infinite regress of links is impossible. In the same way, every object in the universe receives its existence from another. We must eventually reach an unmoved foundation — a God who gives existence to everything else. Since God is upholding the universe moment by moment, a miracle is not a violation. It is simply God acting in an unusual way within His own creation.`,
      },
      {
        head: `Hume's Singularity Problem`,
        body: `Hume requires "firm and unalterable experience" before accepting any event. But the beginning of the universe and the origin of life are singular events — no human witnessed them repeatedly. If we applied Hume's standard consistently, we would have to deny the Big Bang and the emergence of life from chemistry, since no one has repeated those either. Hume's standard, applied uniformly, disproves standard science. Which shows the standard is too strict — and should not be applied selectively to miracles.`,
      },
    ],
    insight: `The objection that miracles are impossible only works if you assume there is no God — which is the very question we have already answered. Stage 3 established that God exists. Stage 4 follows necessarily: a Creator who brought the universe into existence from nothing can certainly act within it. The question is no longer whether miracles can happen. The question is whether they did.`,
    reflect: `Have you ever rejected a miracle claim before examining the evidence — simply because you assumed it couldn't happen? What is the difference between scepticism and a closed mind?`,
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
    highlightMsg: `This is why Jesus's resurrection isn't just a religious claim — it's God's own seal of approval on everything Jesus said.`,
    highlightMsgs: {
      bible: `If miracles authenticate God's messengers, and Jesus rose from the dead, then what he endorsed — including every book of the Bible — carries divine authority.`,
      jesus: `The resurrection is the evidence. If it happened, it's God's own verdict that everything Jesus said is true. This is the hinge the whole argument turns on.`,
    },
    takeaway: `Not every claimed miracle is from God — but there is a principled framework to test them, and when applied to Jesus, the result is unambiguous.`,
    claim: `Stage 4 established that miracles are possible — a Creator God can certainly act within His creation. Stage 5 asks the next question: how do you know a miracle is actually from God? Couldn't it be coincidence? Couldn't it be fraud? Couldn't other religions make the same claim? These are fair questions — and they have a principled answer. God has given us a framework to test miracle claims. And when that framework is applied to Jesus, the result is unambiguous.`,
    sg: `In Singapore's pluralistic context, the natural objection is: why trust Jesus over other religious founders? Geisler's answer is principled, not sectarian — it applies the same framework to every claim. The honest answer is that other religious founders' miracles are historically thin, poorly attested, or unverifiable by any independent standard. The resurrection of Jesus is a singular, testable historical claim supported by multiple independent lines of evidence — eyewitness testimony, empty tomb, transformed disciples, and hostile confirmation. It stands in a category of its own.`,
    specialViz: null,
    geisler: [
      {
        head: `The Challenge: How Do You Know It's From God?`,
        body: `Stage 4 opened the door to miracles. Now the sceptic asks a sharper question: even if a miracle occurred, how do you know it came from God? Three objections arise naturally. First: "Maybe it was coincidence — unusual events happen." Second: "Maybe the person was a skilled deceiver — history is full of frauds." Third: "Other religions claim miracles too — why should Christianity's count for more?" All three objections are reasonable. All three can be answered with a principled framework for evaluating miracle claims.`,
      },
      {
        head: `The Royal Seal — A Framework for Validation`,
        body: `In the ancient world, a king's letter was authenticated by his royal seal — a mark that could not be forged, attached by the king himself, guaranteeing the letter's authority. Geisler's insight is that God uses miracles the same way. A miracle performed in God's name, confirming a specific truth claim, is God's royal seal on that messenger and that message. God would not attach His seal to a liar or a fraud. The logic is airtight: if God is all-knowing and perfectly good, He would not use His power to endorse false teaching. Therefore a genuinely divine miracle is a guarantee of the messenger's authority.`,
      },
      {
        head: `Three Tests for a Divine Miracle`,
        body: `Not every claimed miracle passes the test. Geisler identifies three essential criteria. First, it must be genuinely supernatural — not a psychosomatic cure, a coincidence, or a trick. It must be a clear suspension or transcendence of natural processes that no natural explanation adequately covers. Second, it must confirm a specific truth claim made in God's name — it cannot be random or disconnected from a message. The miracle must be the seal on a specific letter. Third, the message it confirms must be consistent with God's known character — morally pure, theologically coherent, pointing to the one true God. A miracle that endorses idolatry or immorality fails this test regardless of how impressive it appears.`,
      },
      {
        head: `Resurrection — The Ultimate Confirmation`,
        body: `If any miracle confirms a messenger, resurrection from the dead confirms absolutely. Death is the final boundary of human existence. To reverse it is to demonstrate authority over the most fundamental fact of nature. Geisler's point: resurrection is God's supreme signature — His most unambiguous possible endorsement of a messenger's identity and teaching. And here is the decisive historical fact: no other religious founder in history offers a verifiable, historically documented resurrection. Buddha died and was cremated. Muhammad died and was buried. Confucius died and was mourned. Jesus died — and three days later the tomb was empty, He appeared to over 500 witnesses, and His disciples went to their deaths proclaiming it.`,
      },
      {
        head: `Jesus Passes All Three Tests`,
        body: `Apply the framework to Jesus and the result is unambiguous. First, His miracles were genuinely supernatural — healing the blind, raising Lazarus, walking on water — performed publicly, before hostile witnesses, without any natural explanation offered even by His enemies. Second, His miracles confirmed specific truth claims made in God's name. When challenged on His authority to forgive sins, He healed a paralysed man on the spot and said: "That you may know that the Son of Man has authority on earth to forgive sins" (Mark 2:10). The miracle was the proof. Third, His message was morally perfect and theologically coherent — the Sermon on the Mount, the teaching on love, the fulfilment of every Old Testament prophecy. And above all, the resurrection stands as God's ultimate seal. Jesus passes every test. The framework was not designed for Him — but He satisfies it completely.`,
      },
    ],
    objections: [
      {
        head: `"Other religions have miracles too — why is Jesus special?"`,
        body: `The framework answers this directly: not all miracle claims are equal — they must be tested. Most miracle claims in other religious traditions are either legendary accretions added centuries after the founder's death, or they are unverifiable by any independent historical standard, or they fail the moral and theological consistency test. The resurrection of Jesus is unique: it is claimed by eyewitnesses, confirmed within years of the event, attested by hostile sources, and has never been successfully refuted in 2,000 years despite enormous motivation to do so.`,
      },
      {
        head: `"What about demonic counterfeits or deceptive signs?"`,
        body: `Geisler takes this seriously. Not every supernatural appearance is from God — the Bible itself warns of false signs and wonders (Matthew 24:24). The three-test framework is precisely what distinguishes authentic divine miracles from counterfeits. A counterfeit miracle will either fail the genuineness test (on investigation it has a natural explanation), fail the confirmation test (it is not attached to a specific truth claim in God's name), or fail the character test (it endorses teaching that contradicts God's known moral and theological character). The existence of counterfeits does not discredit authentic miracles — it makes the framework more necessary.`,
      },
    ],
    deepDive: [
      {
        head: `The Five Criteria in Full`,
        body: `Geisler's complete framework for evaluating miracle claims: (1) Truly supernatural — not a psychosomatic cure or anomaly. (2) Multiple witnesses — the legal principle of two or three witnesses applies. (3) Connected to a specific truth claim in God's name — the miracle is the seal on a particular message. (4) Unique — conflicting miracle claims from opposing religions must be examined by the same standard; they do not automatically cancel each other out. (5) Predictive element — prophecy fulfilled in advance eliminates the charge that the event was coincidence rather than a sign. Jesus satisfies all five.`,
      },
      {
        head: `Jesus Explicitly Used Miracles as Evidence`,
        body: `When challenged to prove His authority to forgive sins, Jesus said: "That you may know that the Son of Man has authority on earth to forgive sins" — and healed the paralytic on the spot (Mark 2:10-11). The miracle was not incidental to His claim. It was the proof. Jesus consistently used miracles as evidence of the truth of His message, exactly as the criteria require. He was not performing magic for spectacle — He was providing verifiable confirmation of His identity.`,
      },
      {
        head: `Why the Resurrection Is Historically Unique`,
        body: `The resurrection claim has features that distinguish it from all other religious miracle claims. It was made publicly and immediately — Paul's account in 1 Corinthians 15 was written within 20-25 years of the event, when hostile eyewitnesses were still alive. It named 500 witnesses who could be questioned. The tomb was in Jerusalem — the very city where Jesus was executed — and was never successfully shown to contain a body. Roman and Jewish sources confirm the empty tomb; they dispute only the explanation. This combination of immediacy, public attestation, hostile confirmation, and 2,000 years of failed refutation is without parallel in religious history.`,
      },
    ],
    insight: `A miracle without a message is just magic. What makes biblical miracles significant is that they are never random — they consistently confirm the identity and authority of the one performing them. The sign confirms the sermon. The act confirms the word. And the resurrection of Jesus is God's most unambiguous act in all of history — His royal seal on everything Jesus claimed to be.`,
    reflect: `Apply the three tests to the resurrection: was it genuinely supernatural, did it confirm a specific truth claim in God's name, and was the message morally and theologically consistent with God's character? What is your honest assessment?`,
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
    highlightMsg: `The NT is more historically attested than any other ancient document — better than Caesar, Homer, or Plato.`,
    highlightMsgs: {
      bible: `This point speaks directly to your doubt. The NT passes every test historians apply to ancient documents — manuscript count, eyewitness claims, external corroboration. It is not legend.`,
      jesus: `Before we evaluate what Jesus claimed, we need to know whether the documents reporting those claims can be trusted. This is that foundation.`,
      inherited: `Owning your faith means examining the evidence yourself. This is what the historical evidence for the NT actually looks like — not secondhand scepticism.`,
    },
    entryBanners: {
      bible: `You're starting here because you're not sure the Bible can be trusted. This section examines the New Testament the way historians examine any ancient source — manuscript evidence, eyewitness claims, external records. After working through to Stage 12, you'll see the logical foundation that makes it all coherent.`,
    },
    takeaway: `The documents reporting Jesus's resurrection were written when hostile eyewitnesses were still alive, survive in more manuscripts than any other ancient text, are corroborated by non-Christian sources, and include details no forger would invent.`,
    claim: `Stage 5 established that the resurrection is God's signature on Jesus's identity and message. But the sceptic now shifts: "How do we know the documents are reliable? Weren't they written centuries after Jesus? Changed by the Church? Full of contradictions?" These are exactly the right questions to ask — and they have answers that would satisfy any historian applying the same standards they apply to every other ancient document.`,
    sg: `A common claim in Singapore — spread through popular fiction and online content — is that "the Bible was changed" or "written centuries after Jesus." This is historically uninformed. The New Testament documents were written within the lifetime of eyewitnesses, some within 20 years of the events. They survive in more manuscripts than any other ancient document. And they are corroborated by Roman and Jewish historians who had no interest in promoting Christianity. No serious ancient historian disputes Jesus's existence — the debate is only about His identity.`,
    specialViz: '5es',
    geisler: [
      {
        head: `The Challenge: Three Common Objections`,
        body: `Three objections to NT reliability are heard most often. First: "It was written long after the events — legends had time to form." Second: "It was changed and corrupted over centuries of copying." Third: "There is no independent historical backing — it's just Christians writing about Christianity." All three are empirically testable. And all three fail when the evidence is examined.`,
      },
      {
        head: `Written Early — When Eyewitnesses Were Still Alive`,
        body: `This is the most powerful argument for NT reliability and it comes first. Paul's first letter to the Corinthians dates to approximately AD 55 — roughly 22 years after the crucifixion. Within it, Paul preserves a creed (1 Corinthians 15:3–7) that scholars across the spectrum — including noted sceptics — date to within 1 to 3 years of the resurrection itself. This creed names specific eyewitnesses, including 500 people who saw the risen Jesus, and states they were still alive and could be questioned. This is not legend. Legends require generations to form — centuries of unchecked retelling. The NT documents were written and circulating when hostile eyewitnesses were still alive in the very city where Jesus was executed. If the core claims were false, they could have been — and would have been — publicly refuted.`,
      },
      {
        head: `More Manuscripts Than Any Other Ancient Document`,
        body: `The second objection — that the text was corrupted through copying — collapses under the manuscript evidence. The NT survives in 5,700 Greek manuscripts, over 10,000 Latin manuscripts, and 9,000 in other languages — a total of nearly 25,000 manuscripts. No other ancient document comes close. Caesar's Gallic Wars survives in 10 manuscripts. Aristotle's works in 49. Homer's Iliad — the most attested secular ancient text — in 1,797. The sheer number of NT manuscripts means scholars can cross-reference them to identify and correct any copyist errors with high confidence. Greek scholar D.A. Carson concluded: "Nothing we believe to be true, and nothing we are commanded to do, is in any way jeopardised by the variants."`,
      },
      {
        head: `Internal Honesty — Details No Forger Would Invent`,
        body: `The third mark of reliable testimony is what scholars call the criterion of embarrassment — a document is more credible when it includes details that are damaging to its own cause. Forgers and legend-makers do not include self-damaging details. The NT is full of them. The first witnesses to the resurrection were women — in a first-century Jewish context where women's testimony was legally discredited. Peter, the leader of the church, is recorded denying Jesus three times. The disciples are portrayed as doubting, slow, and afraid. Thomas refuses to believe without physical proof. None of these details serve a propaganda purpose. They are the hallmark of honest testimony.`,
      },
      {
        head: `External Corroboration — Hostile Sources Confirm the Core`,
        body: `The NT is not simply Christians writing about Christianity. The core facts are confirmed by sources with every reason to deny them. Roman historian Tacitus (AD 116) records that Christ was executed under Pontius Pilate during the reign of Tiberius — precisely what the Gospels say. Jewish historian Josephus (AD 93) references Jesus and describes him as "a wise man" whose followers reported seeing him alive after his death. Pliny the Younger (AD 112), writing to Emperor Trajan, describes early Christians singing hymns to Christ "as to a god" — dated when many eyewitnesses were still living. These are not Christian sources. They are hostile or neutral observers confirming the historical framework.`,
      },
    ],
    objections: [
      {
        head: `"The Council of Nicaea changed the Bible in AD 325"`,
        body: `This is one of the most persistent historical myths — popularised by The Da Vinci Code — and it is simply false. The Council of Nicaea (AD 325) dealt with the theological question of Christ's divine nature — it did not compile, select, or alter the biblical texts. The canon of the NT was already well established by the second century, as evidenced by early church fathers quoting NT books as authoritative Scripture decades before Nicaea. The NT we have today is textually identical to manuscripts that predate the Council by centuries.`,
      },
      {
        head: `"The Gospels contradict each other — they can't all be true"`,
        body: `Apparent contradictions in the Gospels are consistently one of three things: differences in perspective (two witnesses describing the same event from different angles), differences in emphasis (each author selecting details relevant to his audience), or apparent discrepancies that resolve when the historical and cultural context is understood. Crucially, independent accounts that agree on every detail are actually more suspicious — not less — because they suggest coordination rather than independent testimony. The minor variations in the Gospels are a sign of authentic independent accounts, not fabrication.`,
      },
    ],
    deepDive: [
      {
        head: `The Manuscript Table — No Ancient Document Compares`,
        body: `The evidence in numbers: Thucydides' History survives in 96 copies with a 200-year gap between writing and earliest copy. Herodotus: 109 copies, 500-year gap. Aristotle: 49 copies, 1,400-year gap. Homer's Iliad: 1,797 copies, 300-year gap. The New Testament: nearly 25,000 manuscript copies, with a gap of 30–50 years to the earliest fragment. The John Rylands Papyrus — a fragment of John's Gospel — dates to approximately AD 120, fewer than 40 years after the Gospel was written. By any standard of ancient textual scholarship, the NT is in an entirely different class.`,
      },
      {
        head: `Reconstructed from the Church Fathers Alone`,
        body: `Early Christian writers quoted the NT so extensively that scholars have calculated we have at least 75% of the four Gospels and Paul's letters copied word-for-word in letters written before AD 325. By AD 350, the entire NT can be reconstructed from these quotations alone — even if every manuscript were destroyed. As Metzger concluded: "If all other sources for our knowledge of the text of the NT were destroyed, the patristic quotations would be sufficient alone for the reconstruction of practically the entire New Testament."`,
      },
      {
        head: `Even Sceptics Agree on the Core`,
        body: `NT textual scholar and noted sceptic Bart Ehrman — whose book Misquoting Jesus raised widespread doubts about the NT text — admitted in an interview with his own mentor Bruce Metzger: "We are in complete agreement on a number of very important historical and textual questions... The position I argue for in Misquoting Jesus does not actually stand at odds with Prof. Metzger's position that the essential Christian beliefs are not affected by textual variants." The sceptic's own expert witness concedes the text is reliable.`,
      },
      {
        head: `The 1 Corinthians 15 Creed — The Earliest Evidence`,
        body: `1 Corinthians 15:3–7 contains a formal creed — identifiable by its structure and language — that Paul explicitly says he "received" and "passed on." Most scholars, including sceptics like James Crossley and Gerd Lüdemann, date this creed to within 1 to 5 years of the crucifixion. It lists specific named witnesses: Peter, the Twelve, James, all the apostles, and 500 people at once. This is not a late legend. It is a datable, verifiable claim made when the witnesses were alive and could be cross-examined. Paul was essentially saying: "Don't take my word for it — go ask them."`,
      },
    ],
    insight: `If you accept the historicity of Caesar, Socrates, or Alexander the Great — based on far weaker manuscript evidence — intellectual consistency requires taking the NT seriously. The question is not whether the NT is reliable by ancient historical standards. It is. The question is whether you are willing to apply your standards consistently.`,
    reflect: `If the NT were a secular historical document about a Roman emperor — with the same manuscript evidence, the same early dating, the same external corroboration — would you accept it as historically reliable? What changes when it is about Jesus, and why?`,
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
