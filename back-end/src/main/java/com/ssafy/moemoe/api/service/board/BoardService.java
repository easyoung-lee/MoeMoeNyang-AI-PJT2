package com.ssafy.moemoe.api.service.board;

import com.ssafy.moemoe.api.request.board.BoardSaveReq;
import com.ssafy.moemoe.api.request.board.TagSaveReq;
import com.ssafy.moemoe.api.response.board.BoardLoadResp;
import com.ssafy.moemoe.api.response.board.BoardResp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.UUID;

/**
 * Board 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface BoardService {
    // 게시물 생성
    BoardResp createBoard(UUID member_id, String img, BoardSaveReq boardSaveReq);

    void createTag(Long board_id, List<TagSaveReq> tagSaveReqs);

    Page<BoardLoadResp> searchAllBoard(Long universityId, String tagName, Pageable pageable);

    // 이모지 취소
//    void deleteReaction(String email, Long interview_id);

    // 이모지 달기
//    void updateReaction(Long user_id, InterviewStateReq interviewStateReq);

}
