import type { Point, Celebration, PainPoint } from './types'

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 'inherited',
    icon: '🏛️',
    label: `I inherited this faith`,
    desc: `I grew up Christian but wonder if I actually believe it for myself.`,
    hint: `Your faith can move from borrowed to owned — built on reasons you've examined yourself.`,
  },
  {
    id: 'science',
    icon: '🔬',
    label: `Science seems to contradict faith`,
    desc: `Evolution, the Big Bang, neuroscience — it feels like Christianity can't keep up.`,
    hint: `Many of the best arguments for God come from science itself. You may be surprised.`,
  },
  {
    id: 'bible',
    icon: '📜',
    label: `I doubt the Bible's reliability`,
    desc: `How do we know it wasn't changed, fabricated, or just legend?`,
    hint: `The NT is among the best-attested ancient documents in history. Let's look at the evidence.`,
  },
  {
    id: 'jesus',
    icon: '✝️',
    label: `I'm not sure about Jesus`,
    desc: `Maybe he was a great teacher, but claiming to be God seems like a stretch.`,
    hint: `The evidence for the resurrection is stronger than most people realise. Let's examine it.`,
  },
  {
    id: 'defense',
    icon: '🛡️',
    label: `I want to defend my faith better`,
    desc: `Friends and colleagues challenge me and I don't know how to respond.`,
    hint: `Classical apologetics gives you a logical, step-by-step framework anyone can follow.`,
  },
]

