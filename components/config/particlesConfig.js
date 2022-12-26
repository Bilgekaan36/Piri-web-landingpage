const particlesConfig = {
  background: {
    color: {
      value: "#ffffff",
    },
    opacity: 1,
  },
  fpsLimit: 120,
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ["#6691C3", "#000000", "#bababa"],
    },
    links: {
      color: "random",
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: false,
        area: 800,
      },
      value: 10,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 10, max: 60 },
    },
  },
  detectRetina: true,
};

export default particlesConfig;
