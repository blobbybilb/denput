import { pynput } from "../deps.ts"

enum Key {
  Alt = pynput.keyboard.Key.alt,
  AltGr = pynput.keyboard.Key.alt_gr,
  Backspace = pynput.keyboard.Key.backspace,
  CapsLock = pynput.keyboard.Key.caps_lock,
  Cmd = pynput.keyboard.Key.cmd,
  CmdL = pynput.keyboard.Key.cmd_l,
  CmdR = pynput.keyboard.Key.cmd_r,
  Ctrl = pynput.keyboard.Key.ctrl,
  CtrlL = pynput.keyboard.Key.ctrl_l,
  CtrlR = pynput.keyboard.Key.ctrl_r,
  Delete = pynput.keyboard.Key.delete,
  Down = pynput.keyboard.Key.down,
  End = pynput.keyboard.Key.end,
  Enter = pynput.keyboard.Key.enter,
  Esc = pynput.keyboard.Key.esc,
  F1 = pynput.keyboard.Key.f1,
  F2 = pynput.keyboard.Key.f2,
  F3 = pynput.keyboard.Key.f3,
  F4 = pynput.keyboard.Key.f4,
  F5 = pynput.keyboard.Key.f5,
  F6 = pynput.keyboard.Key.f6,
  F7 = pynput.keyboard.Key.f7,
  F8 = pynput.keyboard.Key.f8,
  F9 = pynput.keyboard.Key.f9,
  F10 = pynput.keyboard.Key.f10,
  F11 = pynput.keyboard.Key.f11,
  F12 = pynput.keyboard.Key.f12,
  F13 = pynput.keyboard.Key.f13,
  F14 = pynput.keyboard.Key.f14,
  F15 = pynput.keyboard.Key.f15,
  F16 = pynput.keyboard.Key.f16,
  F17 = pynput.keyboard.Key.f17,
  F18 = pynput.keyboard.Key.f18,
  F19 = pynput.keyboard.Key.f19,
  F20 = pynput.keyboard.Key.f20,
  Home = pynput.keyboard.Key.home,
  Left = pynput.keyboard.Key.left,
  PageDown = pynput.keyboard.Key.page_down,
  PageUp = pynput.keyboard.Key.page_up,
  Right = pynput.keyboard.Key.right,
  Shift = pynput.keyboard.Key.shift,
  ShiftL = pynput.keyboard.Key.shift_l,
  ShiftR = pynput.keyboard.Key.shift_r,
  Space = pynput.keyboard.Key.space,
  Tab = pynput.keyboard.Key.tab,
  Up = pynput.keyboard.Key.up,
  MediaPlayPause = pynput.keyboard.Key.media_play_pause,
  MediaVolumeMute = pynput.keyboard.Key.media_volume_mute,
  MediaVolumeDown = pynput.keyboard.Key.media_volume_down,
  MediaVolumeUp = pynput.keyboard.Key.media_volume_up,
  MediaPrevious = pynput.keyboard.Key.media_previous,
  MediaNext = pynput.keyboard.Key.media_next,
  Insert = pynput.keyboard.Key.insert,
  Menu = pynput.keyboard.Key.menu,
  NumLock = pynput.keyboard.Key.num_lock,
  Pause = pynput.keyboard.Key.pause,
  PrintScreen = pynput.keyboard.Key.print_screen,
  ScrollLock = pynput.keyboard.Key.scroll_lock,
}

export { Key }