export const POINTS: Point[] = [
  {
    n: 1,
    title: 'Truth About Reality Is Knowable',
    short: 'Truth',
    phase: 0,
    highlight: ['inherited', 'defense'],
    highlightMsg: `If you've been told faith is just personal opinion — this point shows why objective truth is unavoidable.`,
    takeaway: `Truth is not relative; denying it proves it.`,
    claim: `Objective truth about reality exists and is knowable by the human mind.`,
    sg: `In Singapore's multicultural climate, it's common to hear "all religions are equally true" or "truth is what works for you." But if everything is equally true, then the statement "all truths are relative" must itself be absolutely true — a self-defeating contradiction. Geisler's starting point isn't aggressive; it's the foundation that makes any conversation meaningful. Without it, you cannot even say that science is more reliable than astrology.`,
    specialViz: null,
    geisler: [
      {
        head: `The Law of Non-Contradiction`,
        body: `A statement cannot be both true and false at the same time and in the same sense. "God exists" and "God does not exist" cannot both be true simultaneously. This isn't a Western bias — it is a precondition of all rational thought.`,
      },
      {
        head: `Self-Defeating Relativism`,
        body: `Anyone who says "there is no absolute truth" is making an absolute truth claim. The statement refutes itself the moment it is uttered. This shows that even those who deny objective truth must rely on it to make their denial.`,
      },
      {
        head: `Agnosticism Also Collapses`,
        body: `To claim "we cannot know truth" is itself a knowledge claim. The agnostic who says nothing can be known is claiming to know something: that nothing can be known. The position is internally incoherent.`,
      },
      {
        head: `Truth Is Mind-Independent`,
        body: `The statement "the universe existed before humans did" was true before any human thought it. Truth corresponds to reality regardless of whether any individual believes it. This is the correspondence theory of truth that underpins science, law, and history.`,
      },
    ],
    insight: `Every serious conversation — about science, justice, religion, or relationships — assumes that at least some things are objectively true. Geisler's first point simply makes that assumption explicit and shows it cannot be rationally abandoned.`,
    reflect: `Have you ever found yourself saying "that may be true for you, but not for me"? What did you actually mean — and does it hold up under scrutiny?`,
    verses: ['John 8:32', 'John 14:6', 'John 18:37-38'],
    scripture: `"Then you will know the truth, and the truth will set you free."`,
    ref: 'John 8:32',
  },
  {
    n: 2,
    title: 'Opposites Cannot Both Be True',
    short: 'Logic',
    phase: 0,
    highlight: ['science', 'defense'],
    highlightMsg: `Science itself depends on this principle — without it, no experimental result could ever rule anything out.`,
    takeaway: `A God who both exists and doesn't exist is no God at all.`,
    claim: `The law of non-contradiction is the bedrock of all knowledge — including religious knowledge.`,
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
    insight: `This point protects the conversation from dissolving into comfortable vagueness. It insists that claims matter, words have meaning, and being kind does not require us to pretend contradictions don't exist.`,
    reflect: `Have you ever avoided a hard conversation about truth claims to keep the peace? What would it look like to engage honestly but gently?`,
    verses: ['Matthew 5:37', 'James 5:12', 'Revelation 3:15-16'],
    scripture: `"Let your yes be yes and your no be no."`,
    ref: 'Matthew 5:37',
  },
  {
    n: 3,
    title: 'The Theistic God Exists',
    short: 'God Exists',
    phase: 1,
    highlight: ['science', 'inherited'],
    highlightMsg: `The very existence of the universe — and its fine-tuning for life — points powerfully to a Creator.`,
    takeaway: `Something cannot come from nothing; the universe needs a Cause.`,
    claim: `An eternal, all-powerful, personal Creator necessarily exists as the explanation for the universe.`,
    sg: `In Singapore, atheism is intellectually fashionable among the educated, but it faces a devastating problem: where did everything come from? The Big Bang confirms the universe had a beginning — and whatever begins to exist has a cause. The cause of all space, time, matter, and energy must itself be outside space, time, matter, and energy: eternal, immaterial, unimaginably powerful, and personal (since it chose to create). This is precisely what Christians mean by God.`,
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
    insight: `The existence of God is not a leap of faith over the evidence — it is the most rational inference from the evidence. Science has not pushed God out; in many ways, modern cosmology and biology have only sharpened the argument for a Creator.`,
    reflect: `What would it mean for your daily life if you became fully convinced that a personal God created you and is aware of you right now?`,
    verses: ['Genesis 1:1', 'Psalm 19:1', 'Romans 1:20'],
    scripture: `"The heavens declare the glory of God; the skies proclaim the work of his hands."`,
    ref: 'Psalm 19:1',
  },
  {
    n: 4,
    title: 'If God Exists, Miracles Are Possible',
    short: 'Miracles Possible',
    phase: 1,
    highlight: ['science', 'bible'],
    highlightMsg: `Miracles aren't anti-science — they're only impossible if you've already ruled out God.`,
    takeaway: `A God who created the universe can certainly act within it.`,
    claim: `If an all-powerful Creator God exists, then supernatural intervention in the natural order is possible.`,
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
    insight: `Closing your mind to miracles before examining the evidence is not scepticism — it is dogmatism. True open-mindedness follows the evidence wherever it leads, even if it leads somewhere surprising.`,
    reflect: `Have you ever dismissed a miracle claim without examining it — simply because you assumed it couldn't happen? What would honest investigation look like?`,
    verses: ['Matthew 19:26', 'Job 42:2', 'Luke 1:37'],
    scripture: `"For nothing will be impossible with God."`,
    ref: 'Luke 1:37',
  },
  {
    n: 5,
    title: `Miracles Confirm God's Messengers`,
    short: 'Miracles Confirm',
    phase: 1,
    highlight: ['bible', 'jesus'],
    highlightMsg: `This is why Jesus's resurrection isn't just a religious claim — it's God's own seal of approval.`,
    takeaway: `God would not use miracles to endorse a liar or a fraud.`,
    claim: `God uses miracles to confirm the message of those he sends — and he would not authenticate false teachers.`,
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
    insight: `The resurrection is not just a claim to examine — it is the hinge on which everything turns. If it happened, Jesus's authority is divinely confirmed. If it didn't, Christianity falls. Paul admitted exactly this in 1 Corinthians 15.`,
    reflect: `If you were presented with strong evidence that Jesus rose from the dead, what would that mean for your life? Are you open to following the evidence?`,
    verses: ['1 Corinthians 15:14-17', 'Acts 2:22', 'Hebrews 2:3-4'],
    scripture: `"And if Christ has not been raised, your faith is futile; you are still in your sins."`,
    ref: '1 Corinthians 15:17',
  },
  {
    n: 6,
    title: 'The New Testament Is Historically Reliable',
    short: 'NT Reliable',
    phase: 2,
    highlight: ['bible', 'inherited'],
    highlightMsg: `The NT is more historically attested than any other ancient document — better than Caesar or Plato.`,
    takeaway: `The New Testament passes every test applied to ancient documents.`,
    claim: `The New Testament documents are historically reliable accounts of the life and teaching of Jesus.`,
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
    insight: `If you apply the same standards to the New Testament that historians apply to any ancient document, it passes with flying colours. The scepticism aimed at the NT is almost never applied consistently to other ancient texts we accept without question.`,
    reflect: `Have you examined the historical evidence for the New Testament, or have you dismissed it based on secondhand scepticism? What would it take to engage the evidence honestly?`,
    verses: ['Luke 1:1-4', '2 Peter 1:16', '1 John 1:1-3'],
    scripture: `"We did not follow cleverly devised stories when we told you about the coming of our Lord Jesus Christ in power, but we were eyewitnesses of his majesty."`,
    ref: '2 Peter 1:16',
  },
  {
    n: 7,
    title: 'Jesus Claimed to Be God',
    short: `Jesus's Claim`,
    phase: 2,
    highlight: ['jesus', 'defense'],
    highlightMsg: `The "Jesus was just a good teacher" position is precisely what his own words make impossible.`,
    takeaway: `Jesus left no room for the "just a great moral teacher" option.`,
    claim: `The New Testament clearly records that Jesus of Nazareth claimed to be the divine Son of God.`,
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
    insight: `Jesus did not give us the option of admiring him at a safe distance. His claims are all-or-nothing. The question he asked Peter — "Who do you say I am?" — is the same question he puts to every person in every generation.`,
    reflect: `"Who do you say Jesus is?" is not a question you can answer with "a great teacher." What is your honest answer to this question right now?`,
    verses: ['John 10:30', 'John 8:58', 'Mark 14:61-64', 'John 14:6'],
    scripture: `"I and the Father are one."`,
    ref: 'John 10:30',
  },
  {
    n: 8,
    title: `Jesus's Claim Was Confirmed by Miracles`,
    short: 'Claim Confirmed',
    phase: 2,
    highlight: ['jesus', 'science'],
    highlightMsg: `The resurrection isn't just a doctrine — it's a historical event with multiple, independent lines of evidence.`,
    takeaway: `The resurrection is the best-evidenced miracle in history.`,
    claim: `Jesus's divine claim was uniquely confirmed by his resurrection from the dead and other miraculous acts.`,
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
    insight: `The resurrection is either the greatest miracle in human history or the greatest conspiracy ever perpetrated — with no motive, no beneficiaries, and no recantations under torture. The evidence points unmistakably in one direction.`,
    reflect: `If you were a juror and had to rule on the resurrection based solely on the historical evidence, what would your verdict be? What evidence would change your mind?`,
    verses: ['1 Corinthians 15:3-8', 'Acts 1:3', 'Romans 1:4'],
    scripture: `"He was declared to be the Son of God in power by his resurrection from the dead."`,
    ref: 'Romans 1:4',
  },
  {
    n: 9,
    title: 'Therefore, Jesus Is God',
    short: 'Jesus Is God',
    phase: 2,
    highlight: ['jesus', 'inherited'],
    highlightMsg: `This isn't blind faith — it's the logical conclusion of everything the evidence has established so far.`,
    takeaway: `The argument is complete: God confirmed Jesus's identity through resurrection.`,
    claim: `The cumulative evidence leads to one unavoidable conclusion: Jesus of Nazareth is the incarnate God.`,
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
    insight: `This is the fulcrum of the entire argument. Everything before was building to this. Everything after flows from it. Jesus is not one religious option among many — he is the God of the universe, walking in human history.`,
    reflect: `Accepting that Jesus is God would change everything — your priorities, relationships, time, money. Is there something specific holding you back from that conclusion?`,
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
    takeaway: `God cannot lie — so whatever Jesus taught, we can trust completely.`,
    claim: `Because Jesus is God, everything he affirmed — including about the afterlife, sin, salvation, and Scripture — is true.`,
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
    insight: `Christianity is not primarily a religion of rules or rituals — it is a relationship with the God who spoke the universe into existence and then stepped into it to speak to us directly. Everything he said matters infinitely.`,
    reflect: `Which of Jesus's teachings do you find hardest to accept or obey? Is that resistance intellectual, emotional, or because it would cost you something?`,
    verses: ['John 14:6', 'Titus 1:2', 'John 17:17'],
    scripture: `"Sanctify them in the truth; your word is truth."`,
    ref: 'John 17:17',
  },
  {
    n: 11,
    title: "Jesus Affirmed the Bible as God's Word",
    short: 'Bible Affirmed',
    phase: 3,
    highlight: ['bible', 'inherited'],
    highlightMsg: `Jesus didn't just use the Bible — he staked his authority on it, and confirmed the entire OT and the coming NT.`,
    takeaway: `Jesus quoted, fulfilled, and endorsed Scripture as the Word of God.`,
    claim: `Jesus of Nazareth explicitly affirmed that the Old Testament is the authoritative Word of God and anticipated a New Testament.`,
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
    insight: `You cannot fully trust Jesus while dismissing the Bible he endorsed. Conversely, when you understand that the Bible carries the weight of Jesus's own authority — and that he is God — every page becomes a word from your Creator.`,
    reflect: `How do you currently relate to the Bible — as a religious document, a helpful guide, or the authoritative word of the God who made you? What would change if you treated it the way Jesus treated it?`,
    verses: ['Matthew 5:17-18', 'John 10:35', 'John 16:13', '2 Timothy 3:16'],
    scripture: `"Scripture cannot be broken."`,
    ref: 'John 10:35',
  },
  {
    n: 12,
    title: 'Therefore, the Bible Is the Word of God',
    short: 'Bible = Word',
    phase: 3,
    highlight: ['bible', 'defense', 'inherited'],
    highlightMsg: `The chain is complete — and it rests on logic and history, not circular reasoning.`,
    takeaway: `The Bible's authority rests on God's existence and Jesus's endorsement — not on itself.`,
    claim: `The Bible is the written Word of God — divinely inspired, fully authoritative, and completely trustworthy.`,
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
    insight: `You began this journey wondering whether faith could be reasoned. The answer is yes — not because faith and reason are the same thing, but because faith follows the evidence where it leads, and the evidence leads to a personal God who has spoken. That speech is the Bible. Read it as if the Author is watching — because he is.`,
    reflect: `Looking back at all twelve points, where do you stand? What has shifted in your thinking, and what will you do differently because of it?`,
    verses: ['2 Timothy 3:16-17', 'Hebrews 4:12', '1 Peter 1:25'],
    scripture: `"All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness."`,
    ref: '2 Timothy 3:16',
  },
]

