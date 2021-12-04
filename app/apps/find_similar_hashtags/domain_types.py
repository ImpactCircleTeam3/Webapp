from dataclasses import dataclass
from typing import List


@dataclass
class HashtagRelationCounts:
    hashtag: str
    relationship_count: int


@dataclass
class SimilarHashtag:
    source: str
    hashtag: str
    score: int


@dataclass
class NGram:
    dimension: int
    sequence: List[str]
    frequency: int
    q: str
    type: str


@dataclass
class Bubble:
    id: int
    title: str
    hashtags: List[str]
    is_ready: bool
