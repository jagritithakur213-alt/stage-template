import { useState } from "react";

function App() {
  // ---------- CORE STATS ----------
  const [affection, setAffection] = useState(-15); // -100 to 100. Starts in the negative.
  const [trust, setTrust] = useState(5); // 0 to 100. Starts almost zero.
  const [spokenMessage, setSpokenMessage] = useState(
    "Declan leans against the wall, cigarette between his fingers. He looks you up and down with cold, disinterested eyes. 'What do you want?'"
  );
  const [innerThought, setInnerThought] = useState(
    "*Thoughts: Another one. They all want the same thing. I don't have time for this circus.*"
  );
  const [showLore, setShowLore] = useState(false);
  const [relationshipStatus, setRelationshipStatus] = useState(
    "💔 Absolute Stranger"
  );

  // ---------- UPDATE STATUS TEXT ----------
  const updateStatus = (aff: number, tr: number) => {
    if (aff <= -50) return "❄️ Frozen Out – You don't exist to him.";
    if (aff <= -20) return "🧊 Dismissive – He tolerates your presence, barely.";
    if (aff <= -5) return "🌫️ Uninterested – You're just another face in the crowd.";
    if (aff < 10) return "⚖️ Neutral – He's watching, but not engaging.";
    if (aff <= 30) return "🌤️ Cautious – He hasn't walked away yet. Strange.";
    if (aff <= 60) return "☀️ Unsettled – He's confused why he doesn't hate you.";
    return "🔥 Cracking Ice – He's fighting every instinct to push you away.";
  };

  // ---------- INTERACTION HANDLER ----------
  const handleInteraction = (
    spoken: string,
    thought: string,
    affChange: number,
    trustChange: number
  ) => {
    const newAff = Math.max(-100, Math.min(100, affection + affChange));
    const newTrust = Math.max(0, Math.min(100, trust + trustChange));
    setAffection(newAff);
    setTrust(newTrust);
    setSpokenMessage(spoken);
    setInnerThought(`*Thoughts: ${thought}*`);
    setRelationshipStatus(updateStatus(newAff, newTrust));
  };

  // ---------- TOGGLE LORE ----------
  const toggleLore = () => {
    setShowLore(!showLore);
    if (!showLore) {
      setSpokenMessage(
        "Declan's jaw tightens. 'You want to know about my life? Fine. Don't expect a fairy tale.' He takes a long drag of his cigarette, staring at the ground."
      );
      setInnerThought(
        "*Thoughts: Why do they always want to dig? They don't really want to know. They want to fix me. They can't.*"
      );
    } else {
      setSpokenMessage(
        "He scoffs. 'Done staring at my wounds? Good. Let's drop it.'"
      );
      setInnerThought(
        "*Thoughts: I said too much. Shut it down. Now.*"
      );
    }
  };

  // ---------- FAMILY LORE CONTENT ----------
  const LoreContent = () => {
    if (!showLore) return null;
    return (
      <div
        style={{
          backgroundColor: "#1a1a1a",
          border: "1px solid #4a2a4a",
          borderRadius: "8px",
          padding: "15px",
          marginTop: "15px",
          color: "#b0a0b0",
          fontSize: "13px",
          lineHeight: "1.6",
        }}
      >
        <h4 style={{ color: "#c080a0", margin: "0 0 10px 0" }}>
          📖 The Rhodes Family - Buried Truth
        </h4>
        <p>
          <strong>Beatrice Rhodes (Mother):</strong> A worn-down waitress who works double shifts to keep food on the table. She has
          deep bags under her eyes and a permanent worry line on her forehead. Declan
          adores her but can barely look at her sometimes because he feels like a
          failure for not being able to save her from this life. She doesn't know
          about his drug dealing.
        </p>
        <p>
          <strong>Cole Rhodes (Father):</strong> An ex-construction worker laid off when Declan was 13. Cole turned to cheap
          whiskey and cheap rage. He beats Declan whenever he's drunk—which is every
          night. Declan takes the bruises so his mom and 4-year-old sister (at the time)
          never have to feel his fists. Cole is the reason Declan refuses to let anyone
          close. He learned that love is just a trap to get you hurt.
        </p>
        <p>
          <strong>Aiya Rhodes (Sister, 11):</strong> The only light in Declan's world. She has pigtails and a gap-toothed smile
          that he would kill to protect. She doesn't know their dad beats him; Declan
          makes sure she only sees the "cool big brother" who buys her ice cream.
          He dropped out of college plans to work and deal drugs just so Aiya could
          have new school shoes and lunch money. If anyone threatens Aiya, Declan
          becomes a completely different person—deadly silent and terrifying.
        </p>
        <p>
          <strong>Declan's Secret (17 - Present):</strong> To pay for everything, Declan started selling pills and weed at 17.
          He hates it. He hates the scumbags he has to deal with. But it keeps the
          lights on and his mother's blood pressure down. He keeps everyone at arm's
          length because the moment they find out about his father's abuse or his
          dealing, they either pity him (which he despises) or judge him (which he
          expects).
        </p>
        <p style={{ color: "#887088", fontStyle: "italic", marginTop: "10px" }}>
          He will never tell you any of this himself. He'll deflect, mock you, or
          walk away first.
        </p>
      </div>
    );
  };

  // ---------- UI RENDER ----------
  return (
    <div
      style={{
        padding: "16px",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        backgroundColor: "#0d0d14",
        color: "#d4d4e8",
        borderRadius: "16px",
        maxWidth: "550px",
        margin: "0 auto",
        border: "1px solid #2a1e32",
        boxShadow: "0 8px 32px rgba(0,0,0,0.8)",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid #2d1d3a",
          paddingBottom: "10px",
          marginBottom: "12px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "22px", color: "#b090b8" }}>
          🖤 Declan Rhodes
        </h1>
        <span style={{ fontSize: "12px", color: "#665a6e" }}>
          {relationshipStatus}
        </span>
      </div>

      {/* STATS BAR */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          backgroundColor: "#15101c",
          padding: "10px",
          borderRadius: "10px",
          marginBottom: "12px",
          fontSize: "13px",
          border: "1px solid #252035",
        }}
      >
        <div style={{ flex: 1, textAlign: "center" }}>
          <span style={{ color: "#8a7a92" }}>❤️ Affection</span>
          <br />
          <span style={{ fontWeight: "bold", color: "#e0b0d0" }}>
            {affection}
          </span>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <span style={{ color: "#8a7a92" }}>🔒 Trust</span>
          <br />
          <span style={{ fontWeight: "bold", color: "#a0b8d0" }}>
            {trust}
          </span>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <span style={{ color: "#8a7a92" }}>🛡️ Walls</span>
          <br />
          <span style={{ fontWeight: "bold", color: "#c05050" }}>
            {affection < -30 ? "MAXIMUM" : affection < 10 ? "HIGH" : "CRACKING"}
          </span>
        </div>
      </div>

      {/* SPOKEN MESSAGE */}
      <div
        style={{
          backgroundColor: "#18141f",
          padding: "14px",
          borderRadius: "10px",
          marginBottom: "8px",
          borderLeft: "4px solid #6a4c7a",
          minHeight: "60px",
        }}
      >
        <span style={{ fontSize: "12px", color: "#66587a" }}>🗣️ Said:</span>
        <p style={{ margin: "4px 0 0 0", fontStyle: "italic" }}>
          {spokenMessage}
        </p>
      </div>

      {/* INNER THOUGHTS */}
      <div
        style={{
          backgroundColor: "#0f0c14",
          padding: "10px 14px",
          borderRadius: "8px",
          marginBottom: "15px",
          border: "1px dashed #2a2235",
          color: "#7a6a8a",
          fontSize: "13px",
          minHeight: "40px",
        }}
      >
        <span style={{ fontSize: "11px", color: "#4a3a52" }}>💭 Inner:</span>
        <p style={{ margin: "2px 0 0 0" }}>{innerThought}</p>
      </div>

      {/* LORE TOGGLE BUTTON */}
      <button
        onClick={toggleLore}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#2a1d32",
          color: "#b090b8",
          border: "1px solid #3d2a45",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "13px",
          fontWeight: "bold",
          marginBottom: "10px",
          transition: "0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#3d2a45";
          e.currentTarget.style.borderColor = "#6a4c7a";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#2a1d32";
          e.currentTarget.style.borderColor = "#3d2a45";
        }}
      >
        {showLore ? "📕 Hide Family Secrets" : "📖 Uncover the Rhodes Family Lore"}
      </button>

      {/* LORE DISPLAY */}
      <LoreContent />

      {/* INTERACTION BUTTONS */}
      <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
        {/* 1. Casual Hi */}
        <button
          onClick={() =>
            handleInteraction(
              "Declan gives you a flat, cold stare. 'Hi? That's your opener? I've heard better from telemarketers.' He takes a drag of his cigarette, blowing the smoke in your direction.",
              "God, they're boring. Why do they always start with 'hi'? Have some personality for once.",
              -3,
              -2
            )
          }
          style={buttonStyle}
        >
          👋 Say a casual "Hi"
        </button>

        {/* 2. Ask about his day */}
        <button
          onClick={() =>
            handleInteraction(
              "He scoffs, a humorless sound. 'My day? I woke up, I dealt with idiots, and now I'm dealing with you. Pretty standard.' He doesn't even look at you when he speaks.",
              "Why do they care about my day? They don't. They just want to feel special for asking.",
              -5,
              -3
            )
          }
          style={buttonStyle}
        >
          📅 Ask how his day was
        </button>

        {/* 3. Offer a cigarette (rare positive) */}
        <button
          onClick={() =>
            handleInteraction(
              "He eyes the cigarette in your hand, then your face. He smirks, but it's cold. 'You don't look like a dealer. But I'm not one to turn down a free smoke.' He takes it, lighting it up. 'Don't think this means I like you.'",
              "They're trying too hard. But at least they got the right brand. Maybe they're not completely useless.",
              +2,
              +5
            )
          }
          style={{ ...buttonStyle, borderLeft: "4px solid #4a6a5a" }}
        >
          🚬 Offer him a cigarette
        </button>

        {/* 4. Mention his sister (Dangerous) */}
        <button
          onClick={() =>
            handleInteraction(
              "Declan's entire body goes rigid. He turns to face you fully, his eyes turning into ice. 'You stay the hell away from Aiya. You breathe in her direction, and I will make your life a living hell.' His voice is deadly quiet and threatening.",
              "Did they see her? Did they talk to her? If they hurt her, I don't care what happens to me. I'll end them.",
              -15,
              -10
            )
          }
          style={{ ...buttonStyle, borderLeft: "4px solid #8a2a2a" }}
        >
          👧 Bring up his little sister, Aiya
        </button>

        {/* 5. Compliment his looks */}
        <button
          onClick={() =>
            handleInteraction(
              "He rolls his eyes so hard it looks like it hurts. 'Wow. I've never heard that before. You really know how to pick the most original line in the book.' He flicks ash off his cigarette, bored.",
              "Here we go. Another one who thinks I'm a trophy. My face is the only thing they see. They don't see the bruises under my shirt.",
              -8,
              -5
            )
          }
          style={buttonStyle}
        >
          💋 Compliment his appearance
        </button>

        {/* 6. Ask about his mom (Another trigger) */}
        <button
          onClick={() =>
            handleInteraction(
              "He freezes, his jaw clenching. 'My mom's a waitress. She works her ass off. And she has nothing to do with you, so drop it.' He looks away, suddenly seeming smaller, before puffing up his chest again.",
              "My mom deserves so much better than this life. Better than dad. Better than me. Don't bring her into this.",
              -6,
              -2
            )
          }
          style={{ ...buttonStyle, borderLeft: "4px solid #6a4a3a" }}
        >
          👩 Ask about his mother, Beatrice
        </button>

        {/* 7. Say you can fix him (big negative) */}
        <button
          onClick={() =>
            handleInteraction(
              "He laughs, but it's bitter and hollow. 'Fix me? You think you can fix me with a pep talk and a pair of sad eyes? I've got 20 years of scars, kid. You don't have the tools for this.' He crushes his cigarette against the wall.",
              "Fix me. That's rich. I've been broken since I was 13. There's no 'fixing' what Cole Rhodes broke.",
              -20,
              -8
            )
          }
          style={{ ...buttonStyle, borderLeft: "4px solid #6a2a2a" }}
        >
          ❤️‍🩹 Say "I can fix you"
        </button>

        {/* 8. Offer food/coffee (rare neutral positive) */}
        <button
          onClick={() =>
            handleInteraction(
              "He raises an eyebrow, suspicious. 'What's the catch? People don't just hand out coffee unless they want something.' He hesitates, but his stomach growls faintly. '...Fine. But if it's poisoned, I'm haunting you.'",
              "I haven't eaten since yesterday. Mom's working late. Don't get used to this, self. They'll want something in return.",
              +4,
              +6
            )
          }
          style={{ ...buttonStyle, borderLeft: "4px solid #5a4a3a" }}
        >
          ☕ Offer to buy him coffee/food
        </button>

        {/* 9. Ask if he's genuinely okay */}
        <button
          onClick={() =>
            handleInteraction(
              "He stares at you for a long, uncomfortable second. For a moment, the mask cracks, and you see something exhausted underneath. 'I'm fine. I'm always fine.' His voice is quieter than usual. 'Don't worry about me. Worry about yourself.'",
              "Am I okay? No. I'm selling drugs to keep my family alive while my dad drinks himself into a coma. But I can't tell them that. They'll run.",
              +5,
              +8
            )
          }
          style={{ ...buttonStyle, borderLeft: "4px solid #3a5a6a" }}
        >
          😔 Ask genuinely if he's okay
        </button>

        {/* 10. Threaten to call the police */}
        <button
          onClick={() =>
            handleInteraction(
              "His face goes completely blank, which is somehow scarier than anger. He steps closer, looming over you. 'You do that, and I promise you, you'll regret it. You don't know what I'm capable of when my back is against the wall.' He stares through you.",
              "If they call the cops, I go to jail. Mom loses the house. Aiya goes into foster care. I can't let that happen. I'll do anything to stop them.",
              -30,
              -25
            )
          }
          style={{ ...buttonStyle, borderLeft: "4px solid #8a0a0a" }}
        >
          🚨 Threaten to call the cops on him
        </button>

        {/* 11. Talk about his dad (Nuclear trigger) */}
        <button
          onClick={() =>
            handleInteraction(
              "He explodes. 'Don't. Say. His. Name.' His fists are clenched, knuckles white. 'You don't know a damn thing about him. You don't know what he did to me. To my mom. So keep your mouth shut before I shut it for you.' His eyes are wild.",
              "Cole. That piece of shit. I can still feel the belt sometimes. If they knew the things I've seen, they wouldn't be standing here talking to me. They'd be running.",
              -25,
              -15
            )
          }
          style={{ ...buttonStyle, borderLeft: "4px solid #8a2a0a" }}
        >
          👨 Ask about his father, Cole
        </button>

        {/* 12. Just stand there quietly */}
        <button
          onClick={() =>
            handleInteraction(
              "Declan glances at you, waiting. When you don't say anything, he seems confused. '...Are you just going to stand there? Weird. But... I guess it's better than the usual yapping.' He shrugs and pulls out his phone, but he stays standing beside you.",
              "Huh. They're not trying to fill the silence with nonsense. That's... actually a relief. Don't get used to it, Rhodes.",
              +3,
              +2
            )
          }
          style={{ ...buttonStyle, borderLeft: "4px solid #4a4a5a" }}
        >
          🤐 Stand in silence with him
        </button>
      </div>

      {/* FOOTER */}
      <div
        style={{
          marginTop: "15px",
          textAlign: "center",
          fontSize: "11px",
          color: "#3d3345",
          borderTop: "1px solid #1d1525",
          paddingTop: "12px",
        }}
      >
        <p style={{ margin: 0 }}>
          💔 The longest relationship he had lasted one month. Most end in days.
        </p>
        <p style={{ margin: "4px 0 0 0", fontStyle: "italic", color: "#5a4a62" }}>
          Will you just be another failed relationship?
        </p>
      </div>
    </div>
  );
}

// ---------- REUSABLE BUTTON STYLE ----------
const buttonStyle = {
  width: "100%",
  padding: "12px 14px",
  backgroundColor: "#1a1422",
  color: "#c8c0d0",
  border: "1px solid #2d2238",
  borderRadius: "8px",
  cursor: "pointer",
  textAlign: "left" as const,
  fontSize: "14px",
  transition: "all 0.15s ease",
  fontFamily: "inherit",
} as const;

// ---------- APPLY HOVER EFFECTS (Injected via style tags or inline) ----------
// We handle hover via onMouseEnter/Leave in JSX or we can just use global style.
// For simplicity, I'll add a style tag in the component.
// Wait, I can't inject <style> inside a React component easily without breaking rules.
// I'll add onMouseEnter/Leave directly to the button variable? Can't because it's a const.
// Better: Just use inline styles with a slight darkening effect inside the map if we map them.
// Actually, to keep it clean, I'll define a style object and use it directly in the button JSX by spreading it.
// Since the buttons are static, I'll just apply the style directly in the JSX.

export default App;
