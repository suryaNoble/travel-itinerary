# Travel Itinerary App – Project Documentation

## Project Structure

```
/src
  /components
    ActivityCard.jsx
    ActivitiesSection.jsx
    AccommodationCard.jsx
    AccommodationSection.jsx
    BottomNavBar.jsx
    ContinueButton.jsx
    DashboardPage.jsx
    DestinationInput.jsx
    DurationSelect.jsx
    FlightDetailsCard.jsx
    Header.jsx
    OnboardingPage.jsx
    ThirdPaneModal.jsx
    TravelGroupSelector.jsx
    UpcomingTripCard.jsx
    UserGreeting.jsx
  /styles
    onboarding.css
    dashboard.css
  App.js
  index.js
```

---

## Component Hierarchy

### 1. Onboarding Flow
- **App**
  - `OnboardingPage`
    - `Header`
    - `DestinationInput`
    - `DurationSelect`
    - `TravelGroupSelector`
    - `ContinueButton`

### 2. Dashboard/Main Flow
- **App**
  - `DashboardPage`
    - `UserGreeting`
    - `UpcomingTripCard`
    - `FlightDetailsCard`
    - `AccommodationSection`
      - `AccommodationCard` (reusable)
    - `ActivitiesSection`
      - `ActivityCard` (reusable)
    - `BottomNavBar`
    - `ThirdPaneModal` (for "See all"/details)

---

## Styling
- **onboarding.css**: Styles for the onboarding flow, including dark/light theme support.
- **dashboard.css**: Styles for the dashboard, all sections, modal, and bottom nav, with dark/light theme and responsive design.

---

## Navigation & State
- **App.js** manages:
  - Theme switching (dark/light)
  - Navigation between onboarding and dashboard
- **ThirdPaneModal** is used for "See all"/details in dashboard sections.

---

## Challenges Faced

1. **Pixel-Perfect Figma Translation**
   - Ensuring the UI matches Figma exactly required careful attention to spacing, font sizes, and color contrast, especially for both dark and light themes.

2. **Theme Switching**
   - Making sure all components and nested elements responded correctly to theme changes, especially with deeply nested selectors and background blending.

3. **Responsiveness**
   - Adapting the design for mobile and desktop required custom media queries and flexible layouts, especially for cards and the bottom navigation bar.

4. **Component Reusability**
   - Breaking down the UI into logical, reusable components while keeping props and state management simple and maintainable.

5. **Third Pane/Modal Functionality**
   - Implementing a modal that overlays the dashboard, is accessible, and works seamlessly with the rest of the UI.

---

## Summary

- The app is modular, maintainable, and closely follows React best practices.
- All UI and interactivity are based on your Figma design, with full support for dark/light themes and mobile responsiveness.
- The codebase is ready for further extension, such as API integration or more advanced navigation. 