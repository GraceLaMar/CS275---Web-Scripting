# HW4 — Accessible Form inclduing Empathy & Semantics

## LLM Collaboration
## Prompt:
Propose a minimal, accessible design token set (CSS variables) and tone guidelines for a friendly signup form. Ensure WCAG AA contrast for body text on bg/surface. Suggest concise field labels and helper text that reduce user uncertainty. Return tokens and a short rationale.

## My Token Set
:root {
      --color-bg: #fdfdfd;
      --color-surface: #ffffff;
      --color-text: #222222;   /* High contrast on white */
      --color-accent: #006ebd; /* Focus ring + accents */
      --color-muted: red; 

      --font-base: 'Helvetica Neue', Arial, sans-serif;
      --font-heading: 'Georgia', serif;

      --radius: 0.5rem;
      --gap: 1rem;
      --shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

      /* Spacing scale used by form styles */
      --space-1: 0.25rem;
      --space-2: 0.5rem;
      --space-3: 0.75rem;
      --space-4: 1rem;
      --space-5: 1.5rem;
}


## My Revised Variables and Rules


## Suggested Changes

- This suggested that I rewrite the helper text to reduce uncertintity and not restate labels. 
- It suggested the I use clear tone.


## My Critiques and Changes

- I changed my wording to be clearer and straightforward
- I rewrote the helper text differently from the labels. 


## Accessibility Notes
- The HTML document includes a language attribute (`lang="en"`).
- A descriptive page title is set in the `<head>` as My Web DNA.
- All links use meaningful text.
- Focus outlines are preserved for keyboard navigation.
- Color contrast was checked using the WebAIM Contrast Checker.

## Design Tokens
- --color-bg: controls the background color of the page
- --color-surface: controls the color of the main section of background
- --color-text: controls the color of the text 
- --color-accent: controls the accent color for headings and links
- --color-muted: controls the muted background of the cards

## Empathy Notes

- Helper text clarifies expectations rather than restating labels
- Instructions emphasize reassurance by offering confirmation
- Field labels are simple for understanding

https://github.com/GraceLaMar/CS275---Web-Scripting/tree/main 

## Timebox
Approximately 3.5 hours.
