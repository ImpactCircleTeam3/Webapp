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
