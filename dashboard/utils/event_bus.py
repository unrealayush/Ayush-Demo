import time
from typing import Dict, List, Any, Callable

class EventBus:
    """
    A lightweight, high-performance, synchronous Event Bus.
    Enables decoupled publish-subscribe communication across dashboard components.
    """
    def __init__(self):
        self._subscribers: Dict[str, List[Callable]] = {}

    def subscribe(self, event_name: str, callback: Callable) -> None:
        """
        Registers a callback function to listen for a specific event.
        """
        if event_name not in self._subscribers:
            self._subscribers[event_name] = []
        if callback not in self._subscribers[event_name]:
            self._subscribers[event_name].append(callback)
            print(f"🔌 [EventBus] Subscribed callback to event: '{event_name}'")

    def publish(self, event_name: str, *args, **kwargs) -> List[Any]:
        """
        Triggers all registered callbacks for the given event, passing arguments.
        Returns a list of all callback return values.
        """
        results = []
        if event_name in self._subscribers:
            print(f"📡 [EventBus] Publishing event: '{event_name}' with {len(self._subscribers[event_name])} listeners")
            for callback in self._subscribers[event_name]:
                try:
                    res = callback(*args, **kwargs)
                    results.append(res)
                except Exception as e:
                    print(f"🚨 [EventBus] Error in listener for '{event_name}': {e}")
                    results.append(None)
        return results

    def clear_all(self) -> None:
        """
        Clears all subscriptions.
        """
        self._subscribers.clear()

# Global Event Bus instance
_global_bus = EventBus()

def get_event_bus() -> EventBus:
    return _global_bus