export const CELEBRATIONS: Celebration[] = [
  {
    session: 1,
    title: 'Foundation Laid',
    subtitle: 'Session 1 Complete — The Tools of Truth',
    established: [
      'Truth about reality is knowable and objective',
      'Logic and non-contradiction are unavoidable foundations',
    ],
    nextTitle: 'Session 2 — Does God Exist?',
    nextPoints: [
      'The universe demands a Creator',
      "Miracles are possible if God exists",
      "Miracles can authenticate God's messengers",
      'The New Testament passes every historical test',
    ],
  },
  {
    session: 2,
    title: 'God Is Real',
    subtitle: 'Session 2 Complete — From Cosmos to Christ',
    established: [
      'A theistic God exists — eternal, personal, all-powerful',
      "Miracles are logically possible once God exists",
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
  0: 'Knowledge',
  1: 'Existence',
  2: 'Identity',
  3: 'Authority',
}

export const PHASE_ACCENTS: Record<number, string> = {
  0: '#1877F2',
  1: '#8B5CF6',
  2: '#EF4444',
  3: '#10B981',
}

export const PHASE_DIMS: Record<number, string> = {
  0: '#E7F0FD',
  1: '#EDE9FE',
  2: '#FEE2E2',
  3: '#D1FAE5',
}

export const SESSION_BREAK_INDICES = [1, 5, 8]
